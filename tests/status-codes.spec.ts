import { expect, test } from './fixture/base.fixture';

test.describe('Status Codes', () => {

  test.beforeEach(async ({ statusCodesPage }) => {
    await statusCodesPage.open();
  });

  [200, 301, 404, 500].forEach(statusCode => {
    test(`'Check response status code equals ${statusCode}'`, async ({ page, statusCodesPage }) => {
      const responsePromise = page.waitForResponse(`/status_codes/${statusCode}`);
      await statusCodesPage.statusLink(`${statusCode}`).click();
      const response = await responsePromise;
      expect(response.status()).toBe(statusCode);
    });
  });
});
