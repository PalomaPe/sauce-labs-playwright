import { type Locator, type Page } from '@playwright/test';

export class BasePage {
    readonly page: Page;
    readonly firstNameInp: Locator;
    readonly lastNameInp: Locator;
    readonly postalCodeInp: Locator;
    readonly continueBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstNameInp = page.getByTestId('firstName');
        this.lastNameInp = page.getByTestId('lastName');
        this.postalCodeInp = page.getByTestId('postalCode');
        this.continueBtn = page.getByTestId('continue');
    }

}
