"use client";

import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import type { ExperienceRole } from "@/lib/site";
import { earlierExperience } from "@/lib/site";

export function ExperienceTimeline({ roles }: { roles: ExperienceRole[] }) {
  const [open, setOpen] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(roles.map((r) => [r.slug, Boolean(r.current)]))
  );

  return (
    <div className="space-y-4">
      {roles.map((role, idx) => {
        const expanded = open[role.slug];
        return (
          <article key={role.slug} className="card overflow-hidden">
            <button
              type="button"
              className="flex w-full items-start gap-4 p-5 text-left sm:p-6"
              aria-expanded={expanded}
              onClick={() => setOpen((s) => ({ ...s, [role.slug]: !s[role.slug] }))}
            >
              <div className="mt-1 flex flex-col items-center">
                <span
                  className={clsx(
                    "h-3 w-3 rounded-full",
                    role.current ? "bg-emerald-500" : "bg-brand-500"
                  )}
                />
                {idx < roles.length - 1 && (
                  <span className="mt-2 hidden h-full w-px bg-[var(--card-border)] sm:block" />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-lg font-bold sm:text-xl">{role.title}</h2>
                  {role.current && (
                    <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                      Current
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm font-medium text-brand-700 dark:text-brand-300">
                  {role.company}
                </p>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  {role.period} · {role.location}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{role.summary}</p>
              </div>
              <span className="text-sm text-[var(--muted)]" aria-hidden>
                {expanded ? "−" : "+"}
              </span>
            </button>

            {expanded && (
              <div className="border-t border-[var(--card-border)] px-5 py-5 sm:px-6">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--muted)]">
                  Highlights
                </h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed">
                  {role.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {role.skills.map((s) => (
                    <span key={s} className="tag">
                      {s}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/experience/${role.slug}`}
                  className="btn-primary mt-5"
                >
                  Open deep role page →
                </Link>
              </div>
            )}
          </article>
        );
      })}

      <div className="card p-5 sm:p-6">
        <h2 className="text-lg font-bold">Earlier foundation</h2>
        <p className="mt-2 text-sm text-[var(--muted)]">
          Instruction and lab operations roles that built communication clarity and tech literacy
          before US dry-van dispatch.
        </p>
        <ul className="mt-4 space-y-4">
          {earlierExperience.map((e) => (
            <li key={e.title} className="border-l-2 border-brand-500/40 pl-4">
              <p className="font-semibold">
                {e.title} · {e.company}
              </p>
              <p className="text-sm text-[var(--muted)]">{e.period}</p>
              <p className="mt-1 text-sm text-[var(--muted)]">{e.note}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
