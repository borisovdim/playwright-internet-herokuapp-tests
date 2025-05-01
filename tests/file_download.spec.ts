import { test, expect } from '@playwright/test';
import { FileDownloaderPage } from './page-objects/file_download.page';
import { join } from 'path';
import { existsSync, readFileSync } from 'fs';

test.describe('File Downloader', () => {
  let fileDownloaderPage: FileDownloaderPage;

  test.beforeEach(async ({ page }) => {
    fileDownloaderPage = new FileDownloaderPage(page);
    await fileDownloaderPage.open();
  });

  test.afterEach(async () => {
    await fileDownloaderPage.deleteFiles();
  });

  test('Download png file', async () => {
    const fileName = 'cypresslogo.png';
    const downloadPath = join(__dirname, 'download', fileName);

    await fileDownloaderPage.downloadFile(fileName, downloadPath);
    const fileExists = existsSync(downloadPath);
    expect(fileExists).toBeTruthy();
  });

  test('Download txt file and check content', async () => {
    const fileName = 'dummy.txt';
    const downloadPath = join(__dirname, 'download', fileName);

    await fileDownloaderPage.downloadFile(fileName, downloadPath);
    const fileExists = existsSync(downloadPath);
    await expect(fileExists).toBeTruthy();

    const fileContent = readFileSync(downloadPath, 'utf-8');
    expect(fileContent).toContain('some content...');
  });
});
