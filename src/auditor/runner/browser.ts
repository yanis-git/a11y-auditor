import {Page, Browser as PuppeteerBrowser} from 'puppeteer';
import puppeteer from "puppeteer";

export class Browser {
    private browser!: PuppeteerBrowser;
    private page!: Page;
    private isDebug: boolean;
    constructor(isDebug: boolean = false) {
        this.isDebug = isDebug;
    }

    async start(url: string): Promise<Page> {
        if (!this.isBootstrapped()) {
            await this.bootstrapBrowser();
        }

        // await this.page.setDefaultNavigationTimeout(0);
        await this.page.goto(url);

        return this.page;
        // await this.page.waitForNavigation({ waitUntil: 'networkidle0' });
    }

    private async bootstrapBrowser() {
        this.browser = await puppeteer.launch({
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
}
