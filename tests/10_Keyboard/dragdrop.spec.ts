import { test, expect } from '@playwright/test';

test('Drag drop', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/drag_and_drop");
    const cola = page.locator('#column-a');
    const colb = page.locator('#column-b');

    await cola.dragTo(colb);

});
