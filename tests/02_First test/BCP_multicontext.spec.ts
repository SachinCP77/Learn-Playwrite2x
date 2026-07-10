import { chromium, Browser, BrowserContext, Page } from "@playwright/test";

async function run() {
    let brow: Browser = await chromium.launch({ headless: false });
    console.log("browser launched");

    let context: BrowserContext = await brow.newContext();

    console.log("conext launched");

    let admincon: BrowserContext = await brow.newContext();
    console.log("conext launched");
    let page1: Page = await admincon.newPage();
    await page1.goto("http://app.vwo.com/")
    console.log("Page launched");

    let viewcon: BrowserContext = await brow.newContext();
    console.log("conext launched");
    let page2: Page = await viewcon.newPage();
    await page2.goto("http://app.vwo.com/")
    console.log("Page launched");
    page1.close();
    page2.close();
    admincon.close();
    viewcon.close();
    brow.close();
}
