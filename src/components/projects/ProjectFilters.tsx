import type { ProjectStatus } from "../../types/project";

interface ProjectFiltersProps {
  categories: string[];
  technologies: string[];
  selectedCategory: string;
  selectedTechnology: string;
  selectedStatus: "all" | ProjectStatus;
  onCategoryChange: (value: string) => void;
  onTechnologyChange: (value: string) => void;
  onStatusChange: (value: "all" | ProjectStatus) => void;
}

export function ProjectFilters({
  categories,
  technologies,
  selectedCategory,
  selectedTechnology,
  selectedStatus,
  onCategoryChange,
  onTechnologyChange,
  onStatusChange
}: ProjectFiltersProps): JSX.Element {
  return (
    <div className="panel p-3.5 sm:p-4">
      <p className="eyebrow">Filters</p>
      <div className="mt-2.5 grid grid-cols-1 gap-3.5 sm:mt-3 sm:gap-4 md:grid-cols-3">
        <label className="space-y-1 text-sm text-slate-700 dark:text-slate-200">
          <span className="font-semibold">Category</span>
          <select
            value={selectedCategory}
            onChange={(event) => onCategoryChange(event.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-brand-600 focus:outline-none dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
          >
            <option value="all">All categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-1 text-sm text-slate-700 dark:text-slate-200">
          <span className="font-semibold">Technology</span>
          <select
            value={selectedTechnology}
            onChange={(event) => onTechnologyChange(event.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-brand-600 focus:outline-none dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
          >
            <option value="all">All technologies</option>
            {technologies.map((technology) => (
              <option key={technology} value={technology}>
                {technology}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-1 text-sm text-slate-700 dark:text-slate-200">
          <span className="font-semibold">Status</span>
          <select
            value={selectedStatus}
            onChange={(event) => onStatusChange(event.target.value as "all" | ProjectStatus)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-brand-600 focus:outline-none dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
          >
            <option value="all">All statuses</option>
            <option value="live">Live</option>
            <option value="in-progress">In Progress</option>
            <option value="archived">Archived</option>
          </select>
        </label>
      </div>
    </div>
  );
}
