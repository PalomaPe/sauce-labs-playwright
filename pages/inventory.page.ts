import { type Locator, type Page } from '@playwright/test';
import BasePage from './base.page';

export default class InventoryPage extends BasePage {

  readonly itemCard: Locator;
  readonly itemName: Locator;
  readonly itemDesc: Locator;
  readonly itemPrice: Locator;
  readonly addToCartBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.itemCard = page.getByTestId('inventory_item');
    this.itemName = page.getByTestId('inventory_item_name');
    this.itemDesc = this.itemCard.getByTestId('inventory-item-desc');
    this.itemPrice = this.itemCard.getByTestId('inventory-item-price');
    this.addToCartBtn = this.itemCard.getByTestId('inventory-item-price');
  }

}
