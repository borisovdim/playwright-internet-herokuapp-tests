import { test, expect } from '@playwright/test';
import { CheckboxesPage } from './page-objects/checkboxes.page';

test.describe('Check checkboxes', () => {
  let checkboxPage: CheckboxesPage;

  test.beforeEach(async ({ page }) => {
    checkboxPage = new CheckboxesPage(page);
    await checkboxPage.open();
  });

  test('Check all checkboxes', async () => {
    await checkboxPage.checkAll();
    await checkboxPage.areAllChecked()
  });

  test('Uncheck all checkboxes', async () => {
    await checkboxPage.unCheckAll();
    await checkboxPage.areAllUnChecked();
  });

  test('Check first checkbox', async () => {
    await checkboxPage.checkCheckbox(0);
    await expect(checkboxPage.checkbox().nth(0)).toBeChecked();
  });

  test('Uncheck second checkbox', async () => {
    await checkboxPage.checkCheckbox(1);
    await expect(checkboxPage.checkbox().nth(1)).not.toHaveAttribute('checked');
  });
});
