import { Page } from '@playwright/test';
import { BasePage } from './base.page';

export class HoversPage {
  readonly page: Page;
  readonly basePage: BasePage;

  constructor(page: Page, basePage: BasePage) {
    this.page = page;
    this.basePage = basePage;
  }

  userAvatar = (number) => this.page.getByAltText('User Avatar').nth(number - 1);
  userName = (name) => this.page.locator(`h5:has-text('name: ${name}')`);
  viewProfileLink = () => this.page.getByRole('link', { name: 'View profile' });

  async open() {
    this.basePage.goto('hovers');
  }
}
