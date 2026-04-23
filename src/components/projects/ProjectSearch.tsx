interface ProjectSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function ProjectSearch({ value, onChange }: ProjectSearchProps): JSX.Element {
  return (
    <label className="block rounded-xl border border-slate-200 bg-white p-3.5 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 sm:p-4">
      <span className="eyebrow">Search</span>
      <span className="mt-1 block text-sm font-semibold text-slate-900 dark:text-slate-100">Find projects quickly</span>
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search by name, tagline, description, category, or tech"
        className="mt-2.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-500 focus:border-brand-600 focus:outline-none dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-400 sm:mt-3 sm:py-2.5"
      />
    </label>
  );
}
