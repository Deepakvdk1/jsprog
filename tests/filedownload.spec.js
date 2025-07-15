import { expect, test } from "@playwright/test";
test("file download", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/download");
  const downloadPromise = page.waitForEvent("download");
  await page.click("//a[text()='some-file.txt']");
  const download = await downloadPromise;
  const path = await download.saveAs("downloads/some-file.txt");
  expect(download.suggestedFilename()).toBe("some-file.txt");
  console.log(`File downloaded to: ${path}`);
});