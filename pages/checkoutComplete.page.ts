import { type Locator, type Page } from '@playwright/test';

export class BasePage {
    readonly page: Page;
    readonly orderCompleteTxt: Locator;

    constructor(page: Page) {
        this.page = page;
        this.orderCompleteTxt = page.getByTestId('complete-header');
    }

}
