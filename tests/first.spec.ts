import { test, expect } from '@playwright/test';
test('Verfiy title will be TTA cart', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');
    await expect(page).toHaveTitle("TTACart - Login")
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('sss');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('fff');
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('[data-test="login-button"]')).toBeVisible();
    await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service');
});