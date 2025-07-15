# Test info

- Name: amazon product sort
- Location: C:\Users\deepa\OneDrive\Desktop\JSprog\tests\amazonproductsort.spec.js:3:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('//span[text()=\'256 GB\']/..//div')
    - waiting for" https://www.amazon.in/s?crid=CA4JSUG2QZYL&i=aps&k=samsung%20galaxy%20s24%20ultra%205g%20cover&ref=nb_sb_noss_1&sprefix=samsung%20galaxy%20s24%20ultra%205g%20cover%2Caps%2C294&url=search-alias%3Daps" navigation to finish...
    - navigated to "https://www.amazon.in/s?crid=CA4JSUG2QZYL&i=aps&k=samsung%20galaxy%20s24%20ultra%205g%20cover&ref=nb_sb_noss_1&sprefix=samsung%20galaxy%20s24%20ultra%205g%20cover%2Caps%2C294&url=search-alias%3Daps"

    at C:\Users\deepa\OneDrive\Desktop\JSprog\tests\amazonproductsort.spec.js:16:59
```

# Test source

```ts
   1 | import { test,expect} from "@playwright/test";
   2 |
   3 | test("amazon product sort",async({browser})=>{
   4 |     const context = await browser.newContext({
   5 |         permissions: [], // Don't grant 'notifications' permission
   6 |         args: ['--disable-notifications'], // Optional: Chromium-specific
   7 |     });
   8 |     const page = await context.newPage();
   9 |     await page.goto("https://www.amazon.in");
  10 |     await page.fill("//input[@aria-label='Search Amazon.in']", "samsung galaxy s24 ultra");
  11 |     await page.waitForLoadState();
  12 |     let option= 6;
  13 |     await page.locator(`//div[@id='sac-suggestion-row-${option}']`).click();
  14 |     await page.waitForLoadState();
  15 |     //expect(page.locator("//span[@class='a-color-state a-text-bold']")).toHaveText("samsung galaxy s24 ultra");
> 16 |     await page.locator("//span[text()='256 GB']/..//div").click();
     |                                                           ^ Error: locator.click: Target page, context or browser has been closed
  17 |     expect(page.locator("//span[text()='256 GB']/..//div")).toBeChecked();
  18 |     //wait expect(true).toBe(false); // Fails intentionally
  19 | });
  20 |
  21 |
```