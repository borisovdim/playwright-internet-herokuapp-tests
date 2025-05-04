import { expect, test } from '@playwright/test';
import { FileUploaderPage } from './page-objects/file_upload.page';

test.describe('File Uploader', () => {
  let fileUploaderPage: FileUploaderPage;

  test.beforeEach(async ({ page }) => {
    fileUploaderPage = new FileUploaderPage(page);
    await fileUploaderPage.open();
  });

  test('Upload file', async () => {
    const fileName = 'dummy_2.txt';
    await fileUploaderPage.uploadFile(fileName);
    await expect(fileUploaderPage.message()).toContainText('File Uploaded!');
  });
});
