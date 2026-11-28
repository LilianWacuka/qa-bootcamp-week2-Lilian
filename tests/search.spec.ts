import { test, expect } from '@playwright/test';

test('search for pliers returns only products with pliers in the name', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');

  // Enter the search term
  await page.getByRole('textbox').fill('pliers');

  // Click the Search button
  await page.getByRole('button', { name: 'Search' }).click();


  await expect(page.getByText("4 products found for 'pliers'")).toBeVisible();
});
