import { expect, test } from './fixture/base.fixture';

test.describe('iFrame', () => {

  test.beforeEach(async ({ iFramePage }) => {
    await iFramePage.open();
  });

  test('Check iframe body', async ({ iFramePage }) => {
    await iFramePage.closeAlertButton().click();
    const contentArea = await iFramePage.contentArea();
    if (!contentArea) {
      throw new Error('Frame not found');
    }
    await expect((await contentArea.innerText()).trim()).toEqual('Your content goes here.');
  });
});
