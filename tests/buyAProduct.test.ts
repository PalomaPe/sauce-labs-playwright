const { test, expect } = require('@playwright/test');
import LoginPage from "../pages/login.page";
import InventoryPage from "../pages/inventory.page"
import ItemPage from "../pages/item.page";
import CartPage from "../pages/cart.page";
import CheckoutCompletePage from "../pages/checkoutComplete.page";
import CheckoutOverviewPage from "../pages/checkoutOverview.page";
import { backpackItem } from "../data/products";

test('eCommerce product purchase flow', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const intemPage = new ItemPage(page);
  const cartPage = new CartPage(page);
  const checkoutYourInformationPage = new CheckoutCompletePage(page);
  const checkoutOverviewPage = new CheckoutOverviewPage(page);
  const checkoutComplete = new CheckoutCompletePage(page);

  await test.step('Navigate to the eCommerce site', async () => {
    await page.goto('');
    await expect(page).toHaveTitle(loginPage.title);
  });

  await test.step('Verify product information and select it', async () => {
    await expect(inventoryPage.itemName).toHaveText(backpackItem.name);
    await expect(inventoryPage.itemDesc).toHaveText(backpackItem.desc);
    await expect(inventoryPage.itemPrice).toHaveText(backpackItem.price);

    await inventoryPage.addToCartBtn.click();
  });

  await test.step('Navigate to the eCommerce site', async () => {
    await expect(intemPage.itemName).toHaveText(backpackItem.name);
    await expect(intemPage.itemDesc).toHaveText(backpackItem.desc);
    await expect(intemPage.itemPrice).toHaveText(backpackItem.price);
    
    await itemPage.addToCartBtn.click();
  });

});
