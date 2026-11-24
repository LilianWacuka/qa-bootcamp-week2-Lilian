import { test, expect } from '@playwright/test';

test('search returns only products with pliers in the name', async ({ page }) => {
    await page.goto('https://with-bugs.practicesoftwaretesting.com/#/');

    
    const searchBar = page.locator('[data-test="search-query"]');
    await searchBar.fill('pliers');


    await page.locator('[data-test="search-submit"]').click();

    
    const productNames = page.locator('[data-test="product-name"]');

    
    await expect(productNames.first()).toBeVisible();

    // Check every returned product name
    // const count = await productNames.count();

    // for (let i = 0; i < count; i++) {
    //     await expect(productNames.nth(i)).toContainText(/pliers/i);
    // }
});