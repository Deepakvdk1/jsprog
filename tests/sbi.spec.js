import { test } from "@playwright/test";
test("sbi-madhu-scenario-handlingTabs",async({browser})=>{
const context=await browser.newContext()
const page   =await context.newPage()
await page.goto("https://onlinesbi.sbi/")
let t1=await page.title()
console.log(t1);
const pagepromise1= context.waitForEvent('page')
await page.getByRole("link",{name:"Banking Forms"}).click();
const newpage1= await pagepromise1
 await newpage1.waitForLoadState();
const t2=await newpage1.title()
console.log(t2);
const  pagepromise2=context.waitForEvent('page')
await newpage1.locator("//span[text()='click here']/parent::a").click()
const newpage2= await pagepromise2
 await newpage2.waitForLoadState();
const t3=await newpage2.title()
console.log(t3);
for(let p of context.pages()){
    let title=await  p.title()
    if( title=='State Bank of India'){
        await p.bringToFront();
        console.log(await p.title());
        break;
   }
}
 })