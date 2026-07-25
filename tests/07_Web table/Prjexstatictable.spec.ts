import { test, expect } from '@playwright/test';
test('Verify static table fields', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");

    const countryText = await page.locator("//td[text()='Yoshi Tannamuri']//following-sibling::td[1]").innerText();
    console.log(countryText);

});
