#!/usr/bin/env bash
set -euo pipefail

export CODEX_HOME="${CODEX_HOME:-$HOME/.codex}"
export PWCLI="$CODEX_HOME/skills/playwright/scripts/playwright_cli.sh"

BASE_URL="${1:-${E2E_BASE_URL:-http://127.0.0.1:${E2E_PORT:-4175}/portfolio}}"
mkdir -p output/playwright

run_pwcli() {
  local output
  local status

  set +e
  output=$("$PWCLI" "$@" 2>&1)
  status=$?
  set -e

  printf '%s\n' "$output"

  if [ "$status" -ne 0 ]; then
    echo "[flow-routes] PWCLI command failed: $*" >&2
    exit "$status"
  fi

  if printf '%s\n' "$output" | grep -Eq '(^### Error)|TimeoutError|ERR_CONNECTION_REFUSED|net::ERR_|chrome-error://chromewebdata'; then
    echo "[flow-routes] PWCLI reported runtime/browser errors: $*" >&2
    exit 1
  fi
}

echo "[flow-routes] Opening route resilience flow at ${BASE_URL}/#/"
run_pwcli open "${BASE_URL}/#/"

run_pwcli run-code '
async (page) => {
  const assert = (condition, message) => {
    if (!condition) throw new Error(message);
  };

  const waitHeading = async (name) => {
    await page.getByRole("heading", { name }).first().waitFor({ state: "visible", timeout: 10000 });
  };

  await waitHeading("Leo Chen");

  // Direct deep-link navigation checks.
  const baseWithoutHash = page.url().split("#")[0];
  await page.goto(`${baseWithoutHash}#/projects`);
  await waitHeading("Projects");

  await page.goto(`${baseWithoutHash}#/about`);
  await waitHeading("About");

  await page.goto(`${baseWithoutHash}#/contact`);
  await waitHeading("Let’s Connect");

  // Browser history behavior in HashRouter app.
  await page.goBack();
  await waitHeading("About");
  await page.goForward();
  await waitHeading("Let’s Connect");

  // Footer links presence on a non-home page.
  const footer = page.locator("footer");
  await footer.waitFor({ state: "visible", timeout: 10000 });
  await footer.getByRole("link", { name: "Open GitHub profile" }).first().waitFor({ state: "visible", timeout: 10000 });
  const footerGithub = footer.getByRole("link", { name: "Open GitHub profile" }).first();
  const footerRel = await footerGithub.getAttribute("rel");
  assert((footerRel || "").includes("noreferrer"), "Footer GitHub link should include noreferrer");

  // 404 fallback check.
  await page.goto(`${baseWithoutHash}#/totally-invalid-route`);
  await waitHeading("Page not found");

  return {
    ok: true,
    finalUrl: page.url(),
    checked: [
      "direct-projects-route",
      "direct-about-route",
      "direct-contact-route",
      "history-back-forward",
      "footer-link-safety",
      "404-fallback"
    ]
  };
}
' --raw

run_pwcli run-code 'async (page) => { await page.screenshot({ path: "output/playwright/user-flow-routes-final.png", fullPage: true }); return "routes-screenshot-saved"; }' --raw
run_pwcli close

echo "[flow-routes] Playwright route resilience flow completed."
