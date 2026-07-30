import { test, expect, Locator } from '@playwright/test';

const url = 'https://simplemaps.com/svg/country/in';

test.describe('SVG handling', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(url);
    });

    test('locate SVG', async ({ page }) => {
        const Maplocator = await page.locator("sm_state sm_state_INKA").hover();
        console.log("state located");

        //  await Maplocator.click();

        // const output = await page.locator('#shapes-output').innerText();
        // expect(output).toContain('Red circle');

        // await page.getByRole('button', { name: /Q4 bar/ }).click();

        // await page.getByRole('radio', { name: /4 stars/ }).click();


        // let allbars = await page.locator(".bar").all();

        // for (const bars of allbars) {

        //     const q = await bars.getAttribute('data-quarter');
        //     console.log(q);


        // }

        await page.pause();

        // const bluecircle: Locator = page.locator('#circle-blue');
        // await bluecircle.click();

        // const rectamber: Locator = page.locator('#rect-amber');
        // await rectamber.click();

        // const traingle: Locator = page.locator('#triangle-mint');
        // await traingle.click();

        // const starclick: Locator = page.locator('#star-violet');
        // await starclick.click();



    });
});
