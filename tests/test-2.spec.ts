import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');
  await page.getByRole('link', { name: 'Flight Bookings' }).click();
  await page.locator('label').filter({ hasText: 'Round Trip' }).locator('div').first().click();
  await page.locator('input[name="\\30 -departcity"]').click();
  await page.locator('input[name="\\30 -departcity"]').fill('mumbai');
  await page.getByText('Bengaluru, INBOM').first().click();
});