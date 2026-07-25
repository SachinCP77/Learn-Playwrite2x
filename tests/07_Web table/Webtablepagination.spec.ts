import { test, expect, errors } from '@playwright/test';
test('Verify by Xpath', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");
    let name = "Yuki Sato";
    let row;
    while (true) {
        row = page.locator("#employees-tbody tr").filter({ hasText: name });

        if (await row.count()) {
            break;
        }

        const next = page.getByTestId("next-page");

        if (await next.isDisabled()) throw new Error("Record not found");
        await next.click();
    }

    const email = await row.locator('td[data-col="email"]').innerText();
    const country = await row.locator('td[data-col="country"]').innerText();
    console.log(email, "&&", country);

});


// const priyarow = page.locator("#employees-tbody tr").filter({ hasText: "Priya Kapoor" });
//     const email = await priyarow.locator('td[data-col="email"]').innerText();
//     const country = await priyarow.locator('td[data-col="country"]').innerText();
//     console.log(email, "&&", country);