import { test } from "@playwright/test";
test("booking",async({page})=>{
   // let context=await browser.newContext()
   // let page=await context.newPage()
    await page.goto("https://www.goibibo.com/")
    await page.on("dialog",async({dialog})=>{
        await dialog.reject()
    })
})