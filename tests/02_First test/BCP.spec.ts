import { chromium, Browser, BrowserContext, Page } from "@playwright/test";

async function run() {
    let brow: Browser = await chromium.launch({ headless: false })
    console.log("browser launched");

    let context: BrowserContext = await brow.newContext();

    console.log("conext launched");

    let context1: BrowserContext = await brow.newContext();

    console.log("conext launched");

    let page1: Page = await context1.newPage();
    console.log("Page launched");

    await page1.goto("http://app.vwo.com/")

    page1.close();
    context.close();
    context1.close();
    brow.close();
}
