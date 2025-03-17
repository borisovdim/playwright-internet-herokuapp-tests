import { Page, expect } from '@playwright/test';
import { BasePage } from './base.page';

export class ExitIntentPage {
  page: Page;
  basePage: BasePage;

  constructor(page: Page) {
    this.page = page;
    this.basePage = new BasePage(page);
  }

  modalWindow = () => this.page.locator('.modal');
  modalWindowTitle = () => this.modalWindow().locator('.modal-title');
  modalWindowCloseBtn = () => this.modalWindow().getByText('Close');

  async open() {
    await this.basePage.goto('exit_intent');
  }

  async closeModalWindow() {
    await this.modalWindowCloseBtn().click();
    await expect(this.modalWindow()).not.toBeVisible();
  }

  async moveOutOfWindow() {
    await this.page.mouse.move(100, 10);
    await this.page.mouse.move(100, -10);
  }
}
