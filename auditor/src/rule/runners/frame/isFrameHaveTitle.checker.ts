import {Page} from 'puppeteer';
import {RuleResult} from '../../results/rule-result';

const ruleName = 'Does all Frames have a title ?';
const ruleDescription = 'When you have iframe on your page, you should add title attribute which describe your iframe';
const sources = [
    "https://www.w3.org/TR/WCAG20-TECHS/H64.html"
];

export async function isFrameHaveTitle(page: Page): Promise<RuleResult> {
    // parsing section
    const results = await page.evaluate(() => {
        const frames = document.querySelectorAll<HTMLImageElement>('frame:not([title]), iframe:not([title])');
        return Array.from(frames).map((image: HTMLImageElement) => image.getAttribute('title') ?? 'not-found');
    });

    // decision section
    if (results.length === 0) {
        return RuleResult.createSuccessRecommandation(ruleName, ruleDescription);
    } else {
        return RuleResult.createErrorRecommandation(ruleName, ruleDescription, results, sources);
    }
}
