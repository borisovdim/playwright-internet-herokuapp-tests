import { test, expect } from '@playwright/test';
import { ExitIntentPage } from './page-objects/exit_intent.page';

test.describe('Exit Intent', () => {
  let exitIntentPage: ExitIntentPage;

  test.beforeEach(async ({ page }) => {
    exitIntentPage = new ExitIntentPage(page);
    await exitIntentPage.open();
  });

  test('Get modal window', async () => {
    await exitIntentPage.moveOutOfWindow();
    await expect(exitIntentPage.modalWindowTitle()).toContainText(/This is a modal window/i);
    await exitIntentPage.closeModalWindow();
  });
});
