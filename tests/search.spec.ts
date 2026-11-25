import { test, expect } from '@playwright/test';

test('search for pliers returns only products with pliers in the name', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');

  // Enter the search term
  await page.getByRole('textbox').fill('pliers');

  // Click the Search button
  await page.getByRole('button', { name: 'Search' }).click();

  const productNames = page.getByRole('heading', { level: 1})
  await expect(productNames.first()).toBeVisible();
});