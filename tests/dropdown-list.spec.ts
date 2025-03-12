import { test } from '@playwright/test';
import { DropdownListPage } from './page-objects/dropdown-list.page';

test.describe('Dropdown List', () => {
  let dropdownListPage: DropdownListPage;

  test.beforeEach(async ({ page }) => {
    dropdownListPage = new DropdownListPage(page);
    await dropdownListPage.open();
  });

  test('Select option from an dropdown', async () => {
    await dropdownListPage.selectOption('Option 2');
    await dropdownListPage.isSelected('Option 2');
    await dropdownListPage.isNotSelected('Option 1');
  });
});
