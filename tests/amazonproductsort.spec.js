import { test,expect} from "@playwright/test";

test("amazon product sort",async({browser})=>{
    const context = await browser.newContext({
        permissions: [], // Don't grant 'notifications' permission
        args: ['--disable-notifications'], // Optional: Chromium-specific
    });
    const page = await context.newPage();
    await page.goto("https://www.amazon.in");
    await page.fill("//input[@aria-label='Search Amazon.in']", "samsung galaxy s24 ultra");
    await page.waitForLoadState()
    let option= 4;
    await page.locator(`//div[@id='sac-suggestion-row-${option}']`).click();
    await page.waitForLoadState();
    expect(page.locator("//span[@class='a-color-state a-text-bold']")).toHaveText("samsung galaxy s24 ultra");
    await page.locator("//span[text()='256 GB']/..//div").click();
    expect(page.locator("//span[text()='256 GB']/..//div")).toBeChecked();
    //wait expect(true).toBe(false); // Fails intentionally
});

