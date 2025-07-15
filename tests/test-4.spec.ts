import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');
  await page.getByRole('link', { name: 'Flight Bookings' }).click();
  await page.locator('input[name="\\30 -departcity"]').click();
  await page.locator('input[name="\\30 -departcity"]').fill('benga');
  await page.locator('span:nth-child(2)').first().click();
  await page.locator('input[name="\\30 -arrivalcity"]').fill('mumbai');
  await page.getByText('Mumbai', { exact: true }).click();
  await page.getByRole('row', { name: 'July' }).getByRole('button').click();
  await page.getByRole('button', { name: '10 ₹ 2888' }).click();
  await page.locator('input[name="\\30 -dateto"]').click();
  await page.getByRole('button', { name: '20 ₹' }).first().click();
  await page.locator('div').filter({ hasText: /^AdultsAbove 12 years1$/ }).getByRole('button').nth(1).click();
  await page.locator('div').filter({ hasText: /^ChildrenBetween 2-12 years0$/ }).getByRole('button').nth(1).click();
  await page.locator('div').filter({ hasText: /^InfantsBelow 2 years0$/ }).getByRole('button').nth(1).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('button', { name: 'SEARCH' }).click();
  await page.locator('.Oyj7AF').first().click();
  await page.locator('section:nth-child(6) > .OoHEz\\+ > .-suZGK > .Oyj7AF > div:nth-child(4)').click();
  await page.locator('section:nth-child(7) > .OoHEz\\+ > div:nth-child(2) > .tJjCVx > .XqNaEv').click();
  await page.locator('div').filter({ hasText: /^Air India \| AI-2645$/ }).first().click(); //locator type with filtering method 1
  await page.locator('div:nth-child(2) > .row > div:nth-child(3) > div:nth-child(7) > .HZN1Jt > .PyyaoL > .hBcZZV > .qUFBbT').click();
  await page.locator('._7QayNj').click();
  await page.locator('form').filter({ hasText: 'Enter Email/Mobile numberBy' }).getByRole('textbox').click();
  await page.locator('form').filter({ hasText: 'Enter Email/Mobile numberBy' }).getByRole('textbox').click();
  await page.locator('form').filter({ hasText: 'Enter Email/Mobile numberBy' }).getByRole('textbox').fill('9698423458');
  await page.getByRole('button', { name: 'Request OTP' }).click();
  await page.getByRole('button', { name: '✕' }).click();
  await page.getByText('22:15').click();
  await page.getByText('12:454h 10m1 stop - GOI 16:55₹').click();
  await page.locator('div').filter({ hasText: /^Air India \| AI-9520 \/ AI-664$/ }).first().click();
  await page.getByText('Air India | AI-2531 / AI-9569').click();
  await page.locator('._7QayNj').click();
  await page.getByRole('button', { name: '✕' }).click();
  await page.getByRole('button', { name: '✕' }).click();
});