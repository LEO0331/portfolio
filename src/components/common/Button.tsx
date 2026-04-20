import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md";

interface BaseProps {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;
}

type ButtonProps = BaseProps &
  ({ as?: "button" } & ButtonHTMLAttributes<HTMLButtonElement> | {
    as: "a";
  } & AnchorHTMLAttributes<HTMLAnchorElement>);

const variantClasses: Record<Variant, string> = {
  primary:
    "border border-brand-700 bg-brand-700 text-white hover:bg-brand-800 hover:border-brand-800 focus-visible:ring-brand-600",
  secondary:
    "border border-slate-300 bg-white text-slate-800 hover:border-slate-400 hover:bg-slate-50 focus-visible:ring-slate-500",
  ghost: "border border-transparent text-slate-700 hover:bg-slate-100 focus-visible:ring-slate-500"
};

const sizeClasses: Record<Size, string> = {
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-2.5 text-sm"
};

export function getButtonClassName(
  variant: Variant = "primary",
  size: Size = "md",
  className?: string
): string {
  return cn(
    "inline-flex items-center justify-center rounded-lg font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    variantClasses[variant],
    sizeClasses[size],
    className
  );
}

export function Button(props: ButtonProps): JSX.Element {
  const { className, children, variant = "primary", size = "md" } = props;
  const classes = getButtonClassName(variant, size, className);

  if (props.as === "a") {
    const { as: _as, ...anchorProps } = props;
    return (
      <a {...anchorProps} className={classes}>
        {children}
      </a>
    );
  }

  const { as: _as, type = "button", ...buttonProps } = props;
  return (
    <button {...buttonProps} type={type} className={classes}>
      {children}
    </button>
  );
}
