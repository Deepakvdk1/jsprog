import { expect, test } from "@playwright/test";
test("amazonvalidate",async({browser})=>{
    let context=await browser.newContext()
    let page=await context.newPage()
    await page.goto("https://www.amazon.in/")
    let t=await page.url()
    console.log(t);
    await expect(page).toHaveURL("https://www.amazon.in/")
    await page.locator("//li//a[text()=' Electronics ']").click()    
    await page.locator("//div//span[contains(text(),'Laptops & Accessories')]").hover()
    let laptop= page.locator("//div//a[text()='Laptops']")
    await expect(laptop).toBeVisible()
    await page.locator("//div/a/span[contains(text(),'Audio')]").hover()
    let headphone=await page.locator("//div//a[text()='Headphones']")
    await expect(headphone).toBeVisible()   
})