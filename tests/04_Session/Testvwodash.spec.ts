import { test, expect } from '@playwright/test';

test.use({ storageState: "./user-session.json" });

test('directly go to dashboard', async ({ page }) => {

    await page.goto("https://app.wingify.com/#/dashboard/get-started?accountId=1227004");
    await expect(page).toHaveURL(/dashboard/);
    console.log("Dashboard loaded ✅");
    await page.waitForTimeout(6000);

});
test('directly go to settings page', async ({ page }) => {

    await page.goto("https://app.wingify.com/#/settings/accounts/general?accountId=1227007");
    await expect(page).toHaveURL(/settings/);
    console.log("settings  loaded ✅");
    await page.waitForTimeout(6000);
});