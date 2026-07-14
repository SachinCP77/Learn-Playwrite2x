import { test, expect } from "@playwright/test";

test('using refere navigate', async ({ page }) => {

    await page.goto("https://courses.thetestingacademy.com/", { referer: "https://www.google.com/search?q=https%3A%2F%2Fcourses.thetestingacademy.com" })
    console.log(URL, page.url())
});


