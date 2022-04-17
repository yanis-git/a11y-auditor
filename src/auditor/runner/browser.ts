import {Page, Browser as PuppeteerBrowser} from 'puppeteer';
import puppeteer from 'puppeteer-extra'
import StealthPlugin from 'puppeteer-extra-plugin-stealth';

export class Browser {
    private browser!: PuppeteerBrowser;
    private page!: Page;
    private isDebug: boolean;
    constructor(isDebug: boolean, private browserDir: string) {
        this.isDebug = isDebug;
    }

    async start(url: string): Promise<Page> {
        if (!this.isBootstrapped()) {
            await this.bootstrapBrowser();
        }
        await this.page.goto(url);
        await this.page.addScriptTag({ path: this.getBrowserScript() });
        return this.page;
    }

    private async bootstrapBrowser() {
        this.browser = await puppeteer
            .use(StealthPlugin())
            .launch({
                headless: !this.isDebug,
                args: [
                    '--window-size=1920,1080',
                ],
            });
        this.page = await this.browser.newPage();
    }

    async stop() {
        await this.browser.close();
    }
    private isBootstrapped(): boolean {
        return this.page !== undefined;
    }

    private getBrowserScript() {
        return require.resolve(this.browserDir + '/index.js');
    }
}
