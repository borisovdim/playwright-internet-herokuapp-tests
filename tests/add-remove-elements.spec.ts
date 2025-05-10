import { test } from './fixture/base.fixture';

test.describe('Add Remove Elements', () => {
  test.beforeEach(async ({addRemoveElementsPage}) => {
    await addRemoveElementsPage.open();
  });

  test('Add some elements and remove all', async ({addRemoveElementsPage}) => {
    await addRemoveElementsPage.addElement(3);
    await addRemoveElementsPage.checkNumberAddedElements(3);
    await addRemoveElementsPage.deleteAllElements();
    await addRemoveElementsPage.checkNumberAddedElements(0);
  });

  test('Add some elements and remove all by reloading the pagee', async ({addRemoveElementsPage}) => {
    await addRemoveElementsPage.addElement(3);
    await addRemoveElementsPage.checkNumberAddedElements(3);
    await addRemoveElementsPage.reload();
    await addRemoveElementsPage.checkNumberAddedElements(0);
  });

  test('Add elements and remove some of them', async ({addRemoveElementsPage}) => {
    await addRemoveElementsPage.addElement(5);
    await addRemoveElementsPage.deleteElement(3);
    await addRemoveElementsPage.checkNumberAddedElements(2);
  });
});
