import { expect, test } from './fixture/base.fixture';

test.describe('Horizontal Slider', () => {

  test.beforeEach(async ({ horizontalSliderPage }) => {
    await horizontalSliderPage.open();
  });

  test('Move slider and check value', async ({ horizontalSliderPage }) => {
    await horizontalSliderPage.moveSliderByArrow(5);
    await horizontalSliderPage.moveSliderByArrow(2, 'left');
    await expect(parseFloat(await horizontalSliderPage.counterValue())).toEqual(1.5);
  });

  test('Click slider more times than max range', async ({ horizontalSliderPage }) => {
    await horizontalSliderPage.moveSliderByArrow(11);
    await expect(parseFloat(await horizontalSliderPage.counterValue())).toEqual(5);
  });
});
