import { expect, test } from '@playwright/test';
import { DynamicLoadingPage } from './page-objects/dynamic_loading.page';
import { BasePage } from './page-objects/base.page';

test.describe.only('Dynamic Loading Page', () => {
  let dynamicLoadingPage: DynamicLoadingPage;

  test.beforeEach(async ({ page }) => {
    dynamicLoadingPage = new DynamicLoadingPage(page);
    await dynamicLoadingPage.open();
  });

  test('Element on page that is hidden', async ({ page }) => {
    await dynamicLoadingPage.openNewPage_1();
    await expect(page).toHaveURL(/dynamic_loading\/1/);
    await dynamicLoadingPage.startLoading();

    await BasePage.loadingComplete(page);

    await expect(dynamicLoadingPage.infoText()).toBeVisible();
  });

  test('Element rendered after the fact', async ({ page }) => {
    await dynamicLoadingPage.openNewPage_2();
    await expect(page).toHaveURL(/dynamic_loading\/2/);
    await dynamicLoadingPage.startLoading();

    await BasePage.loadingComplete(page);

    await expect(dynamicLoadingPage.infoText()).toHaveCount(1)
  });
});


