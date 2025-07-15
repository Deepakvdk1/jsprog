import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');
  await page.getByRole('link', { name: 'Flight Bookings' }).click();
  await page.locator('input[name="\\30 -arrivalcity"]').click();
  await page.locator('input[name="\\30 -arrivalcity"]').fill('delhi');
  await page.getByText('New Delhi, INDEL').nth(1).click();
});