# Test info

- Name: amazon product sort
- Location: C:\Users\deepa\OneDrive\Desktop\JSprog\tests\amazonproductsort.spec.js:3:5

# Error details

```
Error: page.fill: Target page, context or browser has been closed
Call log:
  - waiting for locator('//input[@aria-label=\'Search Amazon\']')

    at C:\Users\deepa\OneDrive\Desktop\JSprog\tests\amazonproductsort.spec.js:10:16
```

# Test source

```ts
   1 | import { test } from "@playwright/test";
   2 |
   3 | test("amazon product sort",async({browser})=>{
   4 |     const context = await browser.newContext({
   5 |         permissions: [], // Don't grant 'notifications' permission
   6 |         args: ['--disable-notifications'], // Optional: Chromium-specific
   7 |     });
   8 |     const page = await context.newPage();
   9 |     await page.goto("https://www.amazon.in");
> 10 |     await page.fill("//input[@aria-label='Search Amazon.in']", "samsung galaxy s24 ultra");
     |                ^ Error: page.fill: Target page, context or browser has been closed
  11 |     await page.click('//input[@id="nav-search-submit-button"]');
  12 |     await page.waitForLoadState();
  13 |     let option= 6;
  14 |     await page.locator(`//div[@id='sac-suggestion-row-${option}']`).click();
  15 |     await page.waitForLoadState();
  16 |     await expect(page.locator("//span[@class='a-color-state a-text-bold']")).toHaveText("samsung galaxy s24 ultra");
  17 |     await page.locator("//span[text()='256 GB']/..//div").click();
  18 |     expect(page.locator("//span[text()='256 GB']/..//div")).toBeChecked();
  19 |     expect(true).toBe(false); // Fails intentionally
  20 | });
  21 |
  22 |
```