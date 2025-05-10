import { test, expect } from './fixture/base.fixture';
import { BasePage } from './page-objects/base.page';

test.describe('Dynamic Loading Page', () => {

  test.beforeEach(async ({ dynamicLoadingPage }) => {
    await dynamicLoadingPage.open();
  });

  test('Element on page that is hidden', async ({ page, dynamicLoadingPage }) => {
    await dynamicLoadingPage.openNewPage_1();
    await expect(page).toHaveURL(/dynamic_loading\/1/);
    await dynamicLoadingPage.startLoading();

    await BasePage.loadingComplete(page);

    await expect(dynamicLoadingPage.infoText()).toBeVisible();
  });

  test('Element rendered after the fact', async ({ page, dynamicLoadingPage }) => {
    await dynamicLoadingPage.openNewPage_2();
    await expect(page).toHaveURL(/dynamic_loading\/2/);
    await dynamicLoadingPage.startLoading();

    await BasePage.loadingComplete(page);

    await expect(dynamicLoadingPage.infoText()).toHaveCount(1)
  });
});


