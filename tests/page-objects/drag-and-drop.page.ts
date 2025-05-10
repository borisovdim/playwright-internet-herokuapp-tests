import { Page } from '@playwright/test';
import { BasePage } from './base.page';

export class DragAndDropPage {
  readonly page: Page;
  readonly basePage: BasePage;

  constructor(page: Page, basePage: BasePage) {
    this.page = page;
    this.basePage = basePage;
  }

  aElement = () => this.page.locator('#column-a');
  bElement = () => this.page.locator('#column-b');

  async open() {
    this.basePage.goto('drag_and_drop');
  }
}
