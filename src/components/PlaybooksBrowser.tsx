"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import type { PlaybookMeta } from "@/lib/playbooks";

export function PlaybooksBrowser({
  playbooks,
  tags,
}: {
  playbooks: PlaybookMeta[];
  tags: string[];
}) {
  const [q, setQ] = useState("");
  const [tag, setTag] = useState<string>("All");

  const filtered = useMemo(() => {
    return playbooks.filter((p) => {
      if (tag !== "All" && !p.tags.includes(tag)) return false;
      if (q.trim()) {
        const hay = `${p.title} ${p.description} ${p.tags.join(" ")}`.toLowerCase();
        if (!hay.includes(q.trim().toLowerCase())) return false;
      }
      return true;
    });
  }, [playbooks, q, tag]);

  return (
    <div className="space-y-6">
      <div className="card p-4 sm:p-5">
        <label className="label" htmlFor="playbook-search">
          Search playbooks
        </label>
        <input
          id="playbook-search"
          className="input"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="check-calls, detention, HOS…"
        />
        <div className="mt-4 flex flex-wrap gap-2">
          <Chip active={tag === "All"} onClick={() => setTag("All")}>
            All tags
          </Chip>
          {tags.map((t) => (
            <Chip key={t} active={tag === t} onClick={() => setTag(t)}>
              {t}
            </Chip>
          ))}
        </div>
        <p className="mt-3 text-sm text-[var(--muted)]">
          {filtered.length} article{filtered.length === 1 ? "" : "s"}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((p) => (
          <Link key={p.slug} href={`/playbooks/${p.slug}`} className="card block p-5 transition hover:border-brand-400">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-700 dark:text-brand-300">
              {p.audience}
            </p>
            <h2 className="mt-2 text-lg font-bold">{p.title}</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">{p.description}</p>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="tag">{p.readingMinutes} min read</span>
              {p.tags.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={clsx(
        "rounded-full px-3 py-1 text-xs font-medium",
        active ? "bg-brand-600 text-white" : "border border-[var(--card-border)] text-[var(--muted)]"
      )}
    >
      {children}
    </button>
  );
}
