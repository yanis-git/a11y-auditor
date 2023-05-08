import { Page } from "puppeteer";
import { getPageWithContent } from "../../helper/page-result.mock";
import { RuleResult } from "../../../src/rule/results/rule-result";
import { isFrameHaveTitle } from "../../../src/rule/runners/frame/isFrameHaveTitle.checker";

describe("Iframe", function () {
  it("should return success when all iframe present have title", () => {
    return (async () => {
      const page: Page = await getPageWithContent(
        "tests/data/frame/test-frame-with-title.html"
      );
      const result: RuleResult = await isFrameHaveTitle(page);
      expect(result.isSuccess()).toBe(true);
    })();
  });

  it("should return error when at least, one iframe present do not have title", () => {
    return (async () => {
      const page: Page = await getPageWithContent(
        "tests/data/frame/test-frame-without-title.html"
      );
      const result: RuleResult = await isFrameHaveTitle(page);
      expect(result.isError()).toBe(true);
    })();
  });
});
