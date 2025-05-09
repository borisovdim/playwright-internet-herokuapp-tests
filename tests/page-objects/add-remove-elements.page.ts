import { Page, expect } from '@playwright/test';
import { BasePage } from './base.page';

export class AddRemoveElementsPage {
  readonly page: Page;
  readonly basePage: BasePage;

  constructor(page: Page, basePage: BasePage) {
    this.page = page;
    this.basePage = basePage;
  }

  addElementButton = () => this.page.getByRole('button', { name: 'Add Element' });
  deleteElementButton = () => this.page.getByRole('button', { name: 'Delete' });

  async open() {
    await this.basePage.goto('add_remove_elements/');
  }

  async reload() {
    await this.basePage.reload();
    await expect(this.page).toHaveURL(/add_remove_elements/);
  }

  async addElement(n: number = 1) {
    for (let i = 0; i < n; i++) {
      await this.addElementButton().click();
    }
  }

  async deleteElement(n: number = 1) {
    for (let i = 0; i < n; i++) {
      await this.deleteElementButton().first().click();
    }
  }

  async deleteAllElements() {
   const elements = await this.deleteElementButton();
   while(await elements.count() > 0) {
    await elements.first().click();
   }
  }

  async checkNumberAddedElements(n: number) {
    await expect(this.deleteElementButton()).toHaveCount(n);
  }
}
