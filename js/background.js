/* Image Zoomer - Service Worker (Manifest V3)
 * 由 manifest.json 的 background.service_worker 直接加载。
 */
importScripts("app_bg.js");

var prefs_, sieveResLocal;

if (typeof RegExp.escape !== "function")
    RegExp.escape = function(s) {
        return s.replace(/[/\\^$-.+*?|(){}[\]]/g, "\\$&");
    };

var EXT_URL = function(path) {
    return extURL(path);
};

/* 读取扩展包内的 .jsn 配置文件(MV2 用的是 XMLHttpRequest) */
var fetchJSON = function(path) {
    return fetch(EXT_URL(path)).then(function(r) {
        if (!r.ok) throw new Error(path + " -> HTTP " + r.status);
        return r.text();
    }).then(function(text) {
        return JSON.parse(text);
    });
};

var withBaseURI = function(base, link, addProtocol) {
    if (link[1] === "/" && link[0] === "/") {
        if (addProtocol) return base.slice(0, base.indexOf(":") + 1) + link;
        return link;
    }
    if (/^[\w-]{2,20}:/i.test(link)) return link;
    return base.replace(link[0] === "/" ? /(\/\/[^/]+)\/.*/ : /(\/)[^/]*(?:[?#].*)?$/, "$1") + link;
};

var updateSieve = function() {
    return fetchJSON("sieve.jsn")
        .then(function(newSieve) {
            return cfg.get("sieve").then(function(items) {
                var localSieve = items.sieve;
                if (localSieve) {
                    var rule;
                    var tempSieve = {};
                    for (rule in localSieve) {
                        if (rule === "dereferers") break;
                        if (!newSieve[rule]) tempSieve[rule] = localSieve[rule];
                    }
                    for (rule in newSieve) tempSieve[rule] = newSieve[rule];
                    newSieve = tempSieve;
                }
                return updatePrefs({ sieve: newSieve }).then(function() {
                    console.info(app.name + ": Sieve updated from local repository.");
                });
            });
        })
        .catch(function(ex) {
            console.warn(app.name + ": Sieve failed to update from local repository! | " + ex.message);
        });
};

var cacheSieve = function(newSieve) {
    if (typeof newSieve === "string") newSieve = JSON.parse(newSieve);
    else newSieve = JSON.parse(JSON.stringify(newSieve));
    var cachedSieve = [];
    sieveResLocal = [];
    for (var ruleName in newSieve) {
        var rule = newSieve[ruleName];
        if ((!rule.link && !rule.img) || (rule.img && !rule.to && !rule.res)) continue;
        try {
            if (rule.off) throw new Error(ruleName + " is turned off");
            if (rule.res)
                if (/^:\n/.test(rule.res)) {
                    sieveResLocal[cachedSieve.length] = rule.res.slice(2);
                    rule.res = 1;
                } else {
                    if (rule.res.indexOf("\n") > -1) {
                        var lines = rule.res.split(/\n+/);
                        rule.res = RegExp(lines[0]);
                        if (lines[1]) rule.res = [rule.res, RegExp(lines[1])];
                    } else rule.res = RegExp(rule.res);
                    sieveResLocal[cachedSieve.length] = rule.res;
                    rule.res = true;
                }
        } catch (ex) {
            if (typeof ex === "object") console.error(ruleName, rule, ex);
            continue;
        }
        if (rule.to && rule.to.indexOf("\n") > 0 && rule.to.indexOf(":\n") !== 0) rule.to = rule.to.split("\n");
        delete rule.note;
        cachedSieve.push(rule);
    }
    prefs_.sieve = cachedSieve;
};

var onStoredPrefsReady = function(defPrefs, items, sentPrefs) {
    var needToUpdate, key, pref;
    var newPrefs = {};
    var itemsToStore = {};
    for (key in defPrefs) {
        needToUpdate = false;
        if (typeof defPrefs[key] === "object") {
            newPrefs[key] = sentPrefs[key] || items[key] || defPrefs[key];
            needToUpdate = true;
            if (!Array.isArray(defPrefs[key]))
                for (pref in defPrefs[key])
                    if (newPrefs[key][pref] === void 0 || typeof newPrefs[key][pref] !== typeof defPrefs[key][pref])
                        newPrefs[key][pref] = (!prefs_ || prefs_[key][pref] === void 0 ? defPrefs : prefs_)[key][pref];
        } else {
            pref = sentPrefs[key] || items[key] || defPrefs[key];
            if (typeof pref !== typeof defPrefs[key]) pref = defPrefs[key];
            if (!prefs_ || prefs_[key] !== pref) needToUpdate = true;
            newPrefs[key] = pref;
        }
        if (needToUpdate || items[key] === void 0) itemsToStore[key] = newPrefs[key];
    }
    prefs_ = newPrefs;
    if (newPrefs.grants) {
        pref = newPrefs.grants || [];
        var grants = [];
        for (key = 0; key < pref.length; ++key) {
            if (pref[key].op === ";") continue;
            grants.push({
                op: pref[key].op,
                url: pref[key].op.length === 2 ? RegExp(pref[key].url, "i") : pref[key].url
            });
        }
        if (grants.length) prefs_.grants = grants;
    }
    if (sentPrefs.sieve) {
        itemsToStore.sieve = typeof sentPrefs.sieve === "string" ? JSON.parse(sentPrefs.sieve) : sentPrefs.sieve;
        cacheSieve(itemsToStore.sieve);
    }
    return cfg.set(itemsToStore).then(function() {
        if (sentPrefs.sieve) return;
        return cfg.get("sieve").then(function(prefs) {
            if (prefs.sieve) cacheSieve(prefs.sieve);
            else return updateSieve();
        });
    });
};

/* 载入默认配置并合并已存储配置, 返回 Promise */
var updatePrefs = function(sentPrefs, callback) {
    if (!sentPrefs) sentPrefs = {};
    var done = fetchJSON("defaults.jsn")
        .then(function(defPrefs) {
            return cfg.get(Object.keys(defPrefs)).then(function(items) {
                return onStoredPrefsReady(defPrefs, items, sentPrefs);
            });
        })
        .catch(function(ex) {
            console.error(app.name + ": failed to load preferences | " + ex.message);
        });
    if (typeof callback === "function") done.then(callback);
    return done;
};

var onMessage = function(ev, origin, sendResponse) {
    var e = Port.parse_msg(ev, origin, sendResponse);
    var msg = e.msg;
    if (!msg || !msg.cmd) {
        e.postMessage();
        return;
    }
    switch (msg.cmd) {
        case "hello":
            var i, l, grants;
            var blockaccess = false;
            var sitePrefs = { hz: prefs_.hz, sieve: prefs_.sieve, tls: prefs_.tls, keys: prefs_.keys };
            if (prefs_.grants) {
                grants = prefs_.grants;
                for (i = 0, l = grants.length; i < l; ++i)
                    if (
                        grants[i].url === "*" ||
                        (grants[i].op[1] && grants[i].url.test(e.origin)) ||
                        (e.origin && e.origin.indexOf(grants[i].url) > -1)
                    )
                        blockaccess = grants[i].op[0] === "!" ? true : false;
            }
            e.postMessage({ cmd: "hello", prefs: blockaccess ? null : sitePrefs });
            return;
        case "cfg_get":
            if (!Array.isArray(msg.keys)) msg.keys = [msg.keys];
            cfg.get(msg.keys).then(function(items) {
                e.postMessage({ cmd: "cfg", cfg: items });
            });
            return;
        case "cfg_del":
            if (!Array.isArray(msg.keys)) msg.keys = [msg.keys];
            cfg.remove(msg.keys).then(function() {
                e.postMessage();
            });
            return;
        case "savePrefs":
            updatePrefs(msg.prefs).then(function() {
                e.postMessage();
            });
            return;
        case "download":
            saveURI({ url: msg.url, priorityExt: msg.priorityExt, ext: msg.ext, isPrivate: e.isPrivate });
            e.postMessage();
            return;
        case "history":
            if (typeof to_fromHistory === "function" && !e.isPrivate) to_fromHistory(msg.url, msg.manual);
            e.postMessage();
            return;
        case "open":
            if (!Array.isArray(msg.url)) msg.url = [msg.url];
            msg.url.forEach(function(url) {
                if (!url || typeof url !== "string") return;
                if (!/^[a-z][a-z0-9+.-]*:/i.test(url)) url = extURL(url);
                var params = { url: url, active: !msg.nf };
                if (e.tab && e.tab.id) params.openerTabId = e.tab.id;
                try {
                    Tabs.create(params);
                } catch (ex) {
                    delete params.openerTabId;
                    Tabs.create(params);
                }
            });
            e.postMessage();
            return;
        case "resolve":
            var data = { cmd: "resolved", id: msg.id, m: null, params: msg.params };
            var rule = prefs_.sieve[data.params.rule.id];
            if (!/^https?:/.test(msg.url)) {
                console.warn(app.name + ": URL pattern doesn't match: " + msg.url);
                e.postMessage(data);
                return;
            }
            if (data.params.rule.req_res) data.params.rule.req_res = sieveResLocal[data.params.rule.id];
            if (data.params.rule.skip_resolve) {
                data.params.url = [""];
                e.postMessage(data);
                return;
            }
            var post_params = /([^\s]+)(?: +:(.+)?)?/.exec(msg.url);
            msg.url = post_params[1];
            if (!post_params[2]) post_params[2] = null;
            if (rule.res === 1) {
                data.m = true;
                data.params._ = "";
                data.params.url = [post_params[1], post_params[2]];
            }
            var body = post_params[2];
            var opts = { method: body ? "POST" : "GET", credentials: "omit", redirect: "follow" };
            if (body) {
                opts.headers = { "Content-Type": "application/x-www-form-urlencoded" };
                opts.body = body;
            }
            fetch(msg.url, opts)
                .then(function(r) {
                    var type = r.headers.get("Content-Type") || "";
                    return r.text().then(function(text) {
                        return { type: type, text: text };
                    });
                })
                .then(function(res) {
                    var base_url, match;
                    if (/^(image|video|audio)\//i.test(res.type)) {
                        data.m = msg.url;
                        data.noloop = true;
                        console.warn(app.name + ": rule " + data.params.rule.id + " matched against an image file");
                        e.postMessage(data);
                        return;
                    }
                    /* Service Worker 中没有 DOM, 无法使用 responseXML, 直接按文本解析 <base> */
                    var head = res.text.slice(0, 4096);
                    if ((base_url = /<base\s+href\s*=\s*("[^"]+"|'[^']+')/.exec(head)))
                        base_url = withBaseURI(msg.url, base_url[1].slice(1, -1).replace(/&amp;/g, "&"), true);
                    else base_url = msg.url;
                    if (rule.res === 1) {
                        data.params._ = res.text;
                        data.params.base = base_url.replace(/(\/)[^\/]*(?:[?#].*)*$/, "$1");
                        e.postMessage(data);
                        return;
                    }
                    var _match = sieveResLocal[data.params.rule.id];
                    _match = (Array.isArray(_match) ? _match : [_match]).map(function(el) {
                        var sel = el.source || el;
                        if (sel.indexOf("$") === -1) return el;
                        var group = data.params.length;
                        group = Array.apply(null, Array(group))
                            .map(function(_, i) {
                                return i;
                            })
                            .join("|");
                        group = RegExp("([^\\\\]?)\\$(" + group + ")", "g");
                        group = !group.test(sel)
                            ? el
                            : sel.replace(group, function(m, prefix, id) {
                                  return id < data.params.length && prefix !== "\\"
                                      ? prefix + (data.params[id] ? RegExp.escape(data.params[id]) : "")
                                      : m;
                              });
                        return typeof el === "string" ? group : RegExp(group);
                    });
                    match = _match[0].exec(res.text);
                    if (match) {
                        var match_param = data.params.rule.loop_param;
                        if (
                            rule.dc &&
                            ((match_param === "link" && rule.dc !== 2) || (match_param === "img" && rule.dc > 1))
                        )
                            match[1] = decodeURIComponent(decodeURIComponent(match[1]));
                        data.m = withBaseURI(base_url, match[1].replace(/&amp;/g, "&"));
                        if (
                            (match[2] && (match = match.slice(1))) ||
                            (_match[1] && (match = _match[1].exec(res.text)))
                        )
                            data.m = [
                                data.m,
                                match
                                    .filter(function(el, idx) {
                                        return idx && el ? true : false;
                                    })
                                    .join(" - ")
                            ];
                    } else console.info(app.name + ": no match for " + data.params.rule.id);
                    e.postMessage(data);
                })
                .catch(function(ex) {
                    console.warn(app.name + ": resolve failed (" + msg.url + ") | " + ex.message);
                    e.postMessage(data);
                });
            return;
    }
    e.postMessage();
};

/* ------------------------------------------------------------------
 * MV3 的 Service Worker 会在空闲约 30 秒后被终止,
 * 内存中的 prefs_ 随之丢失, 因此每次唤醒都要确保配置已就绪。
 * ------------------------------------------------------------------ */
var readyPromise = null;
var ensureReady = function() {
    if (prefs_) return Promise.resolve();
    if (!readyPromise)
        readyPromise = updatePrefs().then(function() {
            return prefs_;
        });
    return readyPromise;
};

Port.listen(function(msg, sender, sendResponse) {
    ensureReady().then(function() {
        try {
            onMessage(msg, sender, sendResponse);
        } catch (ex) {
            console.error(app.name + ": " + ex.message);
            try {
                sendResponse();
            } catch (ex2) {}
        }
    });
    return true;
});

chrome.runtime.onInstalled.addListener(function(details) {
    if (details.reason === "install" || details.reason === "update") updatePrefs();
});

/* 启动时预热 */
ensureReady();
