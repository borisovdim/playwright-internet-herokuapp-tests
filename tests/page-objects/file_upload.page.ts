import { Page, expect } from '@playwright/test';
import { BasePage } from './base.page';
import { join } from 'path';

export class FileUploaderPage {
  readonly page: Page;
  readonly basePage: BasePage;

  constructor(page: Page) {
    this.page = page;
    this.basePage = new BasePage(page);
  }

  chooseFileButton = () => this.page.locator('#file-upload');
  uploadFileButton = () => this.page.locator('#file-submit');
  message = () => this.page.locator('#content');

  async open() {
    this.basePage.goto('upload');
  }

  async uploadFile(fileName: string) {
    const filePath = join(__dirname, '../file_upload', fileName);

    const uploadPromise = this.page.waitForResponse('upload');

    await this.chooseFileButton().click();
    await this.chooseFileButton().setInputFiles(filePath);
    await this.uploadFileButton().click();

    const response = await uploadPromise;
    expect(response.status()).toBe(200);
  }
}
