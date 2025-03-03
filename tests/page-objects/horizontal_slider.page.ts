import { Page } from '@playwright/test';
import { BasePage } from './base.page';

export class HorizontalSlider {
  page: Page;
  basePage: BasePage;

  constructor(page: Page) {
    this.page = page;
    this.basePage = new BasePage(page);
  }

  slider = () => this.page.locator('input[type="range"]');
  counter = () => this.page.locator('span#range');
  counterValue = () => this.counter().innerText();

  async open() {
    await this.basePage.goto('horizontal_slider');
  }

  async moveSliderByArrow(n: number, direction: string = 'right') {
    if (n <= 0) return;

    // get current position
    const currentValue = await this.counter().innerText();
    if (currentValue === null) return;

    // calculate required position
    let targetValue = parseFloat(currentValue);
    const step = 0.5; // step size

    if (direction === 'left') {
      targetValue -= step * n;
    } else {
      targetValue += step * n;
    }

    // check boarders
    const min = parseFloat('0');
    const max = parseFloat('5.0');

    targetValue = Math.max(min, Math.min(max, targetValue));

    // move slider
    while (parseFloat(await this.counterValue()) !== targetValue) {
      if (direction === 'left') {
        await this.slider().press('ArrowLeft', { delay: 100 });
      } else {
        await this.slider().press('ArrowRight', { delay: 100 });
      }
    }
  }
}
