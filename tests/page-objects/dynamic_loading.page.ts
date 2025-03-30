import { Page, expect } from '@playwright/test';
import { BasePage } from './base.page';

export class DynamicLoadingPage {
  readonly page: Page;
  readonly basePage: BasePage;

  constructor(page: Page) {
    this.page = page;
    this.basePage = new BasePage(page);
  }

  link_1 = () => this.page.getByRole('link', { name: /Example 1/ });
  link_2 = () => this.page.getByRole('link', { name: /Example 2/ });
  startButton = () => this.page.getByRole('button', {name: 'Start'});
  infoText = () => this.page.getByText('Hello World!');

  async open() {
    await this.basePage.goto('dynamic_loading');
  }

  async openNewPage_1() {
    this.link_1().click();
  }

  async openNewPage_2() {
    this.link_2().click();
  }

  async startLoading() {
    this.startButton().click();
  }
 

}
