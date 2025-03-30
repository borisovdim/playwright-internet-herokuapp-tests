import { Page, expect } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  loading = () => this.page.locator('#loading');

  async goto(path: string) {
    await this.page.goto(path);
  }

  async reload() {
    await this.page.reload({ waitUntil: 'networkidle' });

    // await this.page.evaluate(() => location.reload());
  }

  static async loadingComplete(page: Page) {
    await expect(page.locator('#loading')).toHaveAttribute('style', 'display: none;', { timeout: 10000 });
  }
}
