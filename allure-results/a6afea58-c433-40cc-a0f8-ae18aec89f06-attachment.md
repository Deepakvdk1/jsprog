# Test info

- Name: flipkart flight search
- Location: C:\Users\deepa\OneDrive\Desktop\JSprog\tests\flipkartflight.spec.js:2:5

# Error details

```
Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://www.flipkart.com/travel/flights?param=DTNavIcon&fm=neo%2Fmerchandising&iid=M_ef3fc1f7-50bc-45de-81e0-71b469040e5e_1_372UD5BXDFYS_MC.0LS0RGMNPXTP&otracker=hp_rich_navigation_7_1.navigationCard.RICH_NAVIGATION_Flight%2BBookings_0LS0RGMNPXTP&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_7_L0_view-all&cid=0LS0RGMNPXTP
Call log:
  - navigating to "https://www.flipkart.com/travel/flights?param=DTNavIcon&fm=neo%2Fmerchandising&iid=M_ef3fc1f7-50bc-45de-81e0-71b469040e5e_1_372UD5BXDFYS_MC.0LS0RGMNPXTP&otracker=hp_rich_navigation_7_1.navigationCard.RICH_NAVIGATION_Flight%2BBookings_0LS0RGMNPXTP&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_7_L0_view-all&cid=0LS0RGMNPXTP", waiting until "load"

    at C:\Users\deepa\OneDrive\Desktop\JSprog\tests\flipkartflight.spec.js:8:16
```

# Page snapshot

```yaml
- heading "No internet" [level=1]
- paragraph: "Try:"
- list:
  - listitem: Checking the network cables, modem, and router
  - listitem: Reconnecting to Wi-Fi
  - listitem:
    - link "Running Windows Network Diagnostics":
      - /url: javascript:diagnoseErrors()
- text: ERR_INTERNET_DISCONNECTED
- application "Dino game, press space to play"
```

# Test source

```ts
   1 | import { test,expect } from "@playwright/test";
   2 | test("flipkart flight search",async({browser})=>{
   3 |      const context = await browser.newContext({
   4 |         permissions: [], // Don't grant 'notifications' permission
   5 |         args: ['--disable-notifications'], // Optional: Chromium-specific
   6 |         });
   7 |     const page=await context.newPage()
>  8 |     await page.goto("https://www.flipkart.com/travel/flights?param=DTNavIcon&fm=neo%2Fmerchandising&iid=M_ef3fc1f7-50bc-45de-81e0-71b469040e5e_1_372UD5BXDFYS_MC.0LS0RGMNPXTP&otracker=hp_rich_navigation_7_1.navigationCard.RICH_NAVIGATION_Flight%2BBookings_0LS0RGMNPXTP&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_7_L0_view-all&cid=0LS0RGMNPXTP");
     |                ^ Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://www.flipkart.com/travel/flights?param=DTNavIcon&fm=neo%2Fmerchandising&iid=M_ef3fc1f7-50bc-45de-81e0-71b469040e5e_1_372UD5BXDFYS_MC.0LS0RGMNPXTP&otracker=hp_rich_navigation_7_1.navigationCard.RICH_NAVIGATION_Flight%2BBookings_0LS0RGMNPXTP&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_7_L0_view-all&cid=0LS0RGMNPXTP
   9 |     await page.waitForLoadState();
  10 |     expect(page.locator("//div[text()='Round Trip']")).toBeVisible();
  11 |     await page.locator("//div[text()='Round Trip']").click();
  12 |     await page.locator("//input[@class='v2VFa- rLGgLC g9KxuM smJZop ZjUTQC z2D4XG']").fill("Bengaluru");
  13 |     const fromdst = page.getByText('Bengaluru, INBLR').filter({ has: page.locator('div:visible') });
  14 |     await fromdst.first().click();
  15 |     await page.locator("//input[@class='v2VFa- rLGgLC g9KxuM smJZop G+rzy6 z2D4XG']").fill("Delhi");
  16 |     const Todst = page.getByText('New Delhi, INDEL').filter({ has: page.locator('div:visible') });
  17 |     await Todst.first().click();
  18 |     await page.locator("//tr[@class='iyzVqW']//button[@class='R0r93E']").last().click();
  19 |     await page.locator("//div[@class='_1w7bXX' and text()='August 2025']/../../../..//button[@class='pl8ttv' and text()='10']").click();
  20 |     await page.locator("//div[@class='_1w7bXX' and text()='August 2025']/../../../..//button[@class='pl8ttv' and text()='20']").click();
  21 |     await page.locator("//input[@class='v2VFa- n-5ycO z2D4XG']").click(); //travellers
  22 |     await page.locator("//div[text()='Premium Economy']").click(); //premium economy
  23 |     await page.locator("//button[text()='Done']").click(); //done button
  24 |     await page.locator("//button[@class='QqFHMw sgUmTV M5XAsp']").click(); //search flights
  25 |     await page.waitForLoadState();
  26 |     //await page.locator("(//section[@class='LjsRty']//div[text()='Onward Price']/following::div[@class='PYKUdo'])[2]").dragTo(page.locator("(//div[@class='C+PahU']//div[@style='width: 0px;'])[1]"), { force: true });
  27 |     const slider=await page.locator("//div[@class='iToJ4v Kaqq1s']/div[@class='PYKUdo']").first().boundingBox();
  28 |     const slide=await page.locator("//div[@class='hZmZbn']").first().boundingBox();
  29 |     await page.mouse.move(slide.x + slide.width / 2, slide.y + slide.height / 2);
  30 |     await page.mouse.down();
  31 |     await page.mouse.move(slide.x +  100, slide.y + slide.height / 2);
  32 |     await page.mouse.up();
  33 |     await page.waitForTimeout(5000); 
  34 |     await page.locator("//span[text()='Air India | AI-2654']/ancestor::div[@class='hBcZZV']").click();//select boarding flight 
  35 |     const frwdflight_amount= await page.locator("//span[text()='Air India | AI-2654']/ancestor::div[@class='HZN1Jt _2ZvRQs']//div[@class='_44X-Hx']").textContent();
  36 |     await page.locator("//span[text()='Air India | AI-2819']//ancestor::div[@class='hBcZZV']").click();//select return flight
  37 |     const returnFlight_amount= await page.locator("//span[text()='Air India | AI-2819']//ancestor::div[@class='HZN1Jt _2ZvRQs']//div[@class='_44X-Hx']").textContent();
  38 |     console.log(frwdflight_amount);
  39 |     console.log(returnFlight_amount);
  40 |     const famount= parseFloat(frwdflight_amount.replace(/[,₹]/g,''))
  41 |     const ramount =parseFloat(returnFlight_amount.replace(/[,₹]/g,''))
  42 |     console.log(famount);   
  43 |     console.log(ramount);
  44 | const total=await page.locator("//span[@class='Wazafo']").textContent();
  45 | const tamont = parseFloat(total.replace(/[,₹]/g,''))
  46 | console.log(tamont);
  47 |     
  48 | expect(tamont).toBe(famount + ramount);
  49 |     console.log("Flight search and selection completed successfully.");
  50 | })
```