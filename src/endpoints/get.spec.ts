import { test, expect } from '@playwright/test';

test('Get product endpoint status', async ({request}) => {
    const response = await request.get('https://api-with-bugs.practicesoftwaretesting.com/products?')
    expect(response.status()).toBe(200);
    const products = await response.json();
    expect(products).toBeTruthy();
});