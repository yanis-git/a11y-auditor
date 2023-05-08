import { Page } from "puppeteer";
import { RuleResult } from "../../results/rule-result";
import { AriaRoles } from "./characteristics/type";

const ruleName = "elements have only supported aria attribute ?";
const ruleDescription =
  "this elements should have only supported aria attribute.";
const sources = ["https://www.w3.org/TR/wai-aria-1.1/#namefromcontent"];

interface ResultType {
  role: string;
  selector: string;
  attributes: string[];
}

import { helper } from "../../../../../dist/browser";
declare let a11yAuditor: { helper: typeof helper };
export async function isAriaRolesAreSupported(
  ariaRoles: AriaRoles,
  page: Page
): Promise<RuleResult[]> {
  // parsing section
  const results: ResultType[] = await page.evaluate((aria: AriaRoles) => {
    const results = [];
    for (const [role, information] of Object.entries(aria)) {
      const elements = document.querySelectorAll<HTMLElement>(
        information.selector
      );
      const exceptions: { attributes: string[]; selector: string }[] = [];
      // For each matching elements we are looking for unexpected aria attributes.
      // If we found one. then we store the selector.
      Array.from(elements).forEach((element) => {
        const invalidArias = [...element.attributes]
          .map((e) => e.nodeName)
          // we want to match any aria-* attribute not on the allowed list.
          .filter(
            (attribute) =>
              /^aria-/.test(attribute) &&
              !information.allowedArias.includes(attribute)
          );
        if (invalidArias.length > 0) {
          exceptions.push({
            attributes: invalidArias,
            selector: a11yAuditor.helper.getCssPath(element),
          });
        }
      });
      results.push(...exceptions.map((exception) => ({ ...exception, role })));
    }

    return results;
  }, ariaRoles);
  // decision section
  const name = `${Object.keys(ariaRoles).join(", ")} ${ruleName}`;
  if (results.length === 0) {
    return [RuleResult.createSuccessRecommandation(name, ruleDescription)];
  }
  return results.map((result) => {
    const description = `For role ${
      result.role
    } following aria "${result.attributes.join(", ")}" are not supported.`;
    return RuleResult.createErrorRecommandation(
      name,
      description,
      [result.selector],
      sources
    );
  });
}
