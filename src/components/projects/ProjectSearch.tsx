import { copy } from "../../i18n/copy";
import { useLocale } from "../../i18n/LocaleContext";

interface ProjectSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function ProjectSearch({ value, onChange }: ProjectSearchProps): JSX.Element {
  const { locale } = useLocale();
  const text = copy[locale];

  return (
    <label className="block rounded-xl border border-slate-200 bg-white p-3.5 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 sm:p-4">
      <span className="eyebrow">{text.projects.search}</span>
      <span className="mt-1 block text-sm font-semibold text-slate-900 dark:text-slate-100">{text.projects.searchHint}</span>
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={text.projects.searchPlaceholder}
        className="mt-2.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-500 focus:border-brand-600 focus:outline-none dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-400 sm:mt-3 sm:py-2.5"
      />
    </label>
  );
}
