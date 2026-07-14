import { test, expect } from '@playwright/test';

test('verify error message in login page', async ({ page }) => {
    await page.goto("https://app.vwo.com/");

    let usernamefd = page.locator("#login-username");
    let passfd = page.locator("#login-password");
    //let passxpath = page.locator('xpath="//a[@id="btn-make-appointment"]"');
    //let passxcss = page.locator('css="//a[@id="btn-make-appointment"]"');
    let submitbtn = page.locator("#js-login-btn");

    await usernamefd.fill("admin@test.com");
    await passfd.fill("rrtt");
    await submitbtn.click();

    let errormsg = page.locator("#js-notification-box-msg");
    await expect(errormsg).toContainText("Your email,password,IP address or location did not match")
});

//*[@id="login-username"]
//input[@aria-describedby="demo_username_label"]
//input[@aria-describedby="demo_password_label"]
//input[@id="txt-username"]
//input[@id="txt-password"]
//button[@id="btn-login"]

//a[@id="btn-make-appointment"]

//*[@id="login"]/div/div/div[2]/form/div[1]/div[2]/div/div/input
//input[@id="txt-username"]