import { test, expect, FrameLocator } from '@playwright/test';
test('Frames verification', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/frames/");
    let vehframe: FrameLocator = await page.frameLocator('#frame-one');

    await vehframe.locator('#RESULT_TextField-1').fill("Honda city")
    await vehframe.locator('#RESULT_TextField-2').fill("Sachin Purohit")
    await vehframe.locator("#RESULT_TextField-3").fill("KA 01 FA 101");
    await vehframe.locator("#RESULT_RadioButton-1").selectOption('Sedan');
    await vehframe.locator("#RESULT_TextField-4").fill("2026");
    await vehframe.locator("#RESULT_TextArea-1").fill("Good car with milae");
    await vehframe.locator("#vehicle-submit").click();

    let output = await vehframe.locator("#vehicle-output").innerText();
    console.log(output);

    //await page.pause();
});
