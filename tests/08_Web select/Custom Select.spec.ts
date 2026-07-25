import { test, expect } from '@playwright/test';

test('Basic select dropdown', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/tables/dropdowns");
    //open the dropdown

    await page.getByTestId("lang-trigger").click();
    await page.getByRole('option', { name: 'JavaScript' }).click();
    await page.pause();


    await page.getByTestId('experience-trigger').click();
    await page.getByRole('option', { name: 'Mid-level (4-6 years)' }).click();
});
