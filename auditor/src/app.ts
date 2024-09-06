import { Browser } from "./runner/browser";
import { Page } from "puppeteer";
import { getRunnersCandidate } from "./rule";
import { RuleResult } from "./rule/results/rule-result";
import path from "path";
import * as fs from "fs";

export interface AppConfig {
  url: string;
  isDebug: boolean;
  onlyAxe: boolean;
  path: {
    projectDir: string;
    browserDir: string;
    auditorDir: string;
  };
}

const defaultConfig = {
  isDebug: false,
  url: "https://github.com/yanis-git",
  onlyAxe: false,
  path: {
    projectDir: path.join(__dirname, "..", ".."),
    browserDir: path.join(__dirname, "..", "../browser"),
    auditorDir: path.join(__dirname, "..", "../auditor"),
  },
};

export class App {
  private config: AppConfig;
  private browser: Browser;
  constructor(config?: Partial<AppConfig>) {
    this.config = { ...defaultConfig, ...config };
    this.browser = new Browser(
      this.config.isDebug,
      this.config.path.browserDir,
    );
  }

  async run() {
    const page = await this.browser.start(this.config.url);
    const results = await this.runRules(page);
    this.writeResults(results);
    if (!this.config.isDebug) {
      await this.browser.stop();
    }
  }

  private async runRules(page: Page): Promise<RuleResult[]> {
    const results: RuleResult[] = [];
    for (const rule of getRunnersCandidate({ onlyAxe: this.config.onlyAxe })) {
      try {
        const runResult = await rule(page);
        results.push(...(Array.isArray(runResult) ? runResult : [runResult]));
      } catch (e) {
        console.error(e);
      }
    }
    return results;
  }

  private writeResults(results: RuleResult[]) {
    console.table(results.map((result) => result.toJson()));

    const splitter: { [key: string]: RuleResult[] } = {
      success: results.filter((result) => result.isSuccess()),
      errors: results.filter((result) => result.isError()),
    };

    Object.keys(splitter).forEach((key) => {
      fs.writeFileSync(
        path.join(this.config.path.projectDir, `../results/${key}.json`),
        JSON.stringify(
          splitter[key].map((result) => result.toJson()),
          null,
          2,
        ),
      );
    });
  }
}
