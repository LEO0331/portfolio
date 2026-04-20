interface TagProps {
  label: string;
}

export function Tag({ label }: TagProps): JSX.Element {
  return <span className="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-700">{label}</span>;
}
