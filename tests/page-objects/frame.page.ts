import { Page } from '@playwright/test';
import { BasePage } from './base.page';

export class NestedFramePage {
  readonly page: Page;
  readonly basePage: BasePage;

  constructor(page: Page) {
    this.page = page;
    this.basePage = new BasePage(page);
  }

  async open() {
    await this.basePage.goto('nested_frames');
  }

  frameLeft = () => this.page.frame('frame_left');
  frameMiddle = () => this.page.frame('frame-middle');
  frameRight = () => this.page.frame('frame-right');
  frameBottom = () => this.page.frame('frame-bottom');
}

export class IFramePage {
  page: Page;
  basePage: BasePage;

  constructor(page: Page) {
    this.page = page;
    this.basePage = new BasePage(page);
  }

  async open() {
    await this.basePage.goto('iframe');
  }

  closeAlertButton = () => this.page.locator('[role="alert"] button');
  iFrame = () => this.page.frameLocator('.tox-edit-area__iframe');
  contentArea = () => this.iFrame().locator('#tinymce');
}
