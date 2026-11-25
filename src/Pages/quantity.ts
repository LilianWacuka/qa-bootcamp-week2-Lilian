
import { Page, Locator } from '@playwright/test';

export class AddQuantity {
    readonly page: Page;
    readonly quantity: Locator;

    constructor(page: Page) {
        this.page = page;

        this.quantity = page.locator('[data-test="quantity"]');
    }

    async goto() {
        await this.page.goto('https://with-bugs.practicesoftwaretesting.com/#/product/1');
    }

    async increaseQuantity() {
        await this.quantity.fill('2');
    }
}
