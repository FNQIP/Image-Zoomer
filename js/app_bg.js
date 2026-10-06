/* Image Zoomer - background helpers (Manifest V3 / Service Worker)
 * ------------------------------------------------------------------
 * 该文件由 js/background.js 通过 importScripts() 载入,
 * 运行在扩展 Service Worker 作用域中(无 DOM、无 window、无 localStorage)。
 */
var app, cfg, Tabs, Port, saveURI, to_fromHistory;

var EXT_BASE = chrome.runtime.getURL("");

app = chrome.runtime.getManifest();
app = { name: app.name, version: app.version };

/* 相对路径 -> 扩展内绝对 URL(替代 MV2 中的 document.baseURI) */
var extURL = function(path) {
    return path && /^[a-z][a-z0-9+.-]*:/i.test(path) ? path : chrome.runtime.getURL(path);
};

cfg = {
    get: function(keys) {
        return chrome.storage.local.get(keys).then(function(items) {
            var key;
            for (key in items)
                try {
                    if (!items[key]) throw Error;
                    items[key] = JSON.parse(items[key]);
                } catch (ex) {
                    delete items[key];
                }
            return items;
        });
    },
    set: function(items) {
        var key;
        var out = {};
        for (key in items) out[key] = JSON.stringify(items[key]);
        return chrome.storage.local.set(out);
    },
    remove: function(keys) {
        return chrome.storage.local.remove(keys);
    }
};

Tabs = {
    create: function(params) {
        return chrome.tabs.create(params);
    }
};

Port = {
    parse_msg: function(msg, sender, sendResponse) {
        sender = sender || {};
        return {
            msg: msg,
            origin: sender.url || null,
            tab: sender.tab || null,
            isPrivate: !!(sender.tab && sender.tab.incognito),
            postMessage: typeof sendResponse === "function" ? sendResponse : function() {}
        };
    },
    listen: function(fn) {
        /* MV3: 监听器必须在 Service Worker 顶层同步注册 */
        chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
            fn(msg, sender, sendResponse);
            return true; // 异步响应
        });
    }
};

to_fromHistory =
    chrome.history &&
    function(url, removeIfVisited) {
        if (removeIfVisited)
            chrome.history.getVisits({ url: url }, function(visits) {
                chrome.history[(visits.length ? "delete" : "add") + "Url"]({ url: url });
            });
        else chrome.history.addUrl({ url: url });
    };

saveURI = function(details) {
    if (!details || !details.url) return;
    try {
        return chrome.downloads.download({ url: details.url, incognito: details.isPrivate });
    } catch (ex) {
        return chrome.downloads.download({ url: details.url });
    }
};
