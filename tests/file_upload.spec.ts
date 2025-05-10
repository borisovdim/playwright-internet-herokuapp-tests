import { test, expect } from './fixture/base.fixture';

test.describe('File Uploader', () => {

  test.beforeEach(async ({ fileUploaderPage }) => {
    await fileUploaderPage.open();
  });

  test('Upload file', async ({ fileUploaderPage }) => {
    const fileName = 'dummy_2.txt';
    await fileUploaderPage.uploadFile(fileName);
    await expect(fileUploaderPage.message()).toContainText('File Uploaded!');
  });
});
