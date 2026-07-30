import { test, expect } from '@playwright/test';
import path from 'path';
const url = 'https://the-internet.herokuapp.com/upload';
test.describe('SVG handling', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(url);
    });

    test('file upload', async ({ page }) => {
        const filepath = path.join(import.meta.dirname, 'testdata.txt');

        console.log('File path', filepath);

        await page.setInputFiles('#file-upload', filepath);
        await page.click('#file-submit');

    });
});