import { test, expect } from "@playwright/test";
const visiblePattern = (text: string) => new RegExp(text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
for (const locale of ["en", "zh"] as const) {
  test(`${locale} contact links retain their visible text in the accessible name`, async ({ page }) => {
    await page.route("https://fonts.googleapis.com/**", route => route.abort());
    const prefix = locale === "zh" ? "zh/" : "";
    for (const path of ["", "about", "contact"]) {
      await page.goto(`./${prefix}${path}`);
      await expect(page.locator("h1")).toBeVisible();
      const links = path === "contact" ? page.locator("main li a") : page.locator(`main a[href$="/${prefix}contact"]`);
      expect(await links.count()).toBeGreaterThan(0);
      for (const link of await links.all()) {
        const visible = (await link.innerText()).trim();
        expect(visible.length).toBeGreaterThan(0);
        await expect(link).toHaveAccessibleName(visiblePattern(visible));
        if (locale === "zh") expect(await link.getAttribute("aria-label")).not.toMatch(/Open personal|Open GitHub|Open LinkedIn|Go to contact/);
      }
      if (path === "") {
        for (const link of await page.locator('footer a,header a[href="https://github.com/LEO0331"]').filter({ visible: true }).all()) {
          await expect(link).toHaveAccessibleName(visiblePattern((await link.innerText()).trim()));
          if (locale === "zh") expect(await link.getAttribute("aria-label")).not.toMatch(/Open |Visit /);
        }
        if (locale === "zh") await expect(page.getByRole("contentinfo").getByRole("link", { name: "開啟個人網站", exact: true })).toHaveText("個人網站");
      }
    }
  });
}
