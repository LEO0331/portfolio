#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "${SCRIPT_DIR}/lib.sh"

echo "[flow] Opening browser at ${BASE_URL}/#/"
run_pwcli flow open "${BASE_URL}/#/"

# Run deterministic assertions with stable selectors in one browser session.
run_pwcli flow run-code '
async (page) => {
  const expect = (condition, message) => {
    if (!condition) throw new Error(message);
  };

  const waitHeading = async (name) => {
    await page.getByRole("heading", { name }).first().waitFor({ state: "visible", timeout: 10000 });
  };

  // 1) Home
  await waitHeading("Leo Chen");
  await page.getByRole("link", { name: "View Projects" }).first().click();

  // 2) Projects
  await waitHeading("Projects");
  await expect(page.url().includes("#/projects"), "Expected #/projects route");

  const searchInput = page.getByPlaceholder("Search by name, tagline, description, category, or tech");
  await searchInput.fill("toyrobot");
  await page.getByRole("heading", { name: "ToyRobot" }).waitFor({ state: "visible", timeout: 10000 });

  await page.getByLabel("Category").selectOption("tools-utilities");
  await page.getByLabel("Technology").selectOption("web-fundamentals");
  await page.getByLabel("Status").selectOption("live");

  const cardsAfterFilter = await page.locator("article h2").count();
  await expect(cardsAfterFilter > 0, `Expected filtered cards, got ${cardsAfterFilter}`);

  await searchInput.fill("zzzz-no-match");
  await page.getByRole("heading", { name: "No projects match your current filters" }).waitFor({ state: "visible", timeout: 10000 });
  await page.getByRole("button", { name: "Reset Filters" }).click();

  // Validate external link safety on first card
  const firstCard = page.locator("article").first();
  const demo = firstCard.getByRole("link", { name: "Live Demo" });
  const repo = firstCard.getByRole("link", { name: "GitHub Repo" });
  await demo.waitFor({ state: "visible", timeout: 10000 });
  await repo.waitFor({ state: "visible", timeout: 10000 });

  const demoTarget = await demo.getAttribute("target");
  const demoRel = await demo.getAttribute("rel");
  const repoTarget = await repo.getAttribute("target");
  const repoRel = await repo.getAttribute("rel");

  await expect(demoTarget === "_blank", "Live Demo link must open in new tab");
  await expect(repoTarget === "_blank", "GitHub Repo link must open in new tab");
  await expect((demoRel || "").includes("noreferrer"), "Live Demo link must include noreferrer");
  await expect((repoRel || "").includes("noreferrer"), "GitHub Repo link must include noreferrer");

  // 3) About
  await page.getByRole("link", { name: "About", exact: true }).first().click();
  await waitHeading("About");
  await page.getByRole("link", { name: "Go to contact page" }).click();

  // 4) Contact
  await waitHeading("Let’s Connect");
  await page.getByRole("link", { name: "Open LinkedIn profile" }).first().waitFor({ state: "visible", timeout: 10000 });

  // 5) Unknown route => 404
  const baseWithoutHash = page.url().split("#")[0];
  await page.goto(`${baseWithoutHash}#/unknown-route`);
  await waitHeading("Page not found");
  await page.getByRole("link", { name: "Return to home page" }).click();
  await waitHeading("Leo Chen");

  return {
    ok: true,
    finalUrl: page.url(),
    checked: [
      "home",
      "projects-search-filter-empty-reset",
      "external-link-safety",
      "about-to-contact",
      "404-return-home"
    ]
  };
}
' --raw
run_pwcli flow run-code 'async (page) => { await page.screenshot({ path: "output/playwright/user-flow-final.png", fullPage: true }); return "screenshot-saved"; }' --raw
run_pwcli flow close

echo "[flow] Playwright user flow completed."
