import { Page } from '@playwright/test';
import { BasePage } from './base.page';

export class HoversPage {
  page: Page;
  basePage: BasePage;

  constructor(page: Page) {
    this.page = page;
    this.basePage = new BasePage(page);
  }

  userAvatar = (number) => this.page.getByAltText('User Avatar').nth(number - 1);
  userName = (name) => this.page.locator(`h5:has-text('name: ${name}')`);
  viewProfileLink = () => this.page.getByRole('link', { name: 'View profile' });

  async open() {
    this.basePage.goto('hovers');
  }
}
