import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ProjectFilters } from "../components/projects/ProjectFilters";
import { ProjectDetailDrawer } from "../components/projects/ProjectDetailDrawer";
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
  } = useProjectFilters(localizedProjects);
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedProjectSlug, setSelectedProjectSlug] = useState<string | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const updateProjectQueryParam = useCallback(
    (projectSlug: string | null, replace = false) => {
      const next = new URLSearchParams(searchParams);
      if (projectSlug) {
        next.set("project", projectSlug);
      } else {
        next.delete("project");
      }
      setSearchParams(next, { replace });
    },
    [searchParams, setSearchParams]
  );

  const selectedProject = useMemo(
    () => localizedProjects.find((project) => project.slug === selectedProjectSlug) ?? null,
    [localizedProjects, selectedProjectSlug]
  );

  useEffect(() => {
    const paramSlug = searchParams.get("project");
    if (!paramSlug) {
      setSelectedProjectSlug(null);
      return;
    }

    if (!isValidProjectSlug(paramSlug)) {
      updateProjectQueryParam(null, true);
      return;
    }

    const projectExists = localizedProjects.some((project) => project.slug === paramSlug);
    if (projectExists) {
      setSelectedProjectSlug(paramSlug);
      return;
    }

    updateProjectQueryParam(null, true);
  }, [localizedProjects, searchParams, updateProjectQueryParam]);

  const onOpenDetails = useCallback(
    (project: Project, trigger: HTMLButtonElement) => {
      triggerRef.current = trigger;
      setSelectedProjectSlug(project.slug);
      updateProjectQueryParam(project.slug);
    },
    [updateProjectQueryParam]
  );

  const onCloseDetails = useCallback(() => {
    setSelectedProjectSlug(null);
    updateProjectQueryParam(null);
    triggerRef.current?.focus();
  }, [updateProjectQueryParam]);

  return (
    <Section>
      <header className="mb-6 space-y-2.5 sm:mb-7 sm:space-y-3">
        <p className="eyebrow">{text.projects.eyebrow}</p>
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">{text.projects.title}</h1>
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
          onCategoryChange={setSelectedCategory}
          onTechnologyChange={setSelectedTechnology}
          onStatusChange={setSelectedStatus}
        />
        <ProjectHighlights allProjects={localizedProjects} visibleProjects={filteredProjects} />
        <ProjectGrid projects={filteredProjects} onReset={resetFilters} onViewDetails={onOpenDetails} />
      </div>

      {selectedProject ? (
        <ProjectDetailDrawer project={selectedProject} isOpen={Boolean(selectedProject)} onClose={onCloseDetails} />
      ) : null}
    </Section>
  );
}
