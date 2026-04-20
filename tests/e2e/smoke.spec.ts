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
    await expect(page.getByRole("link", { name: "Open resume PDF" })).toHaveAttribute("href", "/resume.pdf");

    await expect(page.getByRole("link", { name: "Open GitHub profile" }).last()).toBeVisible();
  });

  test("[COV-11] unknown route redirects to 404 and can return home", async ({ page }) => {
    await page.goto("/#/unknown-route");

    await expect(page).toHaveURL(/#\/404$/);
    await expect(page.getByRole("heading", { name: "Page not found", level: 1 })).toBeVisible();

    await page.getByRole("link", { name: "Return to home page" }).click();
    await expect(page).toHaveURL(/#\/$/);
  });
});
