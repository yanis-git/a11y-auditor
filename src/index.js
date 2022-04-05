"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const browser_1 = require("./runner/browser");
const browser = new browser_1.Browser(true);
browser.start('http://docaxess.local/').then((page) => {
    page.evaluate(() => {
        var _a;
        console.log((_a = document.querySelectorAll('button')) === null || _a === void 0 ? void 0 : _a.length);
    }).then();
});
