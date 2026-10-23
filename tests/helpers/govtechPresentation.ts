import assert from "node:assert/strict";
import edits from "../fixtures/govtech-presentation-edits.json" with { type: "json" };

export const presentationEdits = edits;

/** Invert only reviewed public-copy migrations; old fixtures remain untouched. */
export function restorePresentation<T>(record: T, locale: "en" | "zh"): T {
  const restored = JSON.parse(JSON.stringify(record));
  for (const edit of edits.filter((item) => item.locale === locale && item.caseId === restored.id)) {
    const segments = edit.path.split("/");
    const field = segments.pop()!;
    const parent = segments.reduce((value, segment) => value[segment], restored);
    assert.deepStrictEqual(parent[field], edit.newValue, `Unreviewed presentation drift: ${locale}/${restored.id}/${edit.path}`);
    parent[field] = JSON.parse(JSON.stringify(edit.oldValue));
  }
  return restored;
}

/** Detailed record assertions expand provenance through the public keyboard UI. */
export async function openTechnicalEvidence(page: import("@playwright/test").Page) {
  await page.locator("details[data-source-identifiers]").waitFor({ state: "attached" });
  for (const detail of await page.locator("details[data-technical]").all()) {
    if (await detail.getAttribute("open") === null) {
      await detail.locator(":scope > summary").focus();
      await page.keyboard.press("Enter");
      assert.notEqual(await detail.getAttribute("open"), null);
    }
  }
}
