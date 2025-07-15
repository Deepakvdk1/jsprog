import { test } from "@playwright/test";
test("findxpath",async({page})=>{
//    let context=await browser.newContext()
//    let page = await context.newPage()
   await page.goto('https://www.worldometers.info/world-population/')
let e= await page.locator("//*[name()='span' and @rel='current_population']")
let print=await e.textContent()
console.log(print)

//   if (e) {
//     const text = await e.textContent();
//     console.log('Element text:', text);
//   } else {
//     console.log('Element not found');
//   }
});
