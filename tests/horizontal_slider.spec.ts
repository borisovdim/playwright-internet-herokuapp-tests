import { test, expect } from 'playwright/test';
import { HorizontalSlider } from './page-objects/horizontal_slider.page';

test.describe('Horizontal Slider', () => {
  let horizontalSlider: HorizontalSlider;

  test.beforeEach(async ({ page }) => {
    horizontalSlider = new HorizontalSlider(page);
    await horizontalSlider.open();
  });

  test('Move slider and check value', async () => {
    await horizontalSlider.moveSliderByArrow(5);
    await horizontalSlider.moveSliderByArrow(2, 'left');
    await expect(parseFloat(await horizontalSlider.counterValue())).toEqual(1.5);
  });

  test('Click slider more times than max range', async () => {
    await horizontalSlider.moveSliderByArrow(11);
    await expect(parseFloat(await horizontalSlider.counterValue())).toEqual(5);
  });
});
