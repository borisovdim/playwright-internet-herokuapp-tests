import { expect, test } from './fixture/base.fixture';

test.describe('Multiple Windows', () => {

  test.beforeEach(async ({ multipleWindowsPage }) => {
    await multipleWindowsPage.open();
  });

  test('Open a new window', async ({ context, multipleWindowsPage }) => {
    const [newPage] = await Promise.all([
      context.waitForEvent('page'), 
      multipleWindowsPage.openNewPage()
    ]);
    await newPage.waitForLoadState();
    expect(newPage.url()).toContain('windows/new');
  });
});
