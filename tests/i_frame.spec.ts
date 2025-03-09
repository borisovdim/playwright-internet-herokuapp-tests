import { test, expect } from '@playwright/test';
import { IFramePage } from './page-objects/frame.page';

test.describe('iFrame', () => {
  let iFramePage: IFramePage;

  test.beforeEach(async ({ page }) => {
    iFramePage = new IFramePage(page);
    await iFramePage.open();
  });

  test('Check iframe body', async () => {
    await iFramePage.closeAlertButton().click();
    const contentArea = await iFramePage.contentArea();
    if (!contentArea) {
      throw new Error('Frame not found');
    }
    await expect((await contentArea.innerText()).trim()).toEqual('Your content goes here.');
  });
});
