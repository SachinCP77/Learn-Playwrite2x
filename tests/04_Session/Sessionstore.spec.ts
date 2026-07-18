import { chromium } from "playwright";

async function Savesession() {

    let browser = await chromium.launch({ headless: false });
    let brocontext = await browser.newContext();
    let page = await brocontext.newPage();

    await page.goto("https://app.wingify.com/#/login");
    await page.waitForTimeout(2000);

    await page.fill("#login-username", "opg73@singleuseemail.site");
    await page.fill("#login-password", "Wingify@4321");
    await page.waitForTimeout(2000);

    await page.click("#js-login-btn")
    await page.waitForURL(/#\/(dashboard|home)/, { timeout: 15000 });
    await page.waitForTimeout(3000);
    await brocontext.storageState({ path: "./user-session.json" });
    console.log("Session saved to user-session.json ✅");
    await page.waitForTimeout(2000);
    await browser.close();

}
Savesession();
