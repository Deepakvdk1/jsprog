import{test} from "@playwright/test";
test('SpiceJet flight search and row count', async ({ page }) => {
  // 1. Go to SpiceJet
  await page.goto('https://www.spicejet.com/', { waitUntil: 'networkidle' });
  await page.locator('div[data-testid="search-destination-code"]').click();

  // 2. Click To field
  await page.click('//div[@data-testid="search-destination-code"]');

  // 3. Fill To location as "Bengaluru"
  await page.locator('input[placeholder="To"]').fill('Bengaluru');
  await page.waitForTimeout(1000);
  await page.click('div[data-testid*="dropdown"] >> text=Bengaluru');

  // 4. Set passengers to 2 adults
  await page.click('div[data-testid="home-page-travellers"]');
  await page.click('div[data-testid="Adult-testID-plus-one-cta"]'); // +1
  await page.click('div[data-testid="home-page-travellers-done-cta"]');

  // 5. Select departure date (e.g., first available)
  await page.click('div[data-testid="departure-date-dropdown-label-test-id"]');
  await page.click('div[data-testid*="undefined-calendar-day"]'); // any available day

  // 6. Click on Search button
  await page.click('div[data-testid="home-page-flight-cta"]');

  // 7. Wait for results and count rows
  await page.waitForSelector('div[data-testid="flight-card-view"]');
  const rows = await page.locator('div[data-testid="flight-card-view"]').count();

  console.log(`Flight rows found: ${rows}`);
})