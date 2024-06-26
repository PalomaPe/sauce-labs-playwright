import { type Locator, type Page } from '@playwright/test';
import BasePage from './base.page';

export default class LoginPage extends BasePage {

    readonly title: string;
    readonly usernameInp: Locator;
    readonly passwordInp: Locator;
    readonly loginBtn: Locator;

    constructor(page: Page) {
        super(page);
        this.title = "Swag Labs";
        this.usernameInp = page.getByTestId('username');
        this.passwordInp = page.getByTestId('password');
        this.loginBtn = page.getByTestId('login-button');
    }

    async logIn() {
        await this.usernameInp.fill(process.env.TEST_USERNAME || '');
        await this.passwordInp.fill(process.env.TEST_PASSWORD || '');
        await this.loginBtn.click();
    }

}
