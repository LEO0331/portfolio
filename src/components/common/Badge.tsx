import { cn } from "../../utils/cn";

interface BadgeProps {
  label: string;
  tone?: "neutral" | "success" | "warning";
  className?: string;
}

const toneClasses: Record<NonNullable<BadgeProps["tone"]>, string> = {
  neutral: "border border-slate-300 bg-slate-100 text-slate-700",
  success: "border border-emerald-200 bg-emerald-50 text-emerald-800",
  warning: "border border-amber-200 bg-amber-50 text-amber-800"
};

export function Badge({ label, tone = "neutral", className }: BadgeProps): JSX.Element {
  return (
    <span
      className={cn(
        "inline-flex rounded-full px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-wide",
        toneClasses[tone],
        className
      )}
    >
      {label}
    </span>
  );
}
