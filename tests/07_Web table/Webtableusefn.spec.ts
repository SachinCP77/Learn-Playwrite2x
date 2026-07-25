import { test, expect } from '@playwright/test';

test('Navigating through table', async ({ page }) => {
    await page.goto("https://awesomeqa.com/webtable1.html");
    const rowes = page.locator('table[summary="Sample Table"] tbody tr');
    const rowcount = await rowes.count();
    console.log(rowcount);

    for (let i = 0; i <= rowcount; i++) {
        const rowdata = await rowes.nth(i).locator('td').allInnerTexts();
        console.log(rowdata);

    }


}
)