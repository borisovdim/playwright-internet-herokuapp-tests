import { test, expect } from './fixture/base.fixture';
import { existsSync, readFileSync } from 'fs';
import { join } from 'path';
import { uploadFileViaApi } from './utils/fileUploaderHelper';

const filesToUpload = ['cypresslogo.png', 'dummy.txt'];

test.describe('File Downloader', () => {

  test.beforeAll(async () => {
    for (const file of filesToUpload) {
      uploadFileViaApi(file);
    }
  });

  test.beforeEach(async ({ fileDownloaderPage }) => {
    await fileDownloaderPage.open();
  });

  test.afterEach(async ({ fileDownloaderPage }) => {
    await fileDownloaderPage.deleteFiles();
  });

  test('Download png file', async ({ fileDownloaderPage }) => {
    const fileName = filesToUpload[0];
    const downloadPath = join(__dirname, 'download', fileName);

    await fileDownloaderPage.downloadFile(fileName, downloadPath);
    const fileExists = existsSync(downloadPath);
    expect(fileExists).toBeTruthy();
  });

  test('Download txt file and check content', async ({ fileDownloaderPage }) => {
    const fileName = filesToUpload[1];
    const downloadPath = join(__dirname, 'download', fileName);

    await fileDownloaderPage.downloadFile(fileName, downloadPath);
    const fileExists = existsSync(downloadPath);
    await expect(fileExists).toBeTruthy();

    const fileContent = readFileSync(downloadPath, 'utf-8');
    expect(fileContent).toContain('some content...');
  });
});
