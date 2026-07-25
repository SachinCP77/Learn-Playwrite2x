import { test, expect } from '@playwright/test'

test('Basic how to verify multiple elements', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');
    console.log("Page is loaded");

    const forgotpass = await page.locator('a.list-group-item').filter({ hasText: 'Forgotten Password' }).click();

    //how many links are there

    const acclinks = page.locator('a.list-group-item');
    await expect(acclinks).toHaveCount(13)
});
