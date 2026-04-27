import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { profile } from "../../data/profile";
import { copy } from "../../i18n/copy";
import { useLocale } from "../../i18n/LocaleContext";
import { useTheme } from "../../hooks/useTheme";
import { Button } from "../common/Button";
import { ExternalLink } from "../common/ExternalLink";
import { PageContainer } from "./PageContainer";
import { cn } from "../../utils/cn";
import { toSafeExternalHref } from "../../utils/urlSafety";

export function Navbar(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const { locale, toLocalePath, switchLocale } = useLocale();
  const text = copy[locale];
  const navItems = [
    { to: "/", label: text.nav.home },
    { to: "/projects", label: text.nav.projects },
    { to: "/about", label: text.nav.about },
    { to: "/contact", label: text.nav.contact }
  ];
  const safeGithubUrl = toSafeExternalHref(profile.githubUrl);
  const nextLocale = locale === "en" ? "zh" : "en";

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/90 bg-white/90 backdrop-blur-md dark:border-slate-700/80 dark:bg-slate-950/90">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-900 focus:shadow dark:focus:bg-slate-900 dark:focus:text-slate-100"
      >
        {text.nav.skipToContent}
      </a>
      <PageContainer className="flex h-[4.25rem] items-center justify-between gap-2">
        <Link to={toLocalePath("/")} className="group">
          <p className="eyebrow">{text.brand.eyebrow}</p>
          <p className="text-base font-bold text-slate-900 group-hover:text-brand-700 dark:text-slate-100 dark:group-hover:text-brand-400">
            {profile.fullName}
          </p>
        </Link>

        <nav
          className="hidden items-center gap-1 rounded-full border border-slate-200 bg-white/90 p-1 dark:border-slate-700 dark:bg-slate-900/90 md:flex"
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={toLocalePath(item.to)}
              end={item.to === "/"}
              className={({ isActive }) =>
                cn(
                  "rounded-full px-3 py-1.5 text-sm font-semibold text-slate-700 transition dark:text-slate-200",
                  isActive ? "bg-brand-700 text-white dark:bg-brand-500 dark:text-slate-950" : "hover:bg-slate-100 dark:hover:bg-slate-800"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="secondary" size="sm" onClick={() => switchLocale(nextLocale)}>
            {text.nav.language}
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={toggleTheme}
          >
            {isDark ? "Light" : "Dark"}
          </Button>
          {safeGithubUrl ? (
            <ExternalLink
              href={safeGithubUrl}
              label="Visit GitHub profile"
              className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:no-underline dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              GitHub
            </ExternalLink>
          ) : null}
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => switchLocale(nextLocale)}
          >
            {text.nav.language}
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={toggleTheme}
          >
            {isDark ? "Light" : "Dark"}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-controls="mobile-primary-nav"
          >
            {text.nav.menu}
          </Button>
        </div>
      </PageContainer>

      {isOpen && (
        <div id="mobile-primary-nav" className="border-t border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-950 md:hidden">
          <PageContainer className="flex flex-col gap-2 py-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={toLocalePath(item.to)}
                end={item.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200",
                    isActive ? "bg-brand-700 text-white dark:bg-brand-500 dark:text-slate-950" : "bg-slate-50 dark:bg-slate-800"
                  )
                }
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            {safeGithubUrl ? (
              <ExternalLink href={safeGithubUrl} label="Visit GitHub profile" className="px-1 py-1 text-sm font-semibold">
                {text.nav.github}
              </ExternalLink>
            ) : null}
          </PageContainer>
        </div>
      )}
    </header>
  );
}
