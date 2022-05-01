import {Page} from 'puppeteer';
import {RuleResult} from '../../results/rule-result';
import {AxePuppeteer} from '@axe-core/puppeteer';

const ruleName = 'Is axe-core return success ?';
const ruleDescription = 'Axe-core is tool to analyze multiple accessibility criteria';
const sources = [
    "https://github.com/dequelabs/axe-core"
];

export async function performAxeAudit(page: Page): Promise<RuleResult[]> {
    // parsing section
    const results = await new AxePuppeteer(page).analyze();
    const ruleResults:RuleResult[] = [];
    results.passes.forEach(pass => {
        ruleResults.push(RuleResult.createSuccessRecommandation(pass.id, pass.description));
    });
    results.violations.forEach(pass => {
        ruleResults.push(RuleResult.createErrorRecommandation(pass.id, pass.description, pass.nodes.map(node => node.html)));
    });

    return ruleResults;
}
