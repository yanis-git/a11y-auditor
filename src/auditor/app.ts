import {Browser} from './runner/browser';
import {Page} from 'puppeteer';
import {runners} from './rule';
import {RuleResult} from './rule/results/rule-result';

export interface AppConfig {
    url: string;
    isDebug: boolean;
}

const defaultConfig = {
    isDebug: false,
    url: "http://127.0.0.1:8000/dummy",
}

export class App {
    private config: AppConfig;
    private browser: Browser;
    constructor(config?: Partial<AppConfig>) {
        this.config = { ...defaultConfig, ...config };
        this.browser = new Browser(this.config.isDebug);
    }

    async run() {
        const page = await this.browser.start(this.config.url);
        const results = await this.runRules(page);
        console.log(results);
        await this.browser.stop();
    }

    private async runRules(page: Page): Promise<RuleResult[]> {
        const results: RuleResult[] = [];
        for (const rule of runners) {
            results.push(await rule(page))
        }
        return results;
    }
}