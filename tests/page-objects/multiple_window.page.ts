import { Page } from '@playwright/test';
import { BasePage } from './base.page';

export class MultipleWindowsPage {
  readonly page: Page;
  readonly basePage: BasePage;

  constructor(page) {
    this.page = page;
    this.basePage = new BasePage(page);
  }

  linkToNewPage = () => this.page.getByRole('link', { name: 'Click Here' });

  async open() {
    this.basePage.goto('windows');
  }

  async openNewPage() {
    this.linkToNewPage().click();
  }
}
