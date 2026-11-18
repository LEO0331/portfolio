import { expect, test } from "@playwright/test";
import { projects } from "../../src/data/projects";
import { copy } from "../../src/i18n/copy";
import { getLocalizedProjects } from "../../src/utils/projectLocalization";

const storyIds = ["robotfriends", "epubreader", "craftfocus", "simpletaxautoextraction", "passportcomparison", "wordpressparser", "warmthfromafar", "publicsafetydashboard"];

for (const locale of ["en", "zh"] as const) {
  const prefix = locale === "zh" ? "zh/" : "";
  const labels = copy[locale];
  const expectedNames = getLocalizedProjects(projects, locale).filter(project => storyIds.includes(project.id)).map(project => project.name).sort();

  test(`${locale} engineering filter and drawer compose with history and keyboard focus`, async ({ page }) => {
    await page.setViewportSize({ width: locale === "zh" ? 390 : 1440, height: 900 });
    await page.addInitScript(theme => localStorage.setItem("portfolio-theme", theme), locale === "zh" ? "dark" : "light");
    await page.goto(`./${prefix}`);
    await expect(page.getByText(labels.home.featuredDescription)).toBeVisible();
    await page.getByRole("link", { name: labels.home.viewAllProjects, exact: true }).click();

    const checkbox = page.getByRole("checkbox", { name: labels.projects.engineeringStories });
    const cards = page.locator("main article");
    await expect(checkbox).not.toBeChecked();
    await checkbox.focus();
    await page.keyboard.press("Space");
    await expect(page).toHaveURL(/\?engineering=1$/);
    await expect(checkbox).toBeFocused();
    await expect(cards).toHaveCount(8);
    expect((await cards.locator("h2").allTextContents()).sort()).toEqual(expectedNames);

    const gridline = cards.filter({ has: page.getByRole("heading", { name: "Gridline", exact: true }) });
    await expect(gridline.getByRole("link", { name: locale === "zh" ? "工程案例" : "Engineering Case Study", exact: true })).toHaveCount(1);
    await expect(gridline.getByRole("button", { name: labels.projects.viewDetails })).toHaveCount(1);
    await expect(cards.getByRole("button", { name: `${labels.projects.engineeringStory} ·` })).toHaveCount(7);

    const craft = cards.filter({ has: page.getByRole("heading", { name: "CraftFocus", exact: true }) });
    const action = craft.getByRole("button", { name: `${labels.projects.engineeringStory} · CraftFocus`, exact: true });
    await action.focus();
    await page.keyboard.press("Enter");
    await expect(page).toHaveURL(/engineering=1&project=craftfocus$/);
    const drawer = page.getByRole("dialog");
    await expect(drawer).toBeFocused();
    await expect(drawer.getByRole("heading", { name: locale === "zh" ? "工程重點" : "Engineering at a glance" })).toBeVisible();
    await expect(drawer.locator('a[href="https://github.com/LEO0331/craftfocus"]')).toHaveCount(1);
    await expect(drawer.locator('a[href="https://leo0331.github.io/craftfocus/"]')).toHaveCount(1);

    await page.goBack();
    await expect(drawer).toHaveCount(0);
    await expect(checkbox).toBeChecked();
    await page.goForward();
    await expect(drawer).toBeFocused();
    await page.keyboard.press("Escape");
    await expect(page).toHaveURL(/\?engineering=1$/);
    await expect(drawer).toHaveCount(0);
    await expect(action).toBeFocused();
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(await page.evaluate(() => innerWidth));
  });

  test(`${locale} the shared filter URL composes with catalogue filters and resets`, async ({ page }) => {
    await page.goto(`./${prefix}projects?engineering=1&project=toyrobot`);
    const checkbox = page.getByRole("checkbox", { name: labels.projects.engineeringStories });
    const cards = page.locator("main article");
    await expect(page.getByRole("dialog")).toBeFocused();
    await page.keyboard.press("Escape");
    await expect(checkbox).toBeChecked();
    await page.reload();
    await expect(cards).toHaveCount(8);

    const search = page.getByPlaceholder(labels.projects.searchPlaceholder);
    await search.fill("CraftFocus");
    await page.getByRole("combobox", { name: labels.projects.category }).selectOption("mobile-product");
    await page.getByRole("combobox", { name: labels.projects.technology }).selectOption("mobile-flutter");
    const status = page.getByRole("combobox", { name: labels.projects.status });
    await status.selectOption("live");
    await expect(cards).toHaveCount(1);
    await expect(cards.first().getByRole("heading", { name: "CraftFocus", exact: true })).toBeVisible();
    await status.selectOption("archived");
    await expect(cards).toHaveCount(0);
    await page.getByRole("button", { name: labels.projects.resetFilters }).click();
    await expect(page).toHaveURL(/\/projects$/);
    await expect(checkbox).not.toBeChecked();
    await expect(search).toHaveValue("");
    await expect(cards).toHaveCount(projects.length);
    const ordinaryCard = cards.filter({ has: page.getByRole("heading", { name: getLocalizedProjects(projects, locale).find(project => project.slug === "toyrobot")!.name, exact: true }) });
    await expect(ordinaryCard.getByRole("button", { name: labels.projects.viewDetails })).toBeVisible();
  });
}
