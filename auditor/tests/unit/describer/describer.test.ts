import { Page } from "puppeteer";
import { getPageWithContent } from "../../helper/page-result.mock";
import { RuleResult } from "../../../src/rule/results/rule-result";
import { isDescribedByIsReferToValidElement } from "../../../src/rule/runners/describer/isDescribedByIsReferToValidElement.checker";
import { isLabelAreInConflict } from "../../../src/rule/runners/describer/isLabelAreInConflict.checker";

describe("describer", function () {
  it("should return success when all describer are well mapped.", () => {
    return (async () => {
      const page: Page = await getPageWithContent(
        "tests/data/describer/test-describer-is-valid.html",
      );
      const result: RuleResult = await isDescribedByIsReferToValidElement(page);
      expect(result.isSuccess()).toBe(true);
    })();
  });

  it("should return error when at least, one iframe present do not have title", () => {
    return (async () => {
      const page: Page = await getPageWithContent(
        "tests/data/describer/test-describer-is-invalid.html",
      );
      const result: RuleResult = await isDescribedByIsReferToValidElement(page);
      expect(result.getSelectors().length).toBe(5);
      expect(result.isError()).toBe(true);
    })();
  });

  it("should return error when there is multiple attributes to describe element", () => {
    const expectedResults = [
      "body > main > h1",
      "body > main > a",
      "body > main > input",
    ];
    return (async () => {
      const page: Page = await getPageWithContent(
        "tests/data/describer/test-multiple-describer-invalid.html",
      );
      const results: RuleResult[] = await isLabelAreInConflict(page);
      expect(results.length).toBe(expectedResults.length);
      results.forEach((result, index) => {
        expect(result.isError()).toBe(true);
        expect(result.getSelectors()).toContain(expectedResults[index]);
      });
    })();
  });
  it("should return success when there is single label or multiple with same value", () => {
    return (async () => {
      const page: Page = await getPageWithContent(
        "tests/data/describer/test-multiple-describer-valid.html",
      );
      const results: RuleResult[] = await isLabelAreInConflict(page);
      expect(results.length).toBe(1);
      expect(results[0].getSelectors().length).toBe(0);
      expect(results[0].isSuccess()).toBe(true);
    })();
  });
});
