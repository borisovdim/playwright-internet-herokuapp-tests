import { Page } from '@playwright/test';
import { BasePage } from './base.page';

export class HoversPage {
  page: Page;
  basePage: BasePage;

  constructor(page: Page) {
    this.page = page;
    this.basePage = new BasePage(page);
  }

  // image = () => this.page.locator('.figure');
  userAvatar = () => this.page.getByAltText('User Avatar');
  userName = (number) => this.page.locator(`h5:has-text('name: user${number}')`);
  viewProfileLink = () => this.page.getByRole('link', {name: 'View profile'}})

  async open() {
    this.basePage.goto('hovers');
  }
}
