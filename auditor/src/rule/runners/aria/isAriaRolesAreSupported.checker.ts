import {Page} from 'puppeteer';
import {RuleResult} from '../../results/rule-result';
import {AriaRoles} from './characteristics/type';

const ruleName = 'elements have only supported aria attribute ?';
const ruleDescription = 'this elements should have only supported aria attribute.';
const sources = [
    "https://www.w3.org/TR/wai-aria-1.1/#namefromcontent",
];

export async function isAriaRolesAreSupported(ariaRoles: AriaRoles, page: Page): Promise<RuleResult> {
    // parsing section
    const results: {role: string, attributes: string[]}[] = await page.evaluate((aria: AriaRoles) => {
        const results = [];
        for (const [role, information] of Object.entries(aria)) {
            const elements = document.querySelectorAll(information.selector);
            const invalidAttributeFound = new Set<string>();
            Array.from(elements).forEach(element => {
                // @ts-ignore
                const invalidArias = [...element.attributes]
                    .map(e => e.nodeName)
                    // we want to match any aria-* attribute not on the allowed list.
                    .filter(attribute => /^aria-/.test(attribute) && !information.allowedArias.includes(attribute))
                ;
                if (invalidArias.length > 0) {
                    // @ts-ignore
                    invalidAttributeFound.add(...invalidArias);
                }

            })

            if (invalidAttributeFound.size > 0) {
                results.push({
                    role,
                    attributes: (Array.from(invalidAttributeFound) as string[]),
                });
            }
        }

        return results;
    }, ariaRoles);

    // decision section
    if (results.length === 0) {
        return RuleResult.createSuccessRecommandation(`${ Object.keys(ariaRoles).join(', ') } ${ ruleName }`, ruleDescription);
    } else {
        const issues = results.map(result => `${result.role} : ${result.attributes.join(', ')} are founds and consider as invalid`);
        return RuleResult.createErrorRecommandation(`${ Object.keys(ariaRoles).join(', ') } ${ ruleName }`, ruleDescription, issues, sources);
    }
}
