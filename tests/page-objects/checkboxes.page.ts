import { Page, expect } from '@playwright/test';
import { BasePage } from './base.page';

export class CheckboxesPage {
  readonly page: Page;
  readonly basePage: BasePage;

  constructor(page: Page, basePage: BasePage) {
    this.page = page;
    this.basePage = basePage;
  }

  checkbox = () => this.page.locator('input[type="checkbox"]');

  async open() {
    await this.basePage.goto('checkboxes');
  }

  async checkAll() {
    const checkboxes = await this.checkbox().all();
    for (const checkbox of checkboxes) {
      if (!(await checkbox.isChecked())) {
        await checkbox.check();
      }
    }
  }

  async unCheckAll() {
    const checkboxes = await this.checkbox().all();
    for (const checkbox of checkboxes) {
      if (await checkbox.isChecked()) {
        await checkbox.uncheck();
      }
    }
  }

  async checkCheckbox(n: number) {
   await this.checkbox().nth(n).click();
  }

  async areAllChecked() {
    const checkboxes = await this.checkbox().all();
    for (const checkbox of checkboxes) {
      await expect(checkbox).toBeChecked();
    }
  }

  async areAllUnChecked() {
    const checkboxes = await this.checkbox().all();
    for (const checkbox of checkboxes) {
      await expect(checkbox).not.toBeChecked();
    }
  }
}
