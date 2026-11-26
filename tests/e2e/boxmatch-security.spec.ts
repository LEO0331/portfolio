import { expect, test } from "@playwright/test";

for (const locale of ["en", "zh"] as const) {
  test(`${locale} BoxMatch presents accessible security architecture and current CI evidence`, async ({ page }) => {
    const zh = locale === "zh";
    for (const width of [320, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(`./${zh ? "zh/" : ""}projects?project=boxmatch`);
      const drawer = page.getByRole("dialog");
      await expect(drawer).toBeVisible();
      const diagram = drawer.getByRole("figure", { name: zh ? "整體資安架構" : "Integrated security architecture", exact: true });
      await expect(diagram).toBeVisible();
      await expect(diagram.getByText(zh ? "安全防護" : "Security enforcement", { exact: true })).toBeVisible();
      await expect(diagram.getByText(zh ? "被動觀測" : "Passive observation", { exact: true })).toBeVisible();
      await expect(diagram.getByText(zh ? "被動式安全探測情資" : "Passive Security Probe Intelligence", { exact: true })).toBeVisible();
      await expect(diagram.getByRole("link", { name: zh ? "完整資安架構圖" : "Full security architecture" })).toHaveAttribute("href", "https://github.com/LEO0331/boxmatch/blob/main/docs/SECURITY_ARCHITECTURE.md");
      await expect(diagram.getByRole("link", { name: zh ? "已驗證 PR 檢查" : "Verified PR checks" })).toHaveAttribute("href", "https://github.com/LEO0331/boxmatch/pull/59/checks");
      await expect(drawer.getByText(/569.*88\.23%/)).toBeVisible();
      await expect(drawer.getByText(/546 tests|89\.32%/)).toHaveCount(0);
      expect(await diagram.locator("div, p").evaluateAll(elements => elements.every(element => element.scrollWidth <= element.clientWidth + 1))).toBe(true);
      expect(await drawer.evaluate(element => element.scrollWidth <= element.clientWidth + 1)).toBe(true);
      await page.keyboard.press("Escape");
      await expect(drawer).toHaveCount(0);
    }
  });
}
