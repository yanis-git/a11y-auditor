import {Page} from 'puppeteer';
import {RuleResult} from '../../results/rule-result';

const ruleName = 'Is main tag is present ?';
const ruleDescription = 'Main tag is required, it is landmark of the page and should be used once per page';
const sources = [
    "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/main_role"
];

import {helper} from '../../../../../dist/browser';
declare var a11yAuditor: {helper: typeof helper};

export async function isMainTagIsPresent(page: Page): Promise<RuleResult> {
    // parsing section
    const results = await page.evaluate(() => {
        return Array
            .from(document.querySelectorAll<HTMLElement>('main, [role=main]'))
            .filter(el => a11yAuditor.helper.isVisibleForScreenReader(el))
            .map(el => a11yAuditor.helper.getCssPath(el))
        ;
    });

    if (results.length === 0) {
        return RuleResult.createErrorRecommandation(ruleName, ruleDescription, ['Main landmark is missing'], sources);
    }
    if (results.length > 1) {
        return RuleResult.createErrorRecommandation(ruleName, ruleDescription, ['Main landmark is present more than once. Use hidden attributes or remove tags', ...results], sources);
    }
    return RuleResult.createSuccessRecommandation(ruleName, ruleDescription);
}
