import { test, expect } from '@playwright/test';

test('verify student login and validate the email id and password', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');
    await page.getByRole("textbox", { name: "email" }).fill("aaddrr@saa.com");
    await page.getByRole("textbox", { name: "password" }).fill("ssddff");
    await page.getByRole("checkbox", { name: "remember" }).check();
    await page.getByRole("button", { name: "Login to Practice Account" }).click();
    await expect(page).toHaveURL(/.*#login-success/)



});

