import { test, expect } from '@playwright/test';

test('invalid login is rejected and shows an error message', async ({ page }) => {

    await page.goto('https://practicesoftwaretesting.com/auth/login');
    
    await page.getByRole('heading', { name: 'Login' }).click();
    // Enter invalid email
    // await page.locator('[data-test="email"]').fill('wrong email');
    await page.getByRole('textbox', { name: 'Email address *' }).fill('wrong@email.com');

    // Enter invalid password
    await page.getByRole('textbox', { name: 'Password *' }).fill('wert5');

    // Click the Login button
    await page.getByRole('button', { name: 'Login' }).click();

    // Verify the error message is displayed
    await expect(page.getByText('Invalid email or password')).toBeVisible();

});