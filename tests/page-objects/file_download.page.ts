import { Page } from '@playwright/test';
import { readdirSync, unlinkSync } from 'fs';
import { join } from 'path';
import { BasePage } from './base.page';

export class FileDownloaderPage {
  readonly page: Page;
  readonly basePage: BasePage;

  constructor(page: Page, basePage: BasePage) {
    this.page = page;
    this.basePage = basePage;
  }

  downloadIt = (fileName: string) => this.page.getByRole('link', { name: `${fileName}` });

  async open() {
    this.basePage.goto('download');
  }

  async downloadFile(fileName: string, downloadPath: string) {
    const waitForDownloadEvent = this.page.waitForEvent('download');
    await this.downloadIt(fileName).click();

    const fileDownload = await waitForDownloadEvent;
    await fileDownload.saveAs(downloadPath);
  }

  async deleteFiles() {
    const downloadDir = join(__dirname, '../download');
    const files = readdirSync(downloadDir);
    for (const file of files) {
      unlinkSync(join(downloadDir, file));
    }
  }
}
