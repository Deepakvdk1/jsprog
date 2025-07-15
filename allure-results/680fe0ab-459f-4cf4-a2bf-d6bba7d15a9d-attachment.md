# Test info

- Name: amzon cart
- Location: C:\Users\deepa\OneDrive\Desktop\JSprog\tests\amazon.spec.js:2:5

# Error details

```
Error: page.waitForSelector: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//input[@id=\'twotabsearchtextbox\']') to be visible

    at C:\Users\deepa\OneDrive\Desktop\JSprog\tests\amazon.spec.js:4:26
```

# Page snapshot

```yaml
- heading "Click the button below to continue shopping" [level=4]
- button "Continue shopping"
- link "Conditions of Use & Sale":
  - /url: https://www.amazon.in/gp/help/customer/display.html/ref=footer_cou?ie=UTF8&nodeId=200545940
- link "Privacy Notice":
  - /url: https://www.amazon.in/gp/help/customer/display.html/ref=footer_privacy?ie=UTF8&nodeId=200534380
- text: © 1996-2025, Amazon.com, Inc. or its affiliates
```

# Test source

```ts
   1 | import { test } from "@playwright/test";
   2 | test("amzon cart",async({page})=>{
   3 |     await page.goto("https://www.amazon.in/");
>  4 |     const searchbox=page.waitForSelector("//input[@id='twotabsearchtextbox']")
     |                          ^ Error: page.waitForSelector: Test timeout of 30000ms exceeded.
   5 |     await page.locator("//input[@id='twotabsearchtextbox']").fill("boat ear buds airpods");
   6 |     const searchbutton=page.waitForSelector("//input[@id='nav-search-submit-button']")
   7 |     await page.locator("//input[@id='nav-search-submit-button']").click();
   8 |     
   9 |     await page.waitForLoadState();
  10 |     expect(page.locator("//h2[@aria-label='boAt Airdopes Plus 311 (2025 Launch), Glass Design, Dual Mics ENx, Fast Charge, 50 Hrs Battery, Low Latency, IPX4, Bluetooth Earbuds, TWS Ear Buds Wireless Earphones with mic (Charcoal Black)']")).tobeVisible();
  11 |     await page.locator("//h2[@aria-label='boAt Airdopes Plus 311 (2025 Launch), Glass Design, Dual Mics ENx, Fast Charge, 50 Hrs Battery, Low Latency, IPX4, Bluetooth Earbuds, TWS Ear Buds Wireless Earphones with mic (Charcoal Black)']").click()
  12 |     let title=page.locator("//span[@id='productTitle']").textContent()
  13 |     expect(title).toContain("boAt Airdopes Plus 311 (2025 Launch), Glass Design, Dual Mics ENx, Fast Charge, 50 Hrs Battery, Low Latency, IPX4, Bluetooth Earbuds, TWS Ear Buds Wireless Earphones with mic (Charcoal Black)");
  14 |     expect(page.locator("//input[@id='add-to-cart-button']")).tobeVisible();
  15 |     await page.locator("//input[@id='add-to-cart-button']").click()
  16 |     expect(page.locator("//span[@id='nav-cart-count']")).toBeVisible();
  17 |     await page.locator("//span[@id='nav-cart-count']").click()
  18 |     await page.waitForLoadState();
  19 |     let count =page.locator("//div//span[@data-a-selector='value']").textContent();
  20 |     if(count === "1") {
  21 |        console.log("Item successfully added to cart.");
  22 |     }
  23 | })
```