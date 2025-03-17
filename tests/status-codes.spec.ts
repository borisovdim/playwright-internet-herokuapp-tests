import { test, expect } from '@playwright/test';
import { StatusCodesPage } from './page-objects/status-codes.page';

test.describe('Status Codes', () => {
  let statusCodesPage: StatusCodesPage;

  test.beforeEach(async ({ page }) => {
    statusCodesPage = new StatusCodesPage(page);
    await statusCodesPage.open();
  });

  [200, 301, 404, 500].forEach(statusCode => {
    test(`'Check response status code equals ${statusCode}'`, async ({ page }) => {
      const responsePromise = page.waitForResponse(`/status_codes/${statusCode}`);
      await statusCodesPage.statusLink(`${statusCode}`).click();
      const response = await responsePromise;
      expect(response.status()).toBe(statusCode);
    });
  });
});
