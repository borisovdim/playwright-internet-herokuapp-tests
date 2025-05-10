import { Page } from '@playwright/test';
import { BasePage } from './base.page';

export class MultipleWindowsPage {
  readonly page: Page;
  readonly basePage: BasePage;

  constructor(page: Page, basePage: BasePage) {
    this.page = page;
    this.basePage = basePage;
  }

  linkToNewPage = () => this.page.getByRole('link', { name: 'Click Here' });

  async open() {
    this.basePage.goto('windows');
  }

  async openNewPage() {
    this.linkToNewPage().click();
  }
}
