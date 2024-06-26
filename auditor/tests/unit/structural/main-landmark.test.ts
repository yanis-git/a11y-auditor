import { Page } from "puppeteer";
import { getPageWithContent } from "../../helper/page-result.mock";
import { RuleResult } from "../../../src/rule/results/rule-result";
import { isMainTagIsPresent } from "../../../src/rule/runners/structural/isMainTagIsPresent.checker";

describe("Main Landmark", function () {
  it.each`
    template
    ${"tests/data/structural/main/test-main-tag-is-present.html"}
    ${"tests/data/structural/main/test-main-role-is-present.html"}
    ${"tests/data/structural/main/test-multiple-main-with-hidden-role.html"}
  `(
    "should return success when main landmark is present once on the DOM",
    (state: { template: string }) => {
      return (async () => {
        const page: Page = await getPageWithContent(state.template);
        const result: RuleResult = await isMainTagIsPresent(page);
        expect(result.getSelectors()).toEqual([]);
        expect(result.isSuccess()).toBe(true);
      })();
    },
  );

  it("should return error when no main landmark is present on the DOM", () => {
    return (async () => {
      const page: Page = await getPageWithContent(
        "tests/data/structural/main/test-main-role-is-not-present.html",
      );
      const result: RuleResult = await isMainTagIsPresent(page);
      expect(result.getSelectors()).toEqual(["Main landmark is missing"]);
      expect(result.isError()).toBe(true);
    })();
  });

  it("should return error when multiple main landmarks is present on the DOM", () => {
    return (async () => {
      const page: Page = await getPageWithContent(
        "tests/data/structural/main/test-main-role-is-duplicated.html",
      );
      const result: RuleResult = await isMainTagIsPresent(page);
      expect(result.getSelectors()).toContain(
        "Main landmark is present more than once. Use hidden attributes or remove tags",
      );
      expect(result.getSelectors().length).toBe(3);
      expect(result.isError()).toBe(true);
    })();
  });
});
