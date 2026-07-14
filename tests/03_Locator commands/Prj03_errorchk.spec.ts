import { test, expect } from '@playwright/test';

test("Verify error for wrong userid", async ({ page }) => {
    await page.goto("https://vwo.com/free-trial/");

    await page.locator("#page-v1-step1-email").fill("abcd");

    await page.locator("[data-qa='page-free-trial-step1-gdpr-consent-checkbox']").click();

    await page.locator("[data-qa='page-su-submit']").first().click();
    let errormsg = await page.locator("//div[contains(@class,'invalid-reason')]").first().textContent();
    expect(errormsg).toContain("The email address you entered is incorrect.")

});