import { Page } from '@playwright/test';
import { BasePage } from './base.page';

export class GeolocationPage {
  readonly page: Page;
  readonly basePage: BasePage;

  constructor(page: Page, basePage: BasePage) {
    this.page = page;
    this.basePage = basePage;
  }

  getGeolocationButton = () => this.page.getByRole('button', { name: 'Where am I?' });
  latitude = () => this.page.locator('#lat-value').textContent();
  longitude = () => this.page.locator('#long-value').textContent();
  mapLink = () => this.page.locator('#map-link a');
  linkValue = () => this.mapLink().getByRole('link').getAttribute('href');
  rejectGoogleButton = () => this.page.getByRole('button', { name: 'Reject All' });

  async open() {
    this.basePage.goto('geolocation');
  }

  async getGeoloccation() {
    await this.getGeolocationButton().click();
  }

  async openOnGoogleMaps() {
    await this.mapLink().click();
    await this.page.waitForEvent('domcontentloaded');
  
    const rejectButtonLocator = this.rejectGoogleButton();
  
    if (await rejectButtonLocator.count() > 0) {
      await rejectButtonLocator.scrollIntoViewIfNeeded();
      if (await rejectButtonLocator.isVisible({ timeout: 5000 })) {
        await rejectButtonLocator.click();
      }
    }
  }
}
