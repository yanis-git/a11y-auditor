import {Page} from 'puppeteer';
import {RuleResult} from './results/rule-result';
import {imageRunners} from './runners/image';
import {structuralRunners} from './runners/structural';
import {frameRunners} from './runners/frame';
import {describerRunners} from './runners/describer';
import {ariaRunners} from './runners/aria';
import {axeRunners} from './runners/axe';
export type Runner = (page: Page) => Promise<RuleResult>;

export const runners: Runner[] = [
    ...imageRunners,
    ...structuralRunners,
    ...frameRunners,
    ...describerRunners,
    ...ariaRunners,
    ...axeRunners
];
