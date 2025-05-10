import { test, expect } from './fixture/base.fixture';

test.describe('Check checkboxes', () => {

  test.beforeEach(async ({checkboxPage}) => {
    await checkboxPage.open();
  });

  test('Check all checkboxes', async ({checkboxPage}) => {
    await checkboxPage.checkAll();
    await checkboxPage.areAllChecked()
  });

  test('Uncheck all checkboxes', async ({checkboxPage}) => {
    await checkboxPage.unCheckAll();
    await checkboxPage.areAllUnChecked();
  });

  test('Check first checkbox', async ({checkboxPage}) => {
    await checkboxPage.checkCheckbox(0);
    await expect(checkboxPage.checkbox().nth(0)).toBeChecked();
  });

  test('Uncheck second checkbox', async ({checkboxPage}) => {
    await checkboxPage.checkCheckbox(1);
    await expect(checkboxPage.checkbox().nth(1)).not.toHaveAttribute('checked');
  });
});
