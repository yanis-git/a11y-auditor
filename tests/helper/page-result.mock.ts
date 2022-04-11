// @ts-ignore
import puppeteer, {Page, Request} from 'puppeteer';
import * as fs from 'fs';
import path from 'path';


export async function getPageWithContent(contentPath: string): Promise<Page> {
    const file = path.resolve(__dirname, '../../', contentPath);
    if (!fs.existsSync(file)) {
        throw new Error(`File ${file} does not exist`);
    }

    // const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setRequestInterception(true);
    page.on('request', (request: Request) => {
        request.respond({
            body: fs.readFileSync(file, 'utf8'),
        })
    });

    await page.goto('http://localhost');

    return page;
}
