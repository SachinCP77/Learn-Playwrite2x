import { test, expect } from '@playwright/test';
test('Verify error using PW loctors', async ({ page }) => {
    await page.goto("https://vwo.com/free-trial/");
    //await page.goto("https://vwo.com/free-trial/", { waitUntil: "load" })
    await page.getByRole("textbox", { name: "email" }).fill("addff");
    await page.getByRole("checkbox").check();
    await page.getByRole("button", { name: "Create a Free Trial Account" }).click();
    //not to use getbytext as text can chenage anytime by dev
    // let errormessage = await page.getByText('The email address you entered is incorrect.').textContent();
    // expect(errormessage).toContain("The email address you entered is incorrect.")
    let errormess = await page.locator("//div[contains(@class,'invalid-reason')]").textContent();
    expect(errormess).toContain("The email address you entered is incorrect.")

});