import { useCallback, useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { ProjectFilters } from "../components/projects/ProjectFilters";
import { ProjectDetailDrawer } from "../components/projects/ProjectDetailDrawer";
import { hasEngineeringDrawer } from "../components/projects/ProjectEngineering";
import { ProjectGrid } from "../components/projects/ProjectGrid";
import { ProjectHighlights } from "../components/projects/ProjectHighlights";
import { ProjectSearch } from "../components/projects/ProjectSearch";
import { Section } from "../components/layout/Section";
import { projects } from "../data/projects";
import { useProjectFilters } from "../hooks/useProjectFilters";
import { copy } from "../i18n/copy";
import { useLocale } from "../i18n/LocaleContext";
import type { Project } from "../types/project";
import { getLocalizedProjects } from "../utils/projectLocalization";
import { usePageSeo } from "../utils/seo";

function isValidProjectSlug(value: string): boolean {
  return /^[a-z0-9-]{1,120}$/.test(value);
}

export function ProjectsPage(): JSX.Element {
  const { locale, toLocalePath } = useLocale();
  const text = copy[locale];
  const localizedProjects = useMemo(() => getLocalizedProjects(projects, locale), [locale]);
  const projectsStructuredData = useMemo(
    () => [
      {
        "@type": "ItemList",
        name: "Leo Chen Projects",
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        numberOfItems: localizedProjects.length,
        itemListElement: localizedProjects.slice(0, 12).map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: project.name,
          url: project.demoUrl ?? project.repoUrl
        }))
      },
      ...localizedProjects
        .filter((project) => project.repoUrl)
        .slice(0, 8)
        .map((project) => ({
          "@type": "SoftwareSourceCode",
          name: project.name,
          codeRepository: project.repoUrl,
          programmingLanguage: project.techStack.join(", "),
          description: project.shortDescription,
          url: project.demoUrl ?? project.repoUrl
        }))
    ],
    [localizedProjects]
  );

  usePageSeo(text.seo.projectsTitle, {
    routePath: toLocalePath("/projects"),
    description: text.seo.projectsDescription,
    jsonLd: projectsStructuredData
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const engineeringOnly = searchParams.get("engineering") === "1";
  const {
    searchTerm,
    selectedCategory,
    selectedTechnology,
    selectedStatus,
    categories,
    technologies,
    filteredProjects,
    setSearchTerm,
    setSelectedCategory,
    setSelectedTechnology,
    setSelectedStatus,
    resetFilters
  } = useProjectFilters(localizedProjects, engineeringOnly);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const triggerRef = useRef<{ slug: string; element: HTMLButtonElement } | null>(null);
  const previousProjectSlug = useRef<string | null>(null);
  const updateQueryParam = useCallback(
    (key: "project" | "engineering", value: string | null, replace = false) => {
      setSearchParams(previous => {
        const next = new URLSearchParams(previous);
        if (value === null) next.delete(key);
        else next.set(key, value);
        return next;
      }, { replace });
    },
    [setSearchParams]
  );

  const projectSlug = searchParams.get("project");
  const selectedProject = projectSlug && isValidProjectSlug(projectSlug)
    ? localizedProjects.find(project => project.slug === projectSlug) ?? null
    : null;

  useLayoutEffect(() => {
    const previous = previousProjectSlug.current;
    previousProjectSlug.current = selectedProject?.slug ?? null;
    if (!previous || selectedProject) return;

    const trigger = triggerRef.current;
    if (trigger?.slug === previous && trigger.element.isConnected) trigger.element.focus();
    else titleRef.current?.focus();
  }, [selectedProject]);

  useEffect(() => {
    if (projectSlug && !selectedProject) updateQueryParam("project", null, true);
  }, [projectSlug, selectedProject, updateQueryParam]);

  const onOpenDetails = useCallback(
    (project: Project, trigger: HTMLButtonElement) => {
      triggerRef.current = { slug: project.slug, element: trigger };
      updateQueryParam("project", project.slug);
    },
    [updateQueryParam]
  );

  const onCloseDetails = useCallback(() => {
    updateQueryParam("project", null);
  }, [updateQueryParam]);

  return (
    <Section>
      <header className="mb-6 space-y-2.5 sm:mb-7 sm:space-y-3">
        <p className="eyebrow">{text.projects.eyebrow}</p>
        <h1 ref={titleRef} tabIndex={-1} className="text-3xl font-bold text-slate-900 sm:text-4xl">{text.projects.title}</h1>
        <p className="max-w-3xl text-sm text-slate-600 sm:text-base">
          {text.projects.intro}
        </p>
      </header>

      <div className="space-y-3.5 sm:space-y-4">
        <ProjectSearch value={searchTerm} onChange={setSearchTerm} />
        <ProjectFilters
          categories={categories}
          technologies={technologies}
          selectedCategory={selectedCategory}
          selectedTechnology={selectedTechnology}
          selectedStatus={selectedStatus}
          engineeringOnly={engineeringOnly}
          onCategoryChange={setSelectedCategory}
          onTechnologyChange={setSelectedTechnology}
          onStatusChange={setSelectedStatus}
          onEngineeringOnlyChange={value => updateQueryParam("engineering", value ? "1" : null)}
        />
        <ProjectHighlights allProjects={localizedProjects} visibleProjects={filteredProjects} />
        <ProjectGrid
          projects={filteredProjects}
          onReset={() => {
            resetFilters();
            if (engineeringOnly) updateQueryParam("engineering", null);
          }}
          onViewDetails={onOpenDetails}
          hasEngineeringDrawer={hasEngineeringDrawer}
        />
      </div>

      {selectedProject ? (
        <ProjectDetailDrawer project={selectedProject} onClose={onCloseDetails} />
      ) : null}
    </Section>
  );
}
