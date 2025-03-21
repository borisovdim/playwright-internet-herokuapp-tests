import { Page } from '@playwright/test';

export class BasePage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(path: string) {
    await this.page.goto(path);
  }

  async reload() {
    await this.page.reload({ waitUntil: 'networkidle' });

    // await this.page.evaluate(() => location.reload());

  }
}
