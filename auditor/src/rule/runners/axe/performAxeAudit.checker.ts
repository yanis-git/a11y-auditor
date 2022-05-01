import {Page} from 'puppeteer';
import {RuleResult} from '../../results/rule-result';
import {AxePuppeteer} from '@axe-core/puppeteer';

const ruleName = 'Is axe-core return success ?';
const ruleDescription = 'Axe-core is tool to analyze multiple accessibility criteria';
const sources = [
    "https://github.com/dequelabs/axe-core"
];

export async function performAxeAudit(page: Page): Promise<RuleResult> {
    // parsing section
    const results = await new AxePuppeteer(page).analyze();
    if (results.violations.length !== 0) {
        return RuleResult.createErrorRecommandation(ruleName, ruleDescription, results.violations.map(result => `${result.id} - ${result.description}`))
    } else {
        return RuleResult.createSuccessRecommandation(ruleName, ruleDescription);
    }
}
