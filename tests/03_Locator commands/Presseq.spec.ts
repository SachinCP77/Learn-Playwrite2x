import { test, expect } from '@playwright/test';

test('typing word by word in text box', async ({ page }) => {
    await page.goto('https://awesomeqa.com/practice.html')
    await page.locator('[name="firstname"]').pressSequentially("the testing", { delay: 200 });

});