import { type Locator, type Page } from '@playwright/test';
import BasePage from './base.page';

export default class CheckoutYourInformationPage extends BasePage {
    readonly page: Page;
    readonly firstNameInp: Locator;
    readonly lastNameInp: Locator;
    readonly postalCodeInp: Locator;
    readonly continueBtn: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.firstNameInp = page.getByTestId('firstName');
        this.lastNameInp = page.getByTestId('lastName');
        this.postalCodeInp = page.getByTestId('postalCode');
        this.continueBtn = page.getByTestId('continue');
    }

}
