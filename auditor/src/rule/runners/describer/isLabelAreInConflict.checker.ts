import {Page} from 'puppeteer';
import {RuleResult} from '../../results/rule-result';

const ruleName = 'Do we have multiple describer at once ?';
const ruleDescription = 'there is multiple labelling, we should use only once per element to avoid different behavior of the browser.';
const sources = [
    "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby",
    "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby",
];

const supportedDescribers = ['aria-labelledby', 'aria-describedby', 'aria-label', 'aria-title', 'aria-placeholder', 'aria-description', 'title', 'placeholder'];

export async function isLabelAreInConflict(page: Page): Promise<RuleResult> {
    // parsing section
    const results = await page.evaluate((supportedDescribers: string[]) => {
        const results: string[] = [];
        supportedDescribers.forEach((selector1, index1) => {
            supportedDescribers.forEach((selector2, index2 ) => {
                if (selector1 === selector2 || index2 <=index1) { return; }
                Array
                    .from(document.querySelectorAll(`[${selector1}],[${selector2}]`))
                    .forEach(element => {
                        const label1 = element.getAttribute(selector1);
                        const label2 = element.getAttribute(selector2);
                        // is considered as invalid if current element have two-way to labellise, and they are not the same
                        if (label1 && label2 && label1 !== label2) {
                            results.push(`${selector1}=${label1} and ${selector2}=${label2}`);
                        }
                    });
            });
        });
        return results;
    }, supportedDescribers);

    // decision section
    if (results.length === 0) {
        return RuleResult.createSuccessRecommandation(ruleName, ruleDescription);
    } else {
        return RuleResult.createErrorRecommandation(ruleName, ruleDescription, results, sources);
    }
}
