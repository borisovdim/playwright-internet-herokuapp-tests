import { test } from './fixture/base.fixture';

test.describe('Dropdown List', () => {

  test.beforeEach(async ({ dropdownListPage }) => {
    await dropdownListPage.open();
  });

  test('Select option from an dropdown', async ({ dropdownListPage }) => {
    await dropdownListPage.selectOption('Option 2');
    await dropdownListPage.isSelected('Option 2');
    await dropdownListPage.isNotSelected('Option 1');
  });
});
