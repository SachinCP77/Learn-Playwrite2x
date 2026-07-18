import { test, expect } from 'allure-playwright';

test('Basic how to verify multiple elements', async ({ page }) => {

    await page.goto("https://awesomeqa.com/webtable.html");
    ////table[@id="customers"]/tbody/tr[5]/td[2]

    const firstpart = "//table[@id='customers']/tbody/tr[";
    const secondpart = "]/td[";
    const thirdpart = "]";

    const rows = await page.locator("//table[@id='customers']/tbody/tr").count();
    const cols = await page.locator("//table[@id='customers']/tbody/tr[2]/td").count();

    for (let i = 2; i <= rows; i++) {
        for (let j = 1; j <= cols; j++) {
            const dynapath = `${firstpart}${i}${secondpart}${j}${thirdpart}`;
            console.log(dynapath);
            const datas = await page.locator(dynapath).innerText();
            console.log(datas);
            if (datas.includes('Helen Bennett')) {
                const countryPath = `${dynapath}/following-sibling::td`;
                const countryText = await page.locator(countryPath).innerText();
                console.log('------');
                console.log(`Helen Bennett is In - ${countryText}`);
            }

        }
    }
    //await page.pause();
});