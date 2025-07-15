import { test, expect } from "@playwright/test";
test("amzon cart",async({page})=>{
    await page.goto("https://www.amazon.in");
   
    await page.locator("//input[@id='twotabsearchtextbox']").fill("boat ear buds airpods");
    await page.locator("//input[@id='nav-search-submit-button']").click(); 
    await page.waitForLoadState();
    const target =page.locator("//h2[@aria-label='boAt Airdopes Plus 311 (2025 Launch), Glass Design, Dual Mics ENx, Fast Charge, 50 Hrs Battery, Low Latency, IPX4, Bluetooth Earbuds, TWS Ear Buds Wireless Earphones with mic (Charcoal Black)']");
    await target.scrollIntoViewIfNeeded();
    expect(page.locator("//h2[@aria-label='boAt Airdopes Plus 311 (2025 Launch), Glass Design, Dual Mics ENx, Fast Charge, 50 Hrs Battery, Low Latency, IPX4, Bluetooth Earbuds, TWS Ear Buds Wireless Earphones with mic (Charcoal Black)']")).toBeVisible();
    await page.locator("//h2[@aria-label='boAt Airdopes Plus 311 (2025 Launch), Glass Design, Dual Mics ENx, Fast Charge, 50 Hrs Battery, Low Latency, IPX4, Bluetooth Earbuds, TWS Ear Buds Wireless Earphones with mic (Charcoal Black)']").click()
    let title=await page.locator("//span[@id='productTitle']").textContent()
    expect(title).toContain("boAt Airdopes Plus 311");
    expect(page.locator("//input[@id='add-to-cart-button']")).toBeVisible();
    await page.locator("//input[@id='add-to-cart-button']").click()
    expect(page.locator("//span[@id='nav-cart-count']")).toBeVisible();
    await page.locator("//span[@id='nav-cart-count']").click()
    await page.waitForLoadState();
    await page.waitForSelector("//fieldset//span[@data-a-selector='value']");
    let count =await page.locator("//fieldset//span[@data-a-selector='value']").textContent();
    if(count =="1") {
       console.log("Item successfully added to cart.");
    }
})