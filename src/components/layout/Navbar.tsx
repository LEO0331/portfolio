import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { profile } from "../../data/profile";
import { Button } from "../common/Button";
import { ExternalLink } from "../common/ExternalLink";
import { PageContainer } from "./PageContainer";
import { cn } from "../../utils/cn";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" }
];

export function Navbar(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <PageContainer className="flex h-16 items-center justify-between">
        <Link to="/" className="text-base font-semibold text-slate-900">
          {profile.fullName}
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn("text-sm font-medium text-slate-700 hover:text-slate-900", isActive && "text-brand-700")
              }
            >
              {item.label}
            </NavLink>
          ))}
          <ExternalLink href={profile.githubUrl} label="Visit GitHub profile">
            GitHub
          </ExternalLink>
        </nav>

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
          <PageContainer className="flex flex-col py-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn("rounded px-2 py-2 text-sm font-medium text-slate-700", isActive && "bg-slate-100 text-brand-700")
                }
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <ExternalLink href={profile.githubUrl} label="Visit GitHub profile">
              GitHub
            </ExternalLink>
          </PageContainer>
        </div>
      )}
    </header>
  );
}
