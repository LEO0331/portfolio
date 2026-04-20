import type { AnchorHTMLAttributes, ReactNode } from "react";

interface ExternalLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children"> {
  children: ReactNode;
  label?: string;
}

export function ExternalLink({ children, label, ...props }: ExternalLinkProps): JSX.Element {
  return (
    <a
      {...props}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="text-brand-600 hover:text-brand-700 hover:underline"
    >
      {children}
    </a>
  );
}
