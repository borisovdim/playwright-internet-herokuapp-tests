import { expect, test } from '@playwright/test';
import { existsSync, readFileSync } from 'fs';
import { join } from 'path';
import { FileDownloaderPage } from './page-objects/file_download.page';
import { uploadFileViaApi } from './utils/fileUploaderHelper';

const filesToUpload = ['cypresslogo.png', 'dummy.txt'];

test.describe('File Downloader', () => {
  let fileDownloaderPage: FileDownloaderPage;

  test.beforeAll(async () => {
    for (const file of filesToUpload) {
      uploadFileViaApi(file);
    }
  });

  test.beforeEach(async ({ page }) => {
    fileDownloaderPage = new FileDownloaderPage(page);
    await fileDownloaderPage.open();
  });

  test.afterEach(async () => {
    await fileDownloaderPage.deleteFiles();
  });

  test('Download png file', async () => {
    const fileName = filesToUpload[0];
    const downloadPath = join(__dirname, 'download', fileName);

    await fileDownloaderPage.downloadFile(fileName, downloadPath);
    const fileExists = existsSync(downloadPath);
    expect(fileExists).toBeTruthy();
  });

  test('Download txt file and check content', async () => {
    const fileName = filesToUpload[1];
    const downloadPath = join(__dirname, 'download', fileName);

    await fileDownloaderPage.downloadFile(fileName, downloadPath);
    const fileExists = existsSync(downloadPath);
    await expect(fileExists).toBeTruthy();

    const fileContent = readFileSync(downloadPath, 'utf-8');
    expect(fileContent).toContain('some content...');
  });
});
