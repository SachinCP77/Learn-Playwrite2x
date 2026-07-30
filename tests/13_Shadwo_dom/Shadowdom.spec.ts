import { test, expect, Locator } from '@playwright/test';

const url = "https://app.thetestingacademy.com/playwright/widgets/shadow-dom";

test.describe('Shadow DOM', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(url);
    });

    test('Locate Shadow dom', async ({ page }) => {

        // const card = page.locator('tta-input-card');
        // await card.getByTestId('card-account-email').fill("abcdefgh");
        // await card.getByTestId('card-account-password').fill("ttffdd");
        // await card.getByTestId('card-account-submit').click();
        // await page.pause();

        //const cart = page.locator('tta-counter');

        // cart.getByTestId('counter-cart-dec').click();
        // cart.getByTestId('counter-cart-inc').click();
        // console.log(cart.getByTestId('counter-cart').getByTestId('counter-value').innerText());
        // await page.pause();

        const card = page.locator('tta-nested');
        await card.getByTestId('card-inside-email').fill("abcdefgh");
        await card.getByTestId('card-inside-password').fill("ttffdd");
        await card.getByTestId('card-inside-submit').click();
        await page.pause();


    });

});
