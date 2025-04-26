import { test, expect } from '@playwright/test';
import { MultipleWindowsPage } from './page-objects/multiple_window.page';

test.describe('Multiple Windows', () => {
  let multipleWindowsPage: MultipleWindowsPage;

  test.beforeEach(async ({ page }) => {
    multipleWindowsPage = new MultipleWindowsPage(page);
    await multipleWindowsPage.open();
  });

  test('Open a new window', async ({ context }) => {
    const [newPage] = await Promise.all([
      context.waitForEvent('page'), 
      multipleWindowsPage.openNewPage()
    ]);
    await newPage.waitForLoadState();
    expect(newPage.url()).toContain('windows/new');
  });
});
