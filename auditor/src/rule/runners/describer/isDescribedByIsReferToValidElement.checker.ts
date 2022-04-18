import {Page} from 'puppeteer';
import {RuleResult} from '../../results/rule-result';

const ruleName = 'DescribeBy refer to a valid id ?';
const ruleDescription = 'when you use describedBy, you should refer to a valid id, present on the page';
const sources = [
    "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby",
    "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby",
];

export async function isDescribedByIsReferToValidElement(page: Page): Promise<RuleResult> {
    // parsing section
    const results = await page.evaluate(() => {
        const elements = document.querySelectorAll<HTMLElement>('[aria-describedby], [aria-labelledby]');
        return Array
            .from(elements)
            .filter((element: HTMLElement) => {
                // we check both attribute.
                const id = element.getAttribute('aria-describedby') || element.getAttribute('aria-labelledby');
                const idIsProvided = id !== null && id !== '';
                return (
                    !idIsProvided ||
                    // must be present once on the page.
                    document.querySelectorAll(`#${id}`).length !== 1
                    // todo must have a content from innerText or aria-label.
                );
            })
            .map(element => (element.getAttribute('aria-describedby') || element.getAttribute('aria-labelledby') as string));
        });

    // decision section
    if (results.length === 0) {
        return RuleResult.createSuccessRecommandation(ruleName, ruleDescription);
    } else {
        return RuleResult.createErrorRecommandation(ruleName, ruleDescription, results, sources);
    }
}
