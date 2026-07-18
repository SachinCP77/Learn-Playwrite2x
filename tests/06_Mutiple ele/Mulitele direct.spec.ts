import { test, expect } from '@playwright/test';

test('Handling multiple element', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');
    //await page.getByText("Forgotten Password").click();
    await page.getByTestId('forgotten-password-link').click();
    await page.pause();
});