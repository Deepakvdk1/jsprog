import { test } from "@playwright/test";
test("flipkart",async({browser})=>{
   let context = await browser.newContext()
   let page = await context.newPage()
   await page.goto("https://www.flipkart.com/")
   await page.locator("//div//span[text()='Login']").hover()
   let b=await page.locator("//div//span[text()='Login']/../..//..//li").allTextContents()
   console.log(b);
   

})