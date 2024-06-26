import { type Locator, type Page } from '@playwright/test';
import BasePage from './base.page';

export default class CartPage extends BasePage {
    readonly page: Page;
    readonly itemQtyTxt: Locator;
    readonly itemNameTxt: Locator;
    readonly itemDescTxt: Locator;
    readonly itemPriceTxt: Locator;
    readonly checkoutBtn: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.itemQtyTxt = page.getByTestId('item-quantity');
        this.itemNameTxt = page.getByTestId('inventory-item-name');
        this.itemDescTxt = page.getByTestId('inventory-item-desc');
        this.itemDescTxt = page.getByTestId('inventory-item-price');
        this.checkoutBtn = page.getByTestId('checkout');
    }

}
