import { test, expect } from '@playwright/test';

test('Handling multiple element', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');
    console.log("Page is loaded");

    const rightpanel: string[] = await page.locator("a.list-group-item").allInnerTexts();
    console.log(rightpanel.length);

    for (let i = 0; i < rightpanel.length; i++) {
        console.log(rightpanel[i]);

    }

    for (const linktext of rightpanel) {
        if (linktext === "Forgotten Password") {
            await page.getByText(linktext).first().click();
        }
    }

    const rightpanellinks = await page.locator("a.list-group-item").all();
    for (const links of rightpanellinks) {
        console.log(await links.getAttribute("href"));

    }
});