import { test, expect, FrameLocator, Locator } from '@playwright/test';
test('Frames verification', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/frames/multi-frames");

    let mainframe: FrameLocator = await page.frameLocator('[name="main"]');
    //await page.pause();
    const headtext = await mainframe.locator('h2').innerText();
    console.log(headtext);

    const allframe: Locator[] = await page.locator('//frame').all();
    console.log(allframe.length);

    for (const frame of allframe) {
        console.log(await frame.getAttribute('name'), await frame.getAttribute('src'));

    }
    let sideframe: FrameLocator = await page.frameLocator('[name="side"]');

    await sideframe.getByTestId('side-link-registration').click();

});
