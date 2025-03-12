import { Page } from '@playwright/test';
import { BasePage } from './base.page';

export class StatusCodesPage {
  page: Page;
  basePage: BasePage;

  constructor(page: Page) {
    this.page = page;
    this.basePage = new BasePage(page);
  }

  statusLink = (status) => this.page.getByRole('link', { name: `${status}` });

  async open() {
    this.basePage.goto('status_codes');
  }
}
