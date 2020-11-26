var s = document.createElement("script");
s.src = chrome.extension.getURL("dist/bundle.js");
(document.head || document.documentElement).appendChild(s);