import { test, expect, Page, Locator } from '@playwright/test';
async function FindRowbyname(page: Page, name: string): Promise<Locator> {
    while (true) {
        const row = page.locator("#employees-tbody tr").filter({ hasText: name });

        if (await row.count()) {
            return row;
        }

        const next = page.getByTestId("next-page");

        if (await next.isDisabled()) throw new Error("Record not found");
        await next.click();
    }
}

test('Verify Pagination using function', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");

    let name: String = "Yuki Sato";
    const row = await FindRowbyname(page, 'Yuki Sato');
    const email = await row.locator('td[data-col="email"]').innerText();
    const country = await row.locator('td[data-col="country"]').innerText();
    console.log(email, "&&", country);

});




