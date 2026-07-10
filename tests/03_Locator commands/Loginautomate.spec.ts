import { test, expect } from '@playwright/test';

test('verify error message in login page', async ({ page }) => {
    await page.goto("https://app.vwo.com/");

    let usernamefd = page.locator("#login-username");
    let passfd = page.locator("#login-password");
    let submitbtn = page.locator("#js-login-btn");

    await usernamefd.fill("admin@test.com");
    await passfd.fill("rrtt");
    await submitbtn.click();

    let errormsg = page.locator("#js-notification-box-msg");
    await expect(errormsg).toContainText("Your email,password,IP address or location did not match")
});