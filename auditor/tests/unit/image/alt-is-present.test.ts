import { Page } from "puppeteer";
import { getPageWithContent } from "../../helper/page-result.mock";
import { isImagesHaveAltChecker } from "../../../src/rule/runners/image/isImagesHaveAlt.checker";
import { RuleResult } from "../../../src/rule/results/rule-result";

describe("is alt is present", () => {
  it("should return error when image does not have alt attribute", () => {
    return (async () => {
      const page: Page = await getPageWithContent(
        "tests/data/image/test-image-without-alt.html",
      );
      const result: RuleResult = await isImagesHaveAltChecker(page);
      expect(result.isError()).toBe(true);
      expect(result.isSuccess()).toBe(false);
      expect(result.getSelectors()).toContain("body > main > img");
    })();
  });

  it.each`
    template
    ${"tests/data/image/test-image-with-alt.html"}
    ${"tests/data/image/test-no-image.html"}
  `(
    "should return success when image without alt are not present on DOM",
    (state: { template: string }) => {
      return (async () => {
        const page: Page = await getPageWithContent(state.template);
        const result: RuleResult = await isImagesHaveAltChecker(page);
        expect(result.isSuccess()).toBe(true);
        expect(result.isError()).toBe(false);
        expect(result.getSelectors()).toEqual([]);
      })();
    },
  );
});
