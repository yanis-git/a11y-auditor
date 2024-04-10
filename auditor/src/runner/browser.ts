import { executablePath, Page, Browser as PuppeteerBrowser } from "puppeteer";
import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import * as fs from "fs";

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
    await this.page.setBypassCSP(true);
    await this.page.goto(url);
    // await this.page.addScriptTag({ path: this.getBrowserScriptPath() });
    await this.page.evaluate(this.getBrowserScript());
    return this.page;
  }

  private async bootstrapBrowser() {
    this.browser = await puppeteer.use(StealthPlugin()).launch({
      // headless: !this.isDebug,
      args: ["--window-size=1920,1080"],
      ignoreHTTPSErrors: true,
      executablePath: executablePath(),
    });

    this.page = await this.browser.newPage();
  }

  async stop() {
    await this.browser.close();
  }
  private isBootstrapped(): boolean {
    return this.page !== undefined;
  }

  private getBrowserScript(): string {
    return fs.readFileSync(this.browserDir + "/index.js", "utf-8").toString();
  }

  private getBrowserScriptPath(): string {
    return require.resolve(this.browserDir + "/index.js");
  }
}
