import { expect, test } from './fixture/base.fixture';

test.describe('Hover', () => {

  test.beforeEach(async ({ hoversPage }) => {
    await hoversPage.open();
  });

  test('Perform hover over user #2', async ({ hoversPage }) => {
    await hoversPage.userAvatar(2).hover();
    await expect(hoversPage.userName('user2')).toBeVisible();
  });

  test('Open user #1 profile page', async ({ page, hoversPage }) => {
    await hoversPage.userAvatar(1).hover();
    await hoversPage.viewProfileLink().click();
    await expect(page).toHaveURL(/users\/1/);
  });
});
