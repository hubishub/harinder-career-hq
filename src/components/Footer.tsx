import Link from "next/link";
import { site, nav } from "@/lib/site";

export function Footer() {
  return (
    <footer className="no-print mt-auto border-t border-[var(--card-border)] bg-[var(--card)]">
      <div className="container-page grid gap-8 py-12 md:grid-cols-3">
        <div>
          <p className="text-lg font-bold">{site.fullName}</p>
          <p className="mt-2 text-sm text-[var(--muted)]">{site.title}</p>
          <p className="mt-3 text-sm text-[var(--muted)]">{site.location}</p>
          <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
            Open to Work · Mohali/Chandigarh onsite + remote
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold">Explore</p>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-[var(--muted)]">
            {nav.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-brand-600 dark:hover:text-brand-400" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold">Market emphasis</p>
          <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
            <li>
              <Link className="hover:text-brand-600" href="/markets/us-eu">
                US/EU dry-van & logistics recruiters →
              </Link>
            </li>
            <li>
              <Link className="hover:text-brand-600" href="/markets/india">
                Mohali / Chandigarh / Punjab / India hiring →
              </Link>
            </li>
            <li>
              <Link className="hover:text-brand-600" href="/contact">
                Contact · {site.email}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[var(--card-border)]">
        <div className="container-page flex flex-col gap-2 py-4 text-xs text-[var(--muted)] sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {site.fullName}. Local portfolio — not a public deploy.</p>
          <p>Built for dual-market hiring conversations.</p>
        </div>
      </div>
    </footer>
  );
}
