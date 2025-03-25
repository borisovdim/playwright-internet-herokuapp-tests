import { test, expect } from '@playwright/test';
import { DragAndDropPage } from './page-objects/drag-and-drop.page';

test.describe('Drag And Drop', () => {
  let dragAndDropPage: DragAndDropPage;

  test.beforeEach(async ({ page }) => {
    dragAndDropPage = new DragAndDropPage(page);
    await dragAndDropPage.open();
  });

  test('Perform drag and drop', async () => {
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
