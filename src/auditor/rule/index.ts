import {Page} from 'puppeteer';
import {RuleResult} from './results/rule-result';
import {imageRunners} from './runners/image';
import {structuralRunners} from './runners/structural';
import {frameRunners} from './runners/frame';
export type Runner = (page: Page) => Promise<RuleResult>;

export const runners: Runner[] = [
    ...imageRunners,
    ...structuralRunners,
    ...frameRunners
];
