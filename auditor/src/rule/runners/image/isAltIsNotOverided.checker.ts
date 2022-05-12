import {Page} from 'puppeteer';
import {RuleResult} from '../../results/rule-result';

const ruleName = 'Image have alt attribute override by something else ?';
const ruleDescription = 'Images tag must use alt attribute, not any other way such as aria-label, title etc';
const sources = [
    "https://fae.disability.illinois.edu/rulesets/IMAGE_1/#:~:text=The%20alt%20attribute%20is%20the,with%20role%3D%22img%22%20."
];

declare var a11yAuditor: any;
export async function isAltNotOverridden(page: Page): Promise<RuleResult> {
    // parsing section
    const results = await page.evaluate(() => {
        const images = document.querySelectorAll<HTMLImageElement>('img[alt][aria-label], img[alt][aria-labelledby]');
        return Array.from(images).map(image => a11yAuditor.helper.getCssPath(image));
    });

    // decision section
    if (results.length === 0) {
        return RuleResult.createSuccessRecommandation(ruleName, ruleDescription);
    } else {
        return RuleResult.createErrorRecommandation(ruleName, ruleDescription, results, sources);
    }
}
