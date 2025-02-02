import { test, expect } from '@playwright/test';
import { afterEach } from 'node:test';

test('Logon manually written test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.locator('#username').click();
  await page.locator('#username').fill('tomsmith');
  await page.locator('#password').click();
  await page.locator('#password').fill('SuperSecretPassword!');
  await page.getByRole('button', { name: /login/i }).click();
  await expect(page.locator('#flash')).toBeVisible();
  await expect(page.locator('#flash')).toContainText(/You logged into a secure area!/);
  await expect(page.locator('h2')).toContainText('Secure');
  await page.locator('.button.secondary.radius:has-text("Logout")').click();
  await page.locator('#username').click();
  await page.locator('#username').fill('11');
  await expect(page.getByRole('textbox', { name: 'Username' })).toHaveValue('11');
});
