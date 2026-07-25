import { test, expect } from '@playwright/test';

test('Verify by Xpath', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/webtable");

    //await page.locator("//td[text()='Aarav.Sharma']/preceding-sibling::td/input[@type='checkbox']").check();

    await page.locator("tr:has(td:text('Rohan.Mehta')").click();
});