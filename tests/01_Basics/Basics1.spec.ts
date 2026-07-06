import { test, expect } from '@playwright/test';
test("verify the title", async ({ page }) => {
    await page.goto("http://app.vwo.com");
    await expect(page).toHaveTitle('Login - Wingify');
});
