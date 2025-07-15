import { test,expect } from "@playwright/test";
test("flipkart flight search",async({browser})=>{
     const context = await browser.newContext({
        permissions: [], // Don't grant 'notifications' permission
        args: ['--disable-notifications'], // Optional: Chromium-specific
        });
    const page=await context.newPage()
    await page.goto("https://www.flipkart.com/travel/flights?param=DTNavIcon&fm=neo%2Fmerchandising&iid=M_ef3fc1f7-50bc-45de-81e0-71b469040e5e_1_372UD5BXDFYS_MC.0LS0RGMNPXTP&otracker=hp_rich_navigation_7_1.navigationCard.RICH_NAVIGATION_Flight%2BBookings_0LS0RGMNPXTP&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_7_L0_view-all&cid=0LS0RGMNPXTP");
    await page.waitForLoadState();
    expect(page.locator("//div[text()='Round Trip']")).toBeVisible();
    await page.locator("//div[text()='Round Trip']").click();
    await page.locator("//input[@class='v2VFa- rLGgLC g9KxuM smJZop ZjUTQC z2D4XG']").fill("Bengaluru");
    const fromdst = page.getByText('Bengaluru, INBLR').filter({ has: page.locator('div:visible') });
    await fromdst.first().click();
    await page.locator("//input[@class='v2VFa- rLGgLC g9KxuM smJZop G+rzy6 z2D4XG']").fill("Delhi");
    const Todst = page.getByText('New Delhi, INDEL').filter({ has: page.locator('div:visible') });
    await Todst.first().click();
    await page.locator("//tr[@class='iyzVqW']//button[@class='R0r93E']").last().click();
    await page.locator("//div[@class='_1w7bXX' and text()='August 2025']/../../../..//button[@class='pl8ttv' and text()='10']").click();
    await page.locator("//div[@class='_1w7bXX' and text()='August 2025']/../../../..//button[@class='pl8ttv' and text()='20']").click();
    await page.locator("//input[@class='v2VFa- n-5ycO z2D4XG']").click(); //travellers
    await page.locator("//div[text()='Premium Economy']").click(); //premium economy
    await page.locator("//button[text()='Done']").click(); //done button
    await page.locator("//button[@class='QqFHMw sgUmTV M5XAsp']").click(); //search flights
    await page.waitForLoadState();
    //await page.locator("(//section[@class='LjsRty']//div[text()='Onward Price']/following::div[@class='PYKUdo'])[2]").dragTo(page.locator("(//div[@class='C+PahU']//div[@style='width: 0px;'])[1]"), { force: true });
   // const slider=await page.locator("//div[@class='iToJ4v Kaqq1s']/div[@class='PYKUdo']").first().boundingBox();
   await page.locator("//*[@id='container']//section[5]/div[2]/div[1]/div[1]/div[@class='iToJ4v Kaqq1s']").scrollIntoViewIfNeeded();
    const slide=await page.locator("//*[@id='container']//section[5]/div[2]/div[1]/div[1]/div[@class='iToJ4v Kaqq1s']").boundingBox();
    await page.waitForTimeout(3000);
    await page.mouse.move((slide.x + slide.width) / 2, (slide.y + slide.height) / 2);
    await page.waitForTimeout(3000);
    await page.mouse.down();
    await page.waitForTimeout(3000);
    await page.mouse.move(slide.x +350, (slide.y + slide.height) / 2);
    await page.waitForTimeout(3000);
    await page.mouse.up();
    await page.waitForTimeout(5000); 
    await page.locator("//span[text()='Air India | AI-2654']/ancestor::div[@class='hBcZZV']").click();//select boarding flight 
    const frwdflight_amount= await page.locator("//span[text()='Air India | AI-2654']/ancestor::div[@class='HZN1Jt _2ZvRQs']//div[@class='_44X-Hx']").textContent();
    await page.locator("//span[text()='Air India | AI-2819']//ancestor::div[@class='hBcZZV']").click();//select return flight
    const returnFlight_amount= await page.locator("//span[text()='Air India | AI-2819']//ancestor::div[@class='HZN1Jt _2ZvRQs']//div[@class='_44X-Hx']").textContent();
    console.log(frwdflight_amount);
    console.log(returnFlight_amount);
    const famount= parseFloat(frwdflight_amount.replace(/[,₹]/g,''))
    const ramount =parseFloat(returnFlight_amount.replace(/[,₹]/g,''))
    console.log(famount);   
    console.log(ramount);
const total=await page.locator("//span[@class='Wazafo']").textContent();
const tamont = parseFloat(total.replace(/[,₹]/g,''))
console.log(tamont);
    
expect(tamont).toBe(famount + ramount);
    console.log("Flight search and selection completed successfully.");
})