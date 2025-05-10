import { test, expect } from './fixture/base.fixture';

test.describe('Exit Intent', () => {

  test.beforeEach(async ({ exitIntentPage }) => {
    await exitIntentPage.open();
  });

  test('Get modal window', async ({ exitIntentPage }) => {
    await exitIntentPage.moveOutOfWindow();
    await expect(exitIntentPage.modalWindowTitle()).toContainText(/This is a modal window/i);
    await exitIntentPage.closeModalWindow();
  });
});
