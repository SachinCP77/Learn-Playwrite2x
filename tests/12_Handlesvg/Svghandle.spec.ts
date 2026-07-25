import { test, expect, Locator } from '@playwright/test';

const url = "https://www.flipkart.com/search";

test.describe('flipkart search svg', () => {
    test.beforeEach(async ({ page }) => {
        console.log("before test");
        await page.goto(url);
    });

    test('TC1 @smoke', async ({ page }) => {
        //
        // await page.locator('input[name="q"]').fill("macmini");
        await page.getByRole('textbox', { name: 'Search for Products, Brands' }).fill("macmini");

        const svgelement: Locator = page.locator("svg");
        await svgelement.first().click();

        //await page.pause();

    });

    // test('TC2 @regression', async ({ page }) => {
    //     console.log("TC2");
    // });
});
