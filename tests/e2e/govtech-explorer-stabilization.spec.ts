import { test, expect } from "@playwright/test";

test("mobile Explorer DOM order agrees with visual reading order", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 900 });
  await page.goto("./govtech/explore?domain=environment&case=river-water-quality&view=list");
  await expect(page.locator(".civic-detail")).toBeVisible();
  expect(await page.locator(".civic-workspace").evaluate(element => {
    const browser = element.querySelector(".civic-browser")!, detail = element.querySelector(".civic-detail")!;
    return (browser.compareDocumentPosition(detail) & Node.DOCUMENT_POSITION_FOLLOWING) !== 0 && browser.getBoundingClientRect().top < detail.getBoundingClientRect().top;
  })).toBe(true);
});

test("closing after a view switch returns focus to the same case in the current view", async ({ page }) => {
  await page.goto("./govtech/explore?domain=environment");
  await page.locator('[data-node="river-water-quality"] .civic-island-label').click();
  await expect(page.locator(".civic-detail h2")).toBeFocused();
  await page.getByRole("button", { name: "List view", exact: true }).click();
  await expect(page.locator(".civic-list")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.locator('.civic-list [data-case="river-water-quality"] button')).toBeFocused();
});

test("history dismissal restores case focus without stealing focus from search", async ({ page }) => {
  await page.goto("./govtech/explore?domain=environment&view=list");
  const selected = page.locator('.civic-list [data-case="river-water-quality"] button');
  await selected.click();
  await expect(page.locator(".civic-detail h2")).toBeFocused();
  await page.goBack();
  await expect(selected).toBeFocused();
  await page.goForward();
  const search = page.getByRole("searchbox", { name: "Search cases", exact: true });
  await search.fill("013");
  await expect(search).toBeFocused();
  await expect(page.locator(".civic-detail")).toHaveCount(0);
});

test("keyboard domain selection focuses the new scene heading", async ({ page }) => {
  await page.goto("./govtech/explore");
  await page.locator('[data-node="environment"]').focus();
  await page.keyboard.press("Enter");
  await expect(page.locator(".civic-scene-heading h2")).toBeFocused();
});

test("mobile evidence and ordinary list links have usable touch targets", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 900 });
  await page.goto("./govtech/explore?domain=environment&case=river-water-quality&view=list");
  await expect(page.locator(".civic-evidence a")).toHaveCount(3);
  for (const link of await page.locator('.civic-list a,.civic-evidence a,.civic-evidence summary').all()) {
    expect((await link.boundingBox())!.height).toBeGreaterThanOrEqual(44);
  }
});

test("closing a deep-linked case outside the current search returns focus to the visible clear action", async ({ page }) => {
  await page.goto("./govtech/explore?case=river-water-quality&q=no-matching-case&view=list");
  await expect(page.locator(".civic-detail h2")).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("button", { name: "Clear search and filters", exact: true })).toBeFocused();
});

test("rapid view selection followed by dismissal preserves the newest URL state", async ({ page }) => {
  for (let run = 0; run < 4; run++) {
    await page.goto("./govtech/explore?domain=environment&case=river-water-quality");
    await expect(page.locator(".civic-detail h2")).toBeFocused();
    await page.getByRole("button", { name: "List view", exact: true }).click();
    await page.keyboard.press("Escape");
    await expect(page.locator('.civic-list [data-case="river-water-quality"] button')).toBeFocused();
    await expect(page).toHaveURL(/domain=environment&view=list$/);
  }
});
