import {test, expect} from '@playwright/test';

test('invalid is rejected and show error message', async({page})=>{
    await page.goto('https://with-bugs.practicesoftwaretesting.com/#/auth/login')
    
    await page.locator('[data-test="email"]').fill('juhujj');
    await page.locator('[data-test="password"]').fill('juhujj');
    await page.locator('[data-test="login-submit"]').click();

    const errorMessage = page.getByText('Invalid email or password')

    // expect(errorMessage).toBeVisible();
})