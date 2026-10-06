/*
 * Image Zoomer - sieve JS 规则预编译器
 * ---------------------------------------------------------------
 * MV3 的内容脚本继承扩展 CSP（script-src 'self' 'wasm-unsafe-eval'），
 * 不允许 eval / new Function，导致 sieve.jsn 中以 ":" 开头的 JS 型规则
 * （to / img / url / res）在运行时编译失败。
 *
 * 本脚本把 sieve.jsn 中的 JS 规则源码生成为真实的函数定义文件
 * includes/sieve_rules.js，由 manifest 作为内容脚本注入（同一隔离世界），
 * 运行时按 "参数名\u0000原始代码" 精确查找，行为与 MV2 的 Function 编译完全一致。
 *
 * 重新生成：node tools/build-sieve-rules.js
 */
"use strict";

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const sieve = JSON.parse(fs.readFileSync(path.join(ROOT, "sieve.jsn"), "utf8"));

const SEP = "\u0000";
const entries = new Map(); // key -> { params, body }
let skipped = 0;

function add(key, params, body, src) {
    if (entries.has(key)) return;
    try {
        // 仅做编译校验（不执行），与运行时 Function() 编译等价
        new Function(params, body);
    } catch (ex) {
        skipped++;
        console.warn("跳过无法编译的规则代码:", JSON.stringify(src.slice(0, 60)), "-", ex.message);
        return;
    }
    entries.set(key, { params, body });
}

for (const name of Object.keys(sieve)) {
    const rule = sieve[name];
    if (!rule || typeof rule !== "object") continue;

    // to / img：非内联（函数体），调用形式 Function("var $ = arguments; " + code.slice(1))
    for (const param of ["to", "img"]) {
        const v = rule[param];
        if (typeof v !== "string" || !/^:\n\s*\S/.test(v)) continue;
        const body = "var $ = arguments; " + v.slice(1) + "\n";
        add(param + SEP + v, "", body, name + ":" + param);
    }

    // url：内联（表达式），调用形式 Function("var $ = arguments; return " + code.slice(1))
    const url = rule.url;
    if (typeof url === "string" && /^:\s*\S/.test(url)) {
        const body = "var $ = arguments; return " + url.slice(1) + "\n";
        add("url" + SEP + url, "", body, name + ":url");
    }

    // res：后台剥离 ":\n" 前缀后发给内容脚本，形式 Function("$", code)
    const res = rule.res;
    if (typeof res === "string" && /^:\n/.test(res)) {
        const stripped = res.slice(2);
        add("res" + SEP + stripped, "$", stripped + "\n", name + ":res");
    }
}

let out =
    "/* 自动生成自 sieve.jsn —— 请勿手工修改；重新生成: node tools/build-sieve-rules.js */\n" +
    "/* eslint-disable */\n" +
    "var IZ_RULE_FN = {\n";
for (const [key, fn] of entries) {
    out += "    " + JSON.stringify(key) + ": function(" + fn.params + "){" + fn.body + "},\n";
}
out +=
    "};\n" +
    "var izRuleFn = function(param, code) {\n" +
    "    return IZ_RULE_FN[param + \"\\u0000\" + code] || null;\n" +
    "};\n";

fs.writeFileSync(path.join(ROOT, "includes/sieve_rules.js"), out, "utf8");
console.log(
    "已生成 includes/sieve_rules.js: " + entries.size + " 条预编译规则" + (skipped ? "，跳过 " + skipped + " 条" : "")
);
