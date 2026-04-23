import { expect, test } from "@playwright/test";

test.describe("Portfolio smoke", () => {
  test("[COV-01] home renders hero and primary CTAs", async ({ page }) => {
    await page.goto("/#/");

    await expect(page.getByRole("heading", { name: "Leo Chen", level: 1 })).toBeVisible();
    await expect(page.getByRole("link", { name: "View Projects" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Contact Leo Chen" }).first()).toBeVisible();
    await expect(page.getByRole("heading", { name: "Featured Projects", level: 2 })).toBeVisible();
  });

  test("[COV-02] desktop navbar route navigation works", async ({ page }) => {
    await page.goto("/#/");

    await page.getByRole("link", { name: "Projects", exact: true }).first().click();
    await expect(page).toHaveURL(/#\/projects$/);
    await expect(page.getByRole("heading", { name: "Projects", level: 1 })).toBeVisible();

    await page.getByRole("link", { name: "About", exact: true }).first().click();
    await expect(page).toHaveURL(/#\/about$/);
    await expect(page.getByRole("heading", { name: "About", level: 1 })).toBeVisible();

    await page.getByRole("link", { name: "Contact", exact: true }).first().click();
    await expect(page).toHaveURL(/#\/contact$/);
    await expect(page.getByRole("heading", { name: "Let’s Connect", level: 1 })).toBeVisible();
  });

  test("[COV-03] mobile menu opens and navigates routes", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/#/");

    await page.getByRole("button", { name: "Menu" }).click();
    const mobileMenu = page.locator("header div.border-t.border-slate-200.bg-white.md\\:hidden");
    await expect(mobileMenu).toBeVisible();
    await mobileMenu.getByRole("link", { name: "Projects", exact: true }).click();
    await expect(page).toHaveURL(/#\/projects$/);

    await page.getByRole("button", { name: "Menu" }).click();
    await expect(mobileMenu).toBeVisible();
    await mobileMenu.getByRole("link", { name: "About", exact: true }).click();
    await expect(page).toHaveURL(/#\/about$/);
  });

  test("[COV-04] projects search narrows results", async ({ page }) => {
    await page.goto("/#/projects");

    await page.getByPlaceholder("Search by name, tagline, description, category, or tech").fill("toyrobot");
    await expect(page.getByRole("heading", { name: "ToyRobot", level: 3 })).toBeVisible();
    await expect(page.getByRole("heading", { name: "AssistantHub", level: 3 })).toHaveCount(0);
  });

  test("[COV-05] projects filters by category, technology, and status", async ({ page }) => {
    await page.goto("/#/projects");

    await page.getByLabel("Category").selectOption("Simulation");
    await page.getByLabel("Technology").selectOption("JavaScript");
    await page.getByLabel("Status").selectOption("live");

    await expect(page.getByRole("heading", { name: "ToyRobot", level: 3 })).toBeVisible();
    await expect(page.locator("article h3")).toHaveCount(1);
  });

  test("[COV-06] empty state appears and reset restores results", async ({ page }) => {
    await page.goto("/#/projects");

    const cardHeadings = page.locator("article h3");
    const initialCount = await cardHeadings.count();
    expect(initialCount).toBeGreaterThan(5);

    await page.getByPlaceholder("Search by name, tagline, description, category, or tech").fill("zzzz-no-match");
    await expect(page.getByRole("heading", { name: "No projects match your current filters" })).toBeVisible();

    await page.getByRole("button", { name: "Reset Filters" }).click();
    await expect(cardHeadings).toHaveCount(initialCount);
  });

  test("[COV-07] project highlights counters are visible", async ({ page }) => {
    await page.goto("/#/projects");

    const highlights = page.locator("div.grid.grid-cols-1.gap-3.sm\\:grid-cols-3");
    await expect(highlights.getByText("Visible", { exact: true })).toBeVisible();
    await expect(highlights.getByText("Featured", { exact: true })).toBeVisible();
    await expect(highlights.getByText("Live", { exact: true })).toBeVisible();

    const numericValues = await highlights.locator("p.text-3xl").allTextContents();
    expect(numericValues.length).toBe(3);
    expect(numericValues.every((v) => /^\d+$/.test(v.trim()))).toBeTruthy();
  });

  test("[COV-08] project card external links include safe attributes", async ({ page }) => {
    await page.goto("/#/projects");

    const firstCard = page.locator("article").first();
    const demoLink = firstCard.getByRole("link", { name: "Live Demo" });
    const repoLink = firstCard.getByRole("link", { name: "GitHub Repo" });

    await expect(demoLink).toBeVisible();
    await expect(repoLink).toBeVisible();
    await expect(demoLink).toHaveAttribute("target", "_blank");
    await expect(repoLink).toHaveAttribute("target", "_blank");
    await expect(demoLink).toHaveAttribute("rel", /noreferrer/);
    await expect(repoLink).toHaveAttribute("rel", /noreferrer/);
  });

  test("[COV-09] about page content and CTA route to contact", async ({ page }) => {
    await page.goto("/#/about");

    await expect(page.getByRole("heading", { name: "About", level: 1 })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Strengths", level: 2 })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Domains of Interest", level: 2 })).toBeVisible();

    await page.getByRole("link", { name: "Go to contact page" }).click();
    await expect(page).toHaveURL(/#\/contact$/);
  });

  test("[COV-10] contact page key links and footer links are present", async ({ page }) => {
    await page.goto("/#/contact");

    await expect(page.getByRole("heading", { name: "Let’s Connect", level: 1 })).toBeVisible();
    await expect(page.getByRole("link", { name: "Open GitHub profile" }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: "Open LinkedIn profile" }).first()).toBeVisible();

    await expect(page.getByRole("link", { name: "Open GitHub profile" }).last()).toBeVisible();
  });

  test("[COV-11] unknown route redirects to 404 and can return home", async ({ page }) => {
    await page.goto("/#/unknown-route");

    await expect(page).toHaveURL(/#\/404$/);
    await expect(page.getByRole("heading", { name: "Page not found", level: 1 })).toBeVisible();

    await page.getByRole("link", { name: "Return to home page" }).click();
    await expect(page).toHaveURL(/#\/$/);
  });

  test("[COV-12] project detail drawer opens and closes with URL sync", async ({ page }) => {
    await page.goto("/#/projects");

    await page.getByRole("button", { name: "View details for ToyRobot" }).click();
    const drawer = page.getByRole("dialog", { name: "Project details for ToyRobot" });
    await expect(drawer).toBeVisible();
    await expect(page).toHaveURL(/#\/projects\?project=toyrobot$/);
    await expect(drawer.getByText("Role:")).toBeVisible();
    await expect(drawer.getByText("Tech Stack")).toBeVisible();

    await page.getByRole("button", { name: "Close project details" }).click();
    await expect(drawer).toHaveCount(0);
    await expect(page).toHaveURL(/#\/projects$/);
  });

  test("[COV-13] detail drawer supports Escape and backdrop close", async ({ page }) => {
    await page.goto("/#/projects");

    await page.getByRole("button", { name: "View details for AssistantHub" }).click();
    await expect(page.getByRole("dialog", { name: "Project details for AssistantHub" })).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(page.getByRole("dialog", { name: "Project details for AssistantHub" })).toHaveCount(0);

    await page.getByRole("button", { name: "View details for AssistantHub" }).click();
    const reopenedDrawer = page.getByRole("dialog", { name: "Project details for AssistantHub" });
    await expect(reopenedDrawer).toBeVisible();
    await page.getByTestId("project-detail-overlay").evaluate((element) => {
      (element as HTMLElement).click();
    });
    await expect(page.getByRole("dialog", { name: "Project details for AssistantHub" })).toHaveCount(0);
  });

  test("[COV-14] deep-link query opens project drawer on initial load", async ({ page }) => {
    await page.goto("/#/projects?project=toyrobot");
    await expect(page.getByRole("dialog", { name: "Project details for ToyRobot" })).toBeVisible();
  });

  test("[COV-15] mobile drawer opens and preserves filter/search state", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/#/projects");

    const searchInput = page.getByPlaceholder("Search by name, tagline, description, category, or tech");
    await searchInput.fill("toyrobot");
    await expect(page.getByRole("heading", { name: "ToyRobot", level: 3 })).toBeVisible();

    await page.getByRole("button", { name: "View details for ToyRobot" }).click();
    const drawer = page.getByRole("dialog", { name: "Project details for ToyRobot" });
    await expect(drawer).toBeVisible();
    await expect(page.getByRole("button", { name: "Close project details" })).toBeVisible();

    const bodyOverflow = await page.evaluate(() => document.body.style.overflow);
    expect(bodyOverflow).toBe("hidden");

    await page.keyboard.press("Escape");
    await expect(drawer).toHaveCount(0);
    await expect(searchInput).toHaveValue("toyrobot");
  });

  test("[COV-16] traditional chinese route renders localized project content", async ({ page }) => {
    await page.goto("/#/zh/projects");

    await expect(page).toHaveURL(/#\/zh\/projects$/);
    await expect(page.getByRole("heading", { name: "專案", level: 1 })).toBeVisible();
    await expect(page.getByPlaceholder("可搜尋名稱、標語、描述、分類或技術")).toBeVisible();
    await expect(page.getByText("剩食媒合概念，支援就近預約取餐")).toBeVisible();
  });
});
