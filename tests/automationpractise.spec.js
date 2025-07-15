import { test,expect } from "@playwright/test";
test("slider test",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.waitForLoadState();
    await page.locator("//span[@class='ui-slider-handle ui-corner-all ui-state-default'][1]").waitFor({ state: 'visible' });
    await page.locator("//span[@class='ui-slider-handle ui-corner-all ui-state-default'][1]").scrollIntoViewIfNeeded();
    const slide =await page.locator("//span[@class='ui-slider-handle ui-corner-all ui-state-default'][1]").boundingBox();
    console.log(slide.x, slide.y, slide.width, slide.height);
    
    const x = slide.x + slide.width / 2; // Center of the slider handle
    const y = slide.y + slide.height / 2; // Center of the slider handle
    console.log(x, y);
    
    await page.mouse.move(x, y);
    await page.mouse.down();
    await page.mouse.move(x -100, y); // Move the slider handle to the right
    await page.mouse.up();
})