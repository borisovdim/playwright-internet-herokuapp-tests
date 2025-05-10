import { test, expect } from './fixture/base.fixture';

test.describe('Drag And Drop', () => {

  test.beforeEach(async ({ dragAndDropPage }) => {
    await dragAndDropPage.open();
  });

  test('Perform drag and drop', async ({ dragAndDropPage }) => {
    const aElementText = await dragAndDropPage.aElement().innerText();
    const bElementText = await dragAndDropPage.bElement().innerText();
    await expect(aElementText).toContain('A');
    await expect(bElementText).toContain('B');

    await dragAndDropPage.aElement().dragTo(dragAndDropPage.bElement());

    const updatedAElementText = await dragAndDropPage.aElement().innerText();
    const updatedBElementText = await dragAndDropPage.bElement().innerText();
    await expect(updatedAElementText).toContain('B');
    await expect(updatedBElementText).toContain('A');
  });
});
