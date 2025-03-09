import { test, expect } from '@playwright/test';
import { NestedFramePage } from './page-objects/frame.page';

test.describe('Nested Frame', () => {

  let nestedFramePage: NestedFramePage;
  
  test.beforeEach(async ({ page }) => {
    nestedFramePage = new NestedFramePage(page);
    await nestedFramePage.open();
  });

  test('Check left frame body', async () => {
    const frame = await nestedFramePage.frameLeft();
    if (frame !== null) await expect((await frame.innerText('body')).trim()).toEqual('LEFT');
  });

  test('Check middle frame body', async () => {
    const frame = await nestedFramePage.frameMiddle();
    if (frame !== null) await expect((await frame.innerText('body')).trim()).toEqual('MIDDLE');
  });

  test('Check right frame body', async () => {
    const frame = await nestedFramePage.frameRight();
    if (!frame) {
      throw new Error('Frame "Right" not found');
    }
    await expect((await frame.innerText('body')).trim()).toEqual('RIGHT');
  });

  test('Check bottom frame body', async () => {
    const frame = await nestedFramePage.frameBottom();
    if (!frame) {
      throw new Error('Frame "Bottom" not found');
    }
    await expect((await frame.innerText('body')).trim()).toMatch(/bottom/i);
  });
});
