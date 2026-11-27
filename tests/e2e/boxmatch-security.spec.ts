import { expect, test } from "@playwright/test";
import { isPullRequestHref, workflowPattern } from "../../tools/govtech-public-audit.mjs";

for (const locale of ["en", "zh"] as const) {
  test(`${locale} BoxMatch presents accessible security architecture and recruiter-focused quality practices`, async ({ page }) => {
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
      await expect(diagram.getByRole("link")).toHaveCount(0);
      await expect(drawer.locator("#boxmatch-engineering-overview + dl dd")).toHaveCount(4);
      await expect(diagram).toContainText(zh ? "自動化驗證" : "Automated backend");
      await expect(drawer).toContainText(zh ? "冪等" : "Idempotent");
      await expect(drawer).toContainText(zh ? "未經 Express 的請求不在觀測範圍" : "requests that bypass Express are not observed");
      await expect(drawer.locator('a[href="https://github.com/LEO0331/boxmatch"]')).toHaveCount(1);
      await expect(drawer.locator('a[href="https://leo0331.github.io/boxmatch/"]')).toHaveCount(1);
      await expect(drawer.locator("picture img")).toHaveCount(1);
      expect(workflowPattern.test(await drawer.innerText())).toBe(false);
      const hrefs = await drawer.locator("a[href]").evaluateAll(links => links.map(link => link.getAttribute("href")!));
      expect(hrefs.filter(href => isPullRequestHref(href))).toEqual([]);
      await expect(drawer).not.toContainText(/569|546 tests|88\.23%|89\.32%|2026 年 11 月 26 日驗證/);
      expect(hrefs.filter(href => href.includes("/actions/runs/") || href.includes("/blob/"))).toEqual([]);
      expect(await diagram.locator("div, p").evaluateAll(elements => elements.every(element => element.scrollWidth <= element.clientWidth + 1))).toBe(true);
      expect(await drawer.evaluate(element => element.scrollWidth <= element.clientWidth + 1)).toBe(true);
      await page.keyboard.press("Escape");
      await expect(drawer).toHaveCount(0);
    }
  });
}
