# Test info

- Name: amzon cart
- Location: C:\Users\deepa\OneDrive\Desktop\JSprog\tests\amazon.spec.js:2:5

# Error details

```
Error: locator.scrollIntoViewIfNeeded: Test ended.
Call log:
  - waiting for locator('//h2[@aria-label=\'boAt Airdopes Plus 311 (2025 Launch), Glass Design, Dual Mics ENx, Fast Charge, 50 Hrs Battery, Low Latency, IPX4, Bluetooth Earbuds, TWS Ear Buds Wireless Earphones with mic (Charcoal Black)\']')
    - locator resolved to visible <h2 class="a-size-medium a-spacing-none a-color-base a-text-normal" aria-label="boAt Airdopes Plus 311 (2025 Launch), Glass Design, Dual Mics ENx, Fast Charge, 50 Hrs Battery, Low Latency, IPX4, Bluetooth Earbuds, TWS Ear Buds Wireless Earphones with mic (Charcoal Black)">…</h2>

    at C:\Users\deepa\OneDrive\Desktop\JSprog\tests\amazon.spec.js:10:18
```

# Test source

```ts
   1 | import { test, expect } from "@playwright/test";
   2 | test("amzon cart",async({page})=>{
   3 |     await page.goto("https://www.amazon.in");
   4 |     // await page.waitForSelector("//input[@id='twotabsearchtextbox']")
   5 |     await page.locator("//input[@id='twotabsearchtextbox']").fill("boat ear buds airpods");
   6 |     // await page.waitForSelector("//input[@id='nav-search-submit-button']")
   7 |     await page.locator("//input[@id='nav-search-submit-button']").click(); 
   8 |     await page.waitForLoadState();
   9 |     const target =page.locator("//h2[@aria-label='boAt Airdopes Plus 311 (2025 Launch), Glass Design, Dual Mics ENx, Fast Charge, 50 Hrs Battery, Low Latency, IPX4, Bluetooth Earbuds, TWS Ear Buds Wireless Earphones with mic (Charcoal Black)']");
> 10 |     await target.scrollIntoViewIfNeeded();
     |                  ^ Error: locator.scrollIntoViewIfNeeded: Test ended.
  11 |     expect(page.locator("//h2[@aria-label='boAt Airdopes Plus 311 (2025 Launch), Glass Design, Dual Mics ENx, Fast Charge, 50 Hrs Battery, Low Latency, IPX4, Bluetooth Earbuds, TWS Ear Buds Wireless Earphones with mic (Charcoal Black)']")).toBeVisible();
  12 |     await page.locator("//h2[@aria-label='boAt Airdopes Plus 311 (2025 Launch), Glass Design, Dual Mics ENx, Fast Charge, 50 Hrs Battery, Low Latency, IPX4, Bluetooth Earbuds, TWS Ear Buds Wireless Earphones with mic (Charcoal Black)']").click()
  13 |     let title=page.locator("//span[@id='productTitle']").textContent()
  14 |     //expect(title).toContain("boAt Airdopes Plus 311 (2025 Launch), Glass Design, Dual Mics ENx, Fast Charge, 50 Hrs Battery, Low Latency, IPX4, Bluetooth Earbuds, TWS Ear Buds Wireless Earphones with mic (Charcoal Black)");
  15 |     expect(page.locator("//input[@id='add-to-cart-button']")).toBeVisible();
  16 |     await page.locator("//input[@id='add-to-cart-button']").click()
  17 |     expect(page.locator("//span[@id='nav-cart-count']")).toBeVisible();
  18 |     await page.locator("//span[@id='nav-cart-count']").click()
  19 |     await page.waitForLoadState();
  20 |     let count =page.locator("//div//span[@data-a-selector='value']").textContent();
  21 |     if(count === "1") {
  22 |        console.log("Item successfully added to cart.");
  23 |     }
  24 | })
```