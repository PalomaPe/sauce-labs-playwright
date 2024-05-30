import { type Locator, type Page } from '@playwright/test';
import BasePage from './base.page';

export default class CheckoutCompletePage extends BasePage {
    readonly page: Page;
    readonly orderCompleteTxt: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.orderCompleteTxt = page.getByTestId('complete-header');
    }

}
