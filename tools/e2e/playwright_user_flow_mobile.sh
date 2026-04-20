#!/usr/bin/env bash
set -euo pipefail

export CODEX_HOME="${CODEX_HOME:-$HOME/.codex}"
export PWCLI="$CODEX_HOME/skills/playwright/scripts/playwright_cli.sh"

BASE_URL="${1:-http://127.0.0.1:4173/portfolio}"
mkdir -p output/playwright

echo "[flow-mobile] Opening mobile flow at ${BASE_URL}/#/"
"$PWCLI" open "${BASE_URL}/#/"

"$PWCLI" run-code '
async (page) => {
  const assert = (condition, message) => {
    if (!condition) throw new Error(message);
  };

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(page.url());

  const waitHeading = async (name) => {
    await page.getByRole("heading", { name }).first().waitFor({ state: "visible", timeout: 10000 });
  };

  await waitHeading("Leo Chen");

  const openMenu = async () => {
    await page.getByRole("button", { name: "Menu" }).click();
    await page.locator("header div.border-t.border-slate-200.bg-white.md\\:hidden").waitFor({ state: "visible", timeout: 10000 });
    return page.locator("header div.border-t.border-slate-200.bg-white.md\\:hidden");
  };

  let menu = await openMenu();
  await menu.getByRole("link", { name: "Projects", exact: true }).click();
  await waitHeading("Projects");
  assert(page.url().includes("#/projects"), "Expected mobile nav to route to projects");

  menu = await openMenu();
  await menu.getByRole("link", { name: "About", exact: true }).click();
  await waitHeading("About");
  assert(page.url().includes("#/about"), "Expected mobile nav to route to about");

  menu = await openMenu();
  await menu.getByRole("link", { name: "Contact", exact: true }).click();
  await waitHeading("Let’s Connect");
  assert(page.url().includes("#/contact"), "Expected mobile nav to route to contact");

  // Verify mobile menu external GitHub link exists and is safe.
  menu = await openMenu();
  const githubLink = menu.getByRole("link", { name: "Visit GitHub profile" });
  await githubLink.waitFor({ state: "visible", timeout: 10000 });
  const target = await githubLink.getAttribute("target");
  const rel = await githubLink.getAttribute("rel");
  assert(target === "_blank", "Mobile GitHub link should open in new tab");
  assert((rel || "").includes("noreferrer"), "Mobile GitHub link should include noreferrer");

  return {
    ok: true,
    finalUrl: page.url(),
    checked: [
      "mobile-menu-open",
      "mobile-projects-route",
      "mobile-about-route",
      "mobile-contact-route",
      "mobile-github-link-safety"
    ]
  };
}
' --raw

"$PWCLI" run-code 'async (page) => { await page.screenshot({ path: "output/playwright/user-flow-mobile-final.png", fullPage: true }); return "mobile-screenshot-saved"; }' --raw
"$PWCLI" close

echo "[flow-mobile] Playwright mobile user flow completed."
