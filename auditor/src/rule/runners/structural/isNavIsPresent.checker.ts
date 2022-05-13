import {Page} from 'puppeteer';
import {RuleResult} from '../../results/rule-result';

const ruleName = 'Is navigation is present ?';
const ruleDescription = 'primary navigation is required, it help a lot to quickly identify which page can be visited';
const sources = [
    "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/navigation_role"
];
import {helper} from '../../../../../dist/browser';
declare var a11yAuditor: {helper: typeof helper};
export async function isNavIsPresent(page: Page): Promise<RuleResult> {
    // parsing section
    const results = await page.evaluate(() => {
        return Array
            .from(document.querySelectorAll<HTMLElement>('nav, [role=navigation]'))
            .filter(el => a11yAuditor.helper.isVisibleForScreenReader(el))
            .map(el => a11yAuditor.helper.getCssPath(el))
        ;
    });

    if (results.length === 0) {
        return RuleResult.createErrorRecommandation(ruleName, ruleDescription, ['Primary navigation landmark is missing'], sources);
    }

    return RuleResult.createSuccessRecommandation(ruleName, ruleDescription);
}
