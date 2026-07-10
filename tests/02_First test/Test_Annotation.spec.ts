import { test, expect } from '@playwright/test';

test("Verofy title", async ({ page }) => {
    await page.goto('https://app.vwo.com/');
    await expect(page).toHaveTitle("Login - Wingify");

});

// test("verify the title", async ({ page }) => {
//     await page.goto("http://app.vwo.com");
//     await expect(page).toHaveTitle('Login - Wingify');
// });


test.skip('skipped test', async ({ page }) => {

});

test.only('run only this test', async ({ page }) => {

});

test.fail('fail test', async ({ page }) => {

});

test.slow('run slow', async ({ page }) => {

});