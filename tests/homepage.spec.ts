import { test, expect } from '@playwright/test';

test('homepage with a title', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');

  const link = page.getByRole('link', { name: 'Practice Software Testing -' });
  await expect(link).toBeVisible();
});