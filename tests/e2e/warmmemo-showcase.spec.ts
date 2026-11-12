import { expect, test } from "@playwright/test";
import { projects } from "../../src/data/projects";
import { featuredProjectIds } from "../../src/data/featuredProjects";
import { getLocalizedProjects } from "../../src/utils/projectLocalization";

test("WarmMemo uses a curated Flutter/Firebase engineering record without changing homepage picks", () => {
  const project = projects.find(item => item.id === "warmmemo");
  expect(project).toBeDefined();
  expect(project?.slug).toBe("warmmemo");
  expect(project?.status).toBe("live");
  expect(project?.featured).toBe(false);
  expect(project?.techStack).toEqual(expect.arrayContaining(["Flutter", "Dart", "Firebase", "Cloud Firestore", "GitHub Actions"]));
  expect(project?.features.some(item => item.includes("92% LCOV"))).toBe(true);
  expect(project?.features.some(item => item.includes("session-only"))).toBe(true);
  expect(project?.demoUrl).toBe("https://leo0331.github.io/warmmemo/");
  expect(project?.repoUrl).toBe("https://github.com/LEO0331/warmmemo");
  expect(project?.caseStudyUrl).toContain("docs/system_design_architecture_tradeoffs.md");

  const zh = getLocalizedProjects(projects, "zh").find(item => item.id === "warmmemo");
  expect(zh?.features.some(item => item.includes("92% LCOV"))).toBe(true);
  expect(zh?.features.some(item => item.includes("淨資產"))).toBe(true);

  expect(featuredProjectIds).toEqual(["robotfriends", "epubreader", "craftfocus"]);
});

for (const locale of ["en", "zh"] as const) {
  test(`${locale} WarmMemo detail drawer explains finances, PDF, privacy, CI and linked evidence`, async ({ page }) => {
    if (locale === "zh") {
      await page.setViewportSize({ width: 390, height: 844 });
    }
    await page.goto(locale === "zh" ? "./zh/projects?project=warmmemo" : "./projects?project=warmmemo");
    const drawer = page.getByRole("dialog");
    await expect(drawer).toBeVisible();
    await expect(drawer.getByRole("heading", { name: locale === "zh" ? "暖備 WarmMemo" : "WarmMemo" })).toBeVisible();

    const features = locale === "zh"
      ? ["人生倒數：", "PDF 匯出", "92% LCOV"]
      : ["Final Countdown:", "PDF exports", "92% LCOV"];
    for (const fragment of features) {
      await expect(drawer.getByText(fragment, { exact: false }).first()).toBeVisible();
    }

    await expect(drawer.locator('a[href="https://leo0331.github.io/warmmemo/"]')).toHaveCount(1);
    await expect(drawer.locator('a[href="https://github.com/LEO0331/warmmemo"]')).toHaveCount(1);
    await expect(drawer.locator('a[href="https://github.com/LEO0331/warmmemo/blob/main/docs/system_design_architecture_tradeoffs.md"]')).toHaveCount(1);
    await page.keyboard.press("Escape");
    await expect(drawer).toHaveCount(0);
  });
}
