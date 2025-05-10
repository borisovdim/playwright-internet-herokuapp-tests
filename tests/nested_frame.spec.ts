import { expect, test } from './fixture/base.fixture';

test.describe('Nested Frame', () => {
  
  test.beforeEach(async ({ nestedFramePage }) => {
    await nestedFramePage.open();
  });

  test('Check left frame body', async ({ nestedFramePage }) => {
    const frame = await nestedFramePage.frameLeft();
    if (frame !== null) await expect((await frame.innerText('body')).trim()).toEqual('LEFT');
  });

  test('Check middle frame body', async ({ nestedFramePage }) => {
    const frame = await nestedFramePage.frameMiddle();
    if (frame !== null) await expect((await frame.innerText('body')).trim()).toEqual('MIDDLE');
  });

  test('Check right frame body', async ({ nestedFramePage }) => {
    const frame = await nestedFramePage.frameRight();
    if (!frame) {
      throw new Error('Frame "Right" not found');
    }
    await expect((await frame.innerText('body')).trim()).toEqual('RIGHT');
  });

  test('Check bottom frame body', async ({ nestedFramePage }) => {
    const frame = await nestedFramePage.frameBottom();
    if (!frame) {
      throw new Error('Frame "Bottom" not found');
    }
    await expect((await frame.innerText('body')).trim()).toMatch(/bottom/i);
  });
});
