"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";
import { nav, site } from "@/lib/site";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="no-print sticky top-0 z-50 border-b border-[var(--card-border)] bg-[var(--background)]/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-3">
        <Link href="/" className="flex shrink-0 flex-col leading-tight">
          <span className="whitespace-nowrap text-sm font-bold tracking-tight sm:text-base">
            {site.name}
          </span>
          <span className="hidden whitespace-nowrap text-[11px] text-[var(--muted)] sm:block">
            Career HQ · Open to Work
          </span>
        </Link>

        <div className="flex min-w-0 items-center gap-2">
          <nav
            className="hidden items-center gap-0.5 lg:flex xl:gap-1"
            aria-label="Primary"
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "rounded-lg px-1.5 py-1.5 text-[11px] font-medium transition xl:px-2.5 xl:text-sm",
                  isActive(item.href)
                    ? "bg-brand-100 text-brand-900 dark:bg-brand-900/50 dark:text-brand-100"
                    : "text-[var(--muted)] hover:bg-slate-100 hover:text-[var(--foreground)] dark:hover:bg-slate-800"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTAs: show beside hamburger on tablet; hide while dense lg nav is up; restore at xl */}
          <Link
            href="/markets/us-eu"
            className="btn-primary hidden px-3 py-2 text-xs sm:inline-flex lg:hidden xl:inline-flex"
          >
            Hire US/EU
          </Link>
          <Link
            href="/markets/india"
            className="btn-accent hidden px-3 py-2 text-xs md:inline-flex lg:hidden xl:inline-flex"
          >
            Hire India
          </Link>
          <ThemeToggle />
          <button
            type="button"
            className="btn-secondary h-10 w-10 px-0 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-[var(--card-border)] lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-3" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={clsx(
                  "rounded-xl px-3 py-2.5 text-sm font-medium",
                  isActive(item.href)
                    ? "bg-brand-100 text-brand-900 dark:bg-brand-900/50 dark:text-brand-100"
                    : "text-[var(--foreground)]"
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex gap-2">
              <Link href="/markets/us-eu" onClick={() => setOpen(false)} className="btn-primary flex-1">
                Hire US/EU
              </Link>
              <Link href="/markets/india" onClick={() => setOpen(false)} className="btn-accent flex-1">
                Hire India
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
