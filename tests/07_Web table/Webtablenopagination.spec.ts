import { test, expect } from '@playwright/test';
test('Verify by Xpath', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");

    const priyarow = page.locator("#employees-tbody tr").filter({ hasText: "Priya Kapoor" });
    const email = await priyarow.locator('td[data-col="email"]').innerText();
    const country = await priyarow.locator('td[data-col="country"]').innerText();
    console.log(email, "&&", country);

});