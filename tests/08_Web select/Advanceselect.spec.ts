import { test, expect } from '@playwright/test';
test('Basic select dropdown', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/tables/select-boxes");
    // await page.goto("https://spicejet.com");
    //open the dropdown
    // await page.getByTestId("rs-single").click();
    // await page.getByRole('option', { name: 'Cypress' }).click();
    // await page.pause();


    //data-testid="rs-creatable"

    // await page.getByTestId("rs-multi").click();
    // await page.getByRole('option', { name: 'Pytest', exact: true }).click();
    // await page.getByRole('option', { name: 'Jest', exact: true }).click();
    // await page.keyboard.press("Escape");
    // await page.pause();

    // await page.getByTestId("rs-creatable").click();
    // await page.getByRole('option', { name: 'performance', exact: true }).click();
    // await page.getByRole('option', { name: 'security', exact: true }).click();
    // await page.keyboard.press("Escape");
    // await page.pause();

    await page.getByTestId("rs-async").click();
    await page.getByTestId("rs-async-input").fill("Del");
    await expect(page.getByTestId("rs-async-menu")).toContainText("Delhi");
    await page.getByRole('option', { name: 'Delhi', exact: true }).click();
    await page.pause();

    // await page.getByTestId("to-testID-origin").click();

    //await page.getByTestId("auto-cmp-txt").fill("Del");

    //await page.getByRole('option', { name: 'Delhi', exact: true }).click();



});
