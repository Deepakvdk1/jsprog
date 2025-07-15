import { expect, test } from "@playwright/test";
test("search button colour evaluate ", async ({ page }) => {
    await page.goto("https://www.spicejet.com/");
   const button=await page.locator("[data-testid='home-page-flight-cta']")
  await  button.waitFor({ state: 'attached' })
  const img=await button.evaluate(e1=> window.getComputedStyle(e1).getPropertyValue('background-image'))
  expect(img).toContain("rgb(252, 182, 62), rgb(247, 148, 29)")
})
test.only("search flight rows ",async({browser})=>{
    let context =await browser.newContext({
    permissions: [], // Don't grant 'notifications' permission
    args: ['--disable-notifications'], // Optional: Chromium-specific
  })
    context.clearCookies()
    let page=await context.newPage()
    await page.goto("https://www.spicejet.com/");
    await page.waitForLoadState();
    expect(page.locator("//div[text()='round trip']")).toBeVisible();
    await page.click("//div[text()='round trip']")
    expect(page.locator("//div[text()='To']/following::input[@class='css-1cwyjr8 r-homxoj r-ubezar r-10paoce r-13qz1uu']")).toBeVisible();
    await page.locator("//div[text()='To']/following::input[@class='css-1cwyjr8 r-homxoj r-ubezar r-10paoce r-13qz1uu']").fill("Bengaluru");
    expect(page.locator("//div[text()='To']/following::input[@class='css-1cwyjr8 r-homxoj r-ubezar r-10paoce r-13qz1uu']")).toHaveValue("Bengaluru (BLR)");
    await page.dblclick("//div[@data-testid='undefined-month-August-2025']//div[@data-testid='undefined-calendar-day-21']");
    expect(page.locator("//div[text()='1 Adult']")).toBeInViewport();
    await page.click("//div[text()='1 Adult']",{ force: true });
    expect(page.locator("//div[@data-testid='Adult-testID-plus-one-cta']")).toBeVisible();
    let psnincrease= page.locator("//div[@data-testid='Adult-testID-plus-one-cta']")
    await (psnincrease).click();
    await page.waitForSelector("//div[@data-testID='home-page-flight-cta']");
    await page.click("//div[@data-testID='home-page-flight-cta']")
    await page.waitForLoadState();
    await expect(page).toHaveTitle("SpiceJet - Flight Booking for Domestic and International, Cheap Air Tickets");
    await page.waitForSelector("//div[@class='css-1dbjc4n r-13awgt0 r-18u37iz r-b5h31w r-1ah4tor r-tvv088']");
  // expect(page.locator("//div[@class='css-1dbjc4n r-13awgt0 r-18u37iz r-b5h31w r-1ah4tor r-tvv088']")).toBeVisible();
    let rowcount=await page.$$("//div[@class='css-1dbjc4n r-13awgt0 r-18u37iz r-b5h31w r-1ah4tor r-tvv088']")
    console.log("Number of rows: " + rowcount.length);
    for (let i = 0; i < rowcount.length; i++) {
        let rowText = await rowcount[i].textContent();
        console.log(`Row ${i + 1}: ${rowText}`);
    }
})