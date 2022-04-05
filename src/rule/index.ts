import {Page} from 'puppeteer';
import {RuleResult} from './results/rule-result';
import {imageRunners} from './runners/image';
export type Runner = (page: Page) => Promise<RuleResult>;

export const runners: Runner[] = [
    ...imageRunners,
];
