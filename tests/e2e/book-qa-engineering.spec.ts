import { expect, test } from "@playwright/test";

for (const locale of ["en", "zh"] as const) {
  const prefix = locale === "zh" ? "./zh/" : "./";

  for (const { width, theme } of [{ width: 320, theme: "dark" }, { width: 1440, theme: "light" }]) {
    test(`${locale} Book QA explains its two modes at ${width}px in ${theme} mode`, async ({ page }) => {
      await page.addInitScript(value => localStorage.setItem("portfolio-theme", value), theme);
      await page.setViewportSize({ width, height: 900 });
      await page.goto(`${prefix}projects?project=epubreader`);

      const drawer = page.getByRole("dialog");
      await expect(drawer).toBeFocused();
      await expect(drawer.locator("#book-qa-overview + dl dt")).toHaveCount(4);
      await expect(drawer.locator("#book-qa-overview + dl")).toContainText("RAG");
      await expect(drawer.locator("#book-qa-overview + dl")).toContainText(locale === "zh" ? "核對 AI 輸出" : "verify AI outputs");
      const workflow = drawer.locator('figure[aria-labelledby="book-qa-workflow-caption"]');
      await expect(workflow).toHaveCount(1);
      await expect(workflow).toHaveAccessibleName(locale === "zh" ? /公開示範可操作至內容檢視/ : /The public demo stops at content inspection/);
      await expect(workflow.getByRole("listitem")).toHaveCount(4);
      await expect(workflow.getByRole("heading").last()).toHaveText(locale === "zh" ? "僅限已設定後端的 API 模式" : "Configured API mode only");
      await expect(workflow).toContainText(/Chroma/);
      await expect(drawer.getByRole("heading", { name: locale === "zh" ? "工程取捨" : "Engineering decision", exact: true })).toBeAttached();

      const preview = drawer.locator("picture img");
      await preview.scrollIntoViewIfNeeded();
      await expect.poll(() => preview.evaluate(image => (image as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
      for (const href of ["https://epubreader-theta.vercel.app/", "https://github.com/LEO0331/epubreader"]) {
        await expect(drawer.locator(`a[href="${href}"]`)).toHaveCount(1);
      }
      expect(await workflow.evaluate(element => element.scrollWidth <= element.clientWidth + 1)).toBe(true);
      expect(await drawer.evaluate(element => element.scrollWidth <= element.clientWidth + 1)).toBe(true);
      await page.keyboard.press("Escape");
      await expect(drawer).toHaveCount(0);
    });
  }
}
