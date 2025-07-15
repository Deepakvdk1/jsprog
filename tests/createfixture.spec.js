import { test as base } from "@playwright/test";
const test = base.extend({
    // Define a fixture to create a new page with specific permissions
    createFixture: async ({ browser }, use) => {
        const context = await browser.newContext({
        permissions: [], // Don't grant 'notifications' permission
        args: ['--disable-notifications'], // Optional: Chromium-specific
        });
        const page = await context.newPage();
        await use(page);
        await page.close();
    },
    });