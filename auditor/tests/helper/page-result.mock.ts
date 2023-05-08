import { Page } from "puppeteer";
import * as fs from "fs";
import * as path from "path";

export async function getPageWithContent(contentPath: string): Promise<Page> {
  const file = path.resolve(__dirname, "../../", contentPath);
  if (!fs.existsSync(file)) {
    throw new Error(`File ${file} does not exist`);
  }

  const page = await browser.newPage();
  await page.setRequestInterception(true);
  page.on("request", (request) => {
    request.respond({
      body: fs.readFileSync(file, "utf8"),
    });
  });

  await page.goto("http://localhost");
  await page.evaluate(
    fs.readFileSync(
      path.resolve(__dirname, "../../../", "dist/browser/index.js"),
      "utf8"
    )
  );

  // todo remove me when @types/puppeter will be up to date.
  return page as unknown as Page;
}
