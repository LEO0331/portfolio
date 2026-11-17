import { expect, test } from "@playwright/test";
import { craftFocusEngineering } from "../../src/data/craftFocusEngineering";
import { passportComparisonEngineering } from "../../src/data/passportComparisonEngineering";
import { taxAutoExtractionEngineering } from "../../src/data/taxAutoExtractionEngineering";
import { projects } from "../../src/data/projects";
import { copy } from "../../src/i18n/copy";

const stories = [
  { id: "craftfocus", content: craftFocusEngineering },
  { id: "simpletaxautoextraction", content: taxAutoExtractionEngineering },
  { id: "passportcomparison", content: passportComparisonEngineering }
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

        const preview = drawer.locator("picture img");
        await expect(preview).toHaveCount(1);
        await preview.scrollIntoViewIfNeeded();
        await expect.poll(() => preview.evaluate(image => (image as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
        await expect(drawer.getByText(story.previewCaption!, { exact: true })).toBeVisible();
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
