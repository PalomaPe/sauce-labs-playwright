import { type Locator, type Page } from '@playwright/test';
import { BasePage } from './base.page';

export class InventoryPage extends BasePage {

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
  }

}