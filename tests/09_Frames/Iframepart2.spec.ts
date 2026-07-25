import { test, expect, FrameLocator, Locator } from '@playwright/test';

test('Verify selectorshub website iframe', async ({ page }) => {

    await page.goto("https://selectorshub.com/iframe-scenario/");

    let frameset1: FrameLocator = page.frameLocator('#pact1');
    let frameset2: FrameLocator = frameset1.frameLocator('#pact2');
    let frameset3: FrameLocator = frameset2.frameLocator('#pact3');
    await frameset1.locator('#inp_val').first().fill('DIvya B');
    await frameset2.locator('jex').fill('Aishya');
    await frameset3.locator('glaf').fill('Playwright');
});
