import { expect, test } from '@playwright/test';
import { HoversPage } from './page-objects/hovers.page';

test.describe('Hover', () => {
  let hoversPage: HoversPage;

  test.beforeEach(async ({ page }) => {
    hoversPage = new HoversPage(page);
    await hoversPage.open();
  });

  test('Perform hover over user #2', async ({ page }) => {
    await hoversPage.userAvatar(2).hover();
    await expect(hoversPage.userName('user2')).toBeVisible();
  });

  test('Open user #1 profile page', async ({ page }) => {
    await hoversPage.userAvatar(1).hover();
    await hoversPage.viewProfileLink().click();
    await expect(page).toHaveURL(/users\/1/);
  });
});
