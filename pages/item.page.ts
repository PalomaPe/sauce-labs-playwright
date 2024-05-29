import { type Locator, type Page } from '@playwright/test';
import { BasePage } from './base.page';

export class ItemPage extends BasePage {

    readonly item: Locator;
    readonly itemDesc: Locator;
    readonly itemPrice: Locator;
    readonly addToCartBtn: Locator;
    readonly removeBtn: Locator;

    constructor(page: Page) {
        super(page);
        this.item = page.getByTestId('inventory_item');
        this.itemDesc = this.item.getByTestId('inventory-item-desc');
        this.itemPrice = this.item.getByTestId('inventory-item-price');
        this.addToCartBtn = this.item.getByTestId('add-to-cart-sauce-labs-backpack');
        this.removeBtn = this.item.getByTestId('remove-sauce-labs-backpack');
    }

}
