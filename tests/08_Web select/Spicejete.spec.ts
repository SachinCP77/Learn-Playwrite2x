import { test, expect } from '@playwright/test';

test('Basic select dropdown', async ({ page }) => {
    await page.goto("https://spicejet.com");
    await page.getByTestId('to-testID-origin').getByRole('textbox').fill("Del")
    await page.getByTestId('to-testID-destination').getByRole('textbox').fill("Blr")
    await page.pause();

});