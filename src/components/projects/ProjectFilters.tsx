import type { ProjectStatus } from "../../types/project";
import { copy } from "../../i18n/copy";
import { useLocale } from "../../i18n/LocaleContext";
import type { ProjectFilterOption } from "../../utils/projectUtils";

interface ProjectFiltersProps {
  categories: ProjectFilterOption[];
  technologies: ProjectFilterOption[];
  selectedCategory: string;
  selectedTechnology: string;
  selectedStatus: "all" | ProjectStatus;
  engineeringOnly: boolean;
  onCategoryChange: (value: string) => void;
  onTechnologyChange: (value: string) => void;
  onStatusChange: (value: "all" | ProjectStatus) => void;
  onEngineeringOnlyChange: (value: boolean) => void;
}

export function ProjectFilters({
  categories,
  technologies,
  selectedCategory,
  selectedTechnology,
  selectedStatus,
  engineeringOnly,
  onCategoryChange,
  onTechnologyChange,
  onStatusChange,
  onEngineeringOnlyChange
}: ProjectFiltersProps): JSX.Element {
  const { locale } = useLocale();
  const text = copy[locale];

  return (
    <div className="panel p-3.5 sm:p-4">
      <div className="flex flex-wrap items-center justify-between gap-x-3">
        <p className="eyebrow">{text.projects.filters}</p>
        <label className="inline-flex min-h-11 cursor-pointer items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
          <input
            type="checkbox"
            checked={engineeringOnly}
            onChange={event => onEngineeringOnlyChange(event.target.checked)}
            className="size-4 accent-brand-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 dark:focus-visible:outline-slate-200"
          />
          {text.projects.engineeringStories}
        </label>
      </div>
      <div className="mt-2.5 grid grid-cols-1 gap-3.5 sm:mt-3 sm:gap-4 md:grid-cols-3">
        <label className="space-y-1 text-sm text-slate-700 dark:text-slate-200">
          <span className="font-semibold">{text.projects.category}</span>
          <select
            value={selectedCategory}
            onChange={(event) => onCategoryChange(event.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-brand-600 focus:outline-hidden dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
          >
            <option value="all">{text.projects.allCategories}</option>
            {categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-1 text-sm text-slate-700 dark:text-slate-200">
          <span className="font-semibold">{text.projects.technology}</span>
          <select
            value={selectedTechnology}
            onChange={(event) => onTechnologyChange(event.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-brand-600 focus:outline-hidden dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
          >
            <option value="all">{text.projects.allTechnologies}</option>
            {technologies.map((technology) => (
              <option key={technology.value} value={technology.value}>
                {technology.label}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-1 text-sm text-slate-700 dark:text-slate-200">
          <span className="font-semibold">{text.projects.status}</span>
          <select
            value={selectedStatus}
            onChange={(event) => onStatusChange(event.target.value as "all" | ProjectStatus)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-brand-600 focus:outline-hidden dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
          >
            <option value="all">{text.projects.allStatuses}</option>
            <option value="live">{text.projects.live}</option>
            <option value="in-progress">{text.projects.inProgress}</option>
            <option value="archived">{text.projects.archived}</option>
          </select>
        </label>
      </div>
    </div>
  );
}
