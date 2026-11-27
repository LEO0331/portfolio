import { expect, test } from "@playwright/test";
import { craftFocusEngineering } from "../../src/data/craftFocusEngineering";
import { passportComparisonEngineering } from "../../src/data/passportComparisonEngineering";
import { publicSafetyDashboardEngineering, PUBLIC_SAFETY_SOURCE, PUBLIC_SAFETY_CI } from "../../src/data/publicSafetyDashboardEngineering";
import { taxAutoExtractionEngineering } from "../../src/data/taxAutoExtractionEngineering";
import { wanderStampEngineering } from "../../src/data/wanderStampEngineering";
import { wordpressParserEngineering } from "../../src/data/wordpressParserEngineering";
import { projects } from "../../src/data/projects";
import { copy } from "../../src/i18n/copy";

const stories = [
  { id: "craftfocus", content: craftFocusEngineering },
  { id: "simpletaxautoextraction", content: taxAutoExtractionEngineering },
  { id: "passportcomparison", content: passportComparisonEngineering },
  { id: "wordpressparser", content: wordpressParserEngineering },
  { id: "warmthfromafar", content: wanderStampEngineering },
  { id: "publicsafetydashboard", content: publicSafetyDashboardEngineering }
];

for (const { id, content } of stories) {
  const project = projects.find(project => project.id === id)!;
  for (const locale of ["en", "zh"] as const) {
    test(`${locale} ${id} presents one engineering story and one preview`, async ({ page }) => {
      const story = content[locale];
      const workflow = story.workflow!;
      const labels = copy[locale].projects;
      await page.addInitScript(() => {
        localStorage.setItem("portfolio-theme", matchMedia("(max-width: 767px)").matches ? "dark" : "light");
      });

      for (const width of [320, 640, 1440]) {
        await page.setViewportSize({ width, height: 900 });
        await page.goto(`./${locale === "zh" ? "zh/" : ""}projects?project=${project.slug}`);

        const drawer = page.getByRole("dialog");
        await expect(drawer).toBeFocused();
        await page.keyboard.press("Tab");
        await expect(drawer.getByRole("button", { name: labels.closeDetailsAria })).toBeFocused();
        const ids = await drawer.locator("[id]").evaluateAll(elements => elements.map(element => element.id));
        expect(new Set(ids).size).toBe(ids.length);
        await expect(drawer.locator(`#${id}-engineering-overview + dl dd`)).toHaveText(Object.values(story.facts));
        await expect(drawer.getByRole("heading", { name: labels.overview, exact: true })).toHaveCount(0);
        await expect(drawer.getByRole("heading", { name: labels.features, exact: true })).toHaveCount(0);

        const diagram = drawer.getByRole("figure", { name: workflow.title, exact: true });
        await expect(diagram).toHaveAccessibleDescription(workflow.caption);
        await expect(drawer.locator("figure ol")).toHaveCount(1);
        await expect(diagram.getByRole("listitem").locator("p:first-child")).toHaveText(workflow.stages.map(stage => stage.label));
        await expect(drawer.getByText(story.decision, { exact: true })).toBeVisible();
        // The arrow extends into the gap between cards, so measure the list and its text boxes.
        expect(await diagram.locator("ol, li > p").evaluateAll(elements => elements.every(element => element.scrollWidth <= element.clientWidth + 1)), `diagram at ${width}px`).toBe(true);

        if (id === "publicsafetydashboard") {
          const supplement = story.supplement!;
          const panel = drawer.getByTestId("publicsafetydashboard-engineering-supplement");
          await expect(drawer.getByRole("heading", { name: supplement.title, exact: true })).toBeVisible();
          await expect(panel.getByRole("listitem")).toHaveCount(4);
          for (const item of supplement.items) {
            await expect(panel.getByRole("link", { name: item.label, exact: true })).toHaveAttribute("href", item.href);
            expect(item.href).toContain("/blob/" + PUBLIC_SAFETY_SOURCE + "/");
            await expect(panel.getByText(item.detail, { exact: true })).toBeVisible();
          }
          await expect(panel.getByRole("link", { name: supplement.verification, exact: true })).toHaveAttribute("href", PUBLIC_SAFETY_CI);
          await expect(panel.getByText(supplement.boundary, { exact: true })).toBeVisible();
          await expect(panel.getByRole("link", { name: supplement.documentationLabel, exact: true })).toHaveAttribute("href", supplement.documentationHref);
          await expect(panel.locator('a[href*="onrender.com"]')).toHaveCount(0);
        }

        const preview = drawer.locator("picture img");
        await expect(preview).toHaveCount(1);
        await preview.scrollIntoViewIfNeeded();
        await expect.poll(() => preview.evaluate(image => (image as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
        if (story.previewCaption) await expect(drawer.getByText(story.previewCaption, { exact: true })).toBeVisible();
        for (const url of [project.demoUrl, project.repoUrl]) {
          await expect(drawer.locator(`a[href="${url}"]`)).toHaveCount(1);
        }

        expect(await drawer.evaluate(element => element.scrollWidth <= element.clientWidth + 1), `drawer at ${width}px`).toBe(true);
        await page.keyboard.press("Escape");
        await expect(drawer).toHaveCount(0);
        await expect(page).toHaveURL(/\/projects$/);
      }
    });
  }
}
