"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Browser = void 0;
const puppeteer_1 = __importDefault(require("puppeteer"));
class Browser {
    constructor(isDebug = false) {
        this.isDebug = isDebug;
    }
    start(url) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.isBootstrapped()) {
                yield this.bootstrapBrowser();
            }
            // await this.page.setDefaultNavigationTimeout(0);
            yield this.page.goto(url);
            return this.page;
            // await this.page.waitForNavigation({ waitUntil: 'networkidle0' });
        });
    }
    bootstrapBrowser() {
        return __awaiter(this, void 0, void 0, function* () {
            this.browser = yield puppeteer_1.default.launch({
                headless: !this.isDebug,
                args: [
                    '--window-size=1920,1080',
                ],
            });
            this.page = yield this.browser.newPage();
        });
    }
    isBootstrapped() {
        return this.page !== undefined;
    }
}
exports.Browser = Browser;
