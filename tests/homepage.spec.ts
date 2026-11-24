import { test, expect } from '@playwright/test';

test('Homepage with a title', async ({page}) =>{
    await page.goto('https://with-bugs.practicesoftwaretesting.com/#/')
    await expect(page).toHaveTitle('Practice Software Testing - Toolshop - v5.0 with bugs')
})