import { Page } from "puppeteer";
import { getPageWithContent } from "../../helper/page-result.mock";
import { RuleResult } from "../../../src/rule/results/rule-result";
import { isAltNotOverridden } from "../../../src/rule/runners/image/isAltIsNotOverided.checker";

describe("Image alt and aria label", () => {
  it("should return error when image have alt and aria-label", () => {
    return (async () => {
      const page: Page = await getPageWithContent(
        "tests/data/image/test-image-with-alt-and-aria-label.html",
      );
      const result: RuleResult = await isAltNotOverridden(page);
      expect(result.isError()).toBe(true);
      expect(result.isSuccess()).toBe(false);
      expect(result.getSelectors()).toContain("body > main > img");
      expect(result.getSelectors()).toContain(
        "body > main > img:nth-of-type(2)",
      );
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
        const result: RuleResult = await isAltNotOverridden(page);
        expect(result.isSuccess()).toBe(true);
        expect(result.isError()).toBe(false);
        expect(result.getSelectors()).toEqual([]);
      })();
    },
  );
});
