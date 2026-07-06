import { test, expect } from '@playwright/test';
test('Verfiy title', async ({ page }) => {
    await page.goto('https://app.vwo.com/');
    await expect(page).toHaveTitle("Login - Wingify");

});
