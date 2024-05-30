import { type Locator, type Page } from '@playwright/test';

export default class BasePage {
    readonly page: Page;
    readonly cartBtn: Locator;
    readonly menuBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartBtn = page.getByTestId('shopping-cart-link');
    }

}
