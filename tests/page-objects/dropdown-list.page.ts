import { Page, expect } from '@playwright/test';
import { BasePage } from './base.page';

export class DropdownListPage {
  readonly page: Page;
  readonly basePage: BasePage;

  constructor(page: Page) {
    this.page = page;
    this.basePage = new BasePage(page);
  }

  dropdown = () => this.page.locator('#dropdown');
  option = text => this.page.getByRole('option', { name: `${text}` });

  async open() {
    this.basePage.goto('dropdown');
  }

  async selectOption(option) {
    const dropDownList = await this.dropdown();
    await dropDownList.click();
    await dropDownList.selectOption(option);
  }

  async isSelected(option) {
    await expect(this.option(option)).toHaveAttribute('selected');
  }

  async isNotSelected(option) {
    await expect(this.option(option)).not.toHaveAttribute('selected');
  }
}
