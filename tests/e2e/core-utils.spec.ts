import { expect, test } from "@playwright/test";
import type { Project } from "../../src/types/project";
import { getLocalizedProjects } from "../../src/utils/projectLocalization";
import { projects as portfolioProjects } from "../../src/data/projects";
import githubPins from "../../src/data/github-pins.json" with { type: "json" };
import { featuredProjectIds } from "../../src/data/featuredProjects";
import {
  extractUniqueCategories,
  extractUniqueTechnologies,
  filterProjects,
  getFeaturedProjects,
  sortProjects
} from "../../src/utils/projectUtils";
import { toSafeExternalHref } from "../../src/utils/urlSafety";

function project(overrides: Partial<Project>): Project {
  return {
    id: "project",
    slug: "project",
    name: "Project",
    tagline: "Project tagline",
    shortDescription: "Project description",
    fullDescription: "Project full description",
    role: "Developer",
    teamType: "solo",
    techStack: ["TypeScript"],
    categories: ["Web App"],
    features: ["Feature"],
    image: "/src/assets/images/projects/project.png",
    status: "live",
    featured: false,
    ...overrides
  };
}

test("AssistantHub catalogue accurately separates the public demo and private hiring API in both languages", () => {
  const english = portfolioProjects.find(item => item.id === "assistanthub");
  expect(english).toBeDefined();
  expect(english?.slug).toBe("assistanthub");
  expect(english?.demoUrl).toBe("https://leo0331.github.io/AssistantHub/");
  expect(english?.repoUrl).toBe("https://github.com/LEO0331/AssistantHub");
  expect(english?.status).toBe("live");
  expect(english?.image).toBe("/src/assets/images/projects/assistanthub.png");
  expect(english?.featured).toBe(false);
  expect(english?.techStack).toEqual(expect.arrayContaining(["React", "Node.js", "Express", "MySQL", "Sequelize"]));
  expect(english?.fullDescription).toMatch(/public GitHub Pages site is an offline/i);
  expect(english?.fullDescription).toMatch(/loopback-only/);
  expect(english?.fullDescription).toMatch(/not publicly deployed/);
  expect(english?.features?.join(" ")).toMatch(/idempotency|idempotent/i);

  const chinese = getLocalizedProjects(portfolioProjects, "zh").find(item => item.id === "assistanthub");
  expect(chinese).toBeDefined();
  expect(chinese?.name).toBe("AssistantHub 人才庫");
  expect(chinese?.fullDescription).toMatch(/離線/);
  expect(chinese?.fullDescription).toMatch(/僅綁定本機位址/);
  expect(chinese?.fullDescription).toMatch(/後端並未公開部署/);
  expect(chinese?.features?.join(" ")).toMatch(/冪等/);

  const filter = {
    searchTerm: "assistanthub",
    category: "full-stack-web",
    technology: "backend-data",
    status: "live" as const
  };
  expect(filterProjects(portfolioProjects, filter).map(item => item.id)).toContain("assistanthub");
  expect(filterProjects(getLocalizedProjects(portfolioProjects, "zh"), filter).map(item => item.id)).toContain("assistanthub");
});

test("sortProjects prioritizes featured, then status, then name", () => {
  const result = sortProjects([
    project({ id: "archived", name: "A", status: "archived" }),
    project({ id: "live", name: "B", status: "live" }),
    project({ id: "featured", name: "Z", status: "archived", featured: true })
  ]);

  expect(result.map((item) => item.id)).toEqual(["featured", "live", "archived"]);
});

test("filterProjects combines grouped category, technology, status, and normalized search", () => {
  const dashboard = project({
    id: "dashboard",
    name: "Taipei Dashboard",
    categories: ["Dashboard", "Civic Tech"],
    techStack: ["React", "TypeScript"],
    status: "live"
  });
  const archivedTool = project({
    id: "tool",
    name: "Parser Tool",
    categories: ["Utility"],
    techStack: ["JavaScript"],
    status: "archived"
  });

  const result = filterProjects([dashboard, archivedTool], {
    searchTerm: "  TAIPEI ",
    category: "full-stack-web",
    technology: "react-typescript",
    status: "live"
  });

  expect(result.map((item) => item.id)).toEqual(["dashboard"]);
});

test("filter options use Traditional Chinese labels for localized project data", () => {
  const localized = [
    project({ categories: ["資料視覺化"], techStack: ["TypeScript"] })
  ];

  expect(extractUniqueCategories(localized)).toContainEqual({ value: "data-analytics", label: "資料與分析" });
  expect(extractUniqueTechnologies(localized)).toContainEqual({ value: "react-typescript", label: "React／TypeScript" });
});

test("getFeaturedProjects fills a short featured list without duplicating projects", () => {
  const projects = [
    project({ id: "featured", name: "Featured", featured: true }),
    project({ id: "second", name: "Second" }),
    project({ id: "third", name: "Third" })
  ];

  expect(getFeaturedProjects(projects, 3, 6).map((item) => item.id)).toEqual(["featured", "second", "third"]);
});

test("saved GitHub pins select the same projects in pin order for both languages", () => {
  for (const locale of ["en", "zh"] as const) {
    const selected = getFeaturedProjects(getLocalizedProjects(portfolioProjects, locale), 3, 6, githubPins.projectIds);
    expect(selected.map((item) => item.id)).toEqual(githubPins.projectIds);
    expect(selected.every((item) => item.featured)).toBe(true);
  }
  expect(portfolioProjects.filter((item) => item.featured).map((item) => item.id).sort()).toEqual([...githubPins.projectIds].sort());
  const list = [project({ id: "first", name: "Z" }), project({ id: "second", name: "A" })];
  expect(getFeaturedProjects(list, 3, 6, ["first", "missing", "first", "second"]).map((item) => item.id)).toEqual(["first", "second"]);
  expect(getFeaturedProjects(list, 3, 6, [])).toEqual([]);
});

test("homepage renders the curated recruiter-facing projects in the same order in both languages", async ({ page }) => {
  for (const locale of ["en", "zh"] as const) {
    const localized = getLocalizedProjects(portfolioProjects, locale);
    const expected = featuredProjectIds.map((id) => localized.find((project) => project.id === id)!.name);
    await page.goto(locale === "en" ? "./" : "./zh");
    const section = page.locator("section").filter({ has: page.getByRole("heading", { name: locale === "en" ? "Featured Projects" : "重點專案", exact: true }) });
    await expect(section.locator("article")).toHaveCount(expected.length);
    await expect(section.locator("article h2")).toHaveText(expected);
  }
});

test("Gridline keeps its legacy identifier and canonical public links", () => {
  const gridline = portfolioProjects.find((project) => project.id === "robotfriends");
  expect(gridline).toMatchObject({
    slug: "robotfriends",
    name: "Gridline",
    repoUrl: "https://github.com/LEO0331/Gridline",
    demoUrl: "https://leo0331.github.io/Gridline/"
  });
  expect(featuredProjectIds[0]).toBe("robotfriends");
});

test("project localization overrides known content and preserves unknown projects", () => {
  const boxmatch = project({ id: "boxmatch", slug: "boxmatch", name: "Boxmatch" });
  const unknown = project({ id: "unknown", slug: "unknown", name: "Unknown" });
  const localized = getLocalizedProjects([boxmatch, unknown], "zh");

  expect(localized[0].tagline).toBe("展場剩食媒合、交易式預約與流量智慧分析");
  expect(localized[0].role).toBe("全端工程師");
  expect(localized[1]).toBe(unknown);
  expect(getLocalizedProjects([boxmatch], "en")[0]).toBe(boxmatch);
});

test("every portfolio project has Traditional Chinese card and detail copy", () => {
  const localized = getLocalizedProjects(portfolioProjects, "zh");

  for (const project of localized) {
    const textFields = [
      project.tagline, project.shortDescription, project.fullDescription, project.role,
      ...project.categories, ...project.features,
      ...(project.challenges ?? []), ...(project.outcomes ?? [])
    ];
    for (const text of textFields) {
      expect(text, `${project.id}: ${text}`).toMatch(/[\u3400-\u9fff]/);
    }
  }

  expect(localized.find((project) => project.id === "taipei-safety-map")?.name).toBe("台北公共安全地圖");
  expect(getLocalizedProjects(portfolioProjects, "en")).toBe(portfolioProjects);
});

test("external URL safety accepts http(s) and rejects executable or credential URLs", () => {
  expect(toSafeExternalHref(" https://example.com/path ")).toBe("https://example.com/path");
  expect(toSafeExternalHref("http://example.com")).toBe("http://example.com/");
  expect(toSafeExternalHref("javascript:alert(1)")).toBeUndefined();
  expect(toSafeExternalHref("data:text/html,test")).toBeUndefined();
  expect(toSafeExternalHref("https://user:secret@example.com")).toBeUndefined();
});
