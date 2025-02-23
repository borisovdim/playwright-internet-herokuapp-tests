import { test, expect } from '@playwright/test';
import { AddRemoveElements } from './page-objects/add-remove-elements.page';

test.describe.only('Add Remove Elements', () => {
  let addRemoveElementsPage: AddRemoveElements;

  test.beforeEach(async ({ page }) => {
    addRemoveElementsPage = new AddRemoveElements(page);
    await addRemoveElementsPage.open();
  });

  test('Add some elements and remove all', async () => {
    await addRemoveElementsPage.addElement(3);
    await addRemoveElementsPage.checkNumberAddedElements(3);
    await addRemoveElementsPage.deleteAllElements();
    await addRemoveElementsPage.checkNumberAddedElements(0);
  });

  test('Add some elements and remove all by reloading the pagee', async () => {
    await addRemoveElementsPage.addElement(3);
    await addRemoveElementsPage.checkNumberAddedElements(3);
    await addRemoveElementsPage.reload();
    await addRemoveElementsPage.checkNumberAddedElements(0);
  });

  test('Add elements and remove some of them', async () => {
    await addRemoveElementsPage.addElement(5);
    await addRemoveElementsPage.deleteElement(3);
    await addRemoveElementsPage.checkNumberAddedElements(2);
  });
});
