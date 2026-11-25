
import { test, expect } from '@playwright/test';
import { AddQuantity } from '../src/Pages/quantity';

test('shopper can increase product quantity', async ({ page }) => {
    const addQuantity = new AddQuantity(page);

    await addQuantity.goto();

    await addQuantity.increaseQuantity();

    await expect(addQuantity.quantity).toHaveValue('2');
});
