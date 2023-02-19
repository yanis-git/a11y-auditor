import {Page} from 'puppeteer';
import {RuleResult} from '../../results/rule-result';
import {helper} from '../../../../../dist/browser';

const ruleName = 'Image have alt attribute ?';
const ruleDescription = 'Images should have alt attribute, it can be empty or contain text';
const sources = [
    "https://www.w3.org/TR/WCAG20-TECHS/H37.html",
    "https://html.spec.whatwg.org/multipage/images.html#alt"
];
declare let a11yAuditor: {helper: typeof helper};
export async function isImagesHaveAltChecker(page: Page): Promise<RuleResult> {
    // parsing section
    const results = await page.evaluate(() => {
        const images = document.querySelectorAll<HTMLImageElement>('img:not([alt])');
        return Array.from(images).map(image => a11yAuditor.helper.getCssPath(image))
    });

    // decision section
    if (results.length === 0) {
        return RuleResult.createSuccessRecommandation(ruleName, ruleDescription);
    } else {
        return RuleResult.createErrorRecommandation(ruleName, ruleDescription, results, sources);
    }
}
