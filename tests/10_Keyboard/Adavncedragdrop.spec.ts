import { test, expect } from '@playwright/test';

test('Advance Drag drop', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/widgets/dnd");

    await page.locator("#card-write-spec").dragTo(await page.locator("[data-status='in-progress']"));
});
