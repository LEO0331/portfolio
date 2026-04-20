import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { profile } from "../../data/profile";
import { Button } from "../common/Button";
import { ExternalLink } from "../common/ExternalLink";
import { PageContainer } from "./PageContainer";
import { cn } from "../../utils/cn";
import { toSafeExternalHref } from "../../utils/urlSafety";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" }
];

export function Navbar(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const safeGithubUrl = toSafeExternalHref(profile.githubUrl);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/90 bg-white/90 backdrop-blur-md">
      <PageContainer className="flex h-[4.25rem] items-center justify-between">
        <Link to="/" className="group">
          <p className="eyebrow">Portfolio</p>
          <p className="text-base font-bold text-slate-900 group-hover:text-brand-700">{profile.fullName}</p>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-slate-200 bg-white/90 p-1 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "rounded-full px-3 py-1.5 text-sm font-semibold text-slate-700 transition",
                  isActive ? "bg-brand-700 text-white" : "hover:bg-slate-100"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {safeGithubUrl ? (
          <div className="hidden md:block">
            <ExternalLink
              href={safeGithubUrl}
              label="Visit GitHub profile"
              className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:no-underline"
            >
              GitHub
            </ExternalLink>
          </div>
        ) : null}

        <Button
          className="md:hidden"
          variant="ghost"
          size="sm"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          Menu
        </Button>
      </PageContainer>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <PageContainer className="flex flex-col gap-2 py-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "rounded-lg px-3 py-2 text-sm font-semibold text-slate-700",
                    isActive ? "bg-brand-700 text-white" : "bg-slate-50"
                  )
                }
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            {safeGithubUrl ? (
              <ExternalLink href={safeGithubUrl} label="Visit GitHub profile" className="px-1 py-1 text-sm font-semibold">
                GitHub
              </ExternalLink>
            ) : null}
          </PageContainer>
        </div>
      )}
    </header>
  );
}
