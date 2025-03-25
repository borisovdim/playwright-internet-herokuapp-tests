import { expect, test } from '@playwright/test';
import { GeolocationPage } from './page-objects/geolocation.page';

test.describe('Geolocation', () => {
  let geolocationPage: GeolocationPage;

  test.beforeEach(async ({ page }) => {
    geolocationPage = new GeolocationPage(page);
    await geolocationPage.open();
    await geolocationPage.getGeoloccation();
  });

  const longitude = 27.5740700583153;
  const latitude = 53.89875588242871;

  test.use({
    geolocation: { longitude: longitude, latitude: latitude },
    permissions: ['geolocation'],
  });

  test('Check geolocation', async () => {
    expect(await geolocationPage.latitude()).toBe(`${latitude}`);
    expect(await geolocationPage.longitude()).toBe(`${longitude}`);
  });

  test('Open on Google Maps', async ({ page }) => {
    await geolocationPage.openOnGoogleMaps();
    await page.waitForURL(`https://www.google.com/maps?q=${latitude},${longitude}`, { timeout: 10000 });
  });
});
