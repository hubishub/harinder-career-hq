"use client";

import { useMemo, useState } from "react";
import clsx from "clsx";
import type { Skill, SkillCategory } from "@/lib/site";

const categories: Array<SkillCategory | "All"> = [
  "All",
  "Dispatch & Logistics",
  "Compliance & Safety",
  "Platforms & Tools",
  "Leadership & Soft Skills",
  "Technology",
];

const markets = ["All", "US/EU", "India", "Both"] as const;
const levels = ["All", "Working", "Strong", "Expert"] as const;

export function SkillsFilter({ skills }: { skills: Skill[] }) {
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const [market, setMarket] = useState<(typeof markets)[number]>("All");
  const [level, setLevel] = useState<(typeof levels)[number]>("All");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    return skills.filter((s) => {
      if (category !== "All" && s.category !== category) return false;
      if (level !== "All" && s.level !== level) return false;
      if (market === "US/EU" && !(s.markets.includes("US/EU") || s.markets.includes("Both")))
        return false;
      if (market === "India" && !(s.markets.includes("India") || s.markets.includes("Both")))
        return false;
      if (market === "Both" && !s.markets.includes("Both")) return false;
      if (q.trim()) {
        const hay = `${s.name} ${s.blurb} ${s.category}`.toLowerCase();
        if (!hay.includes(q.trim().toLowerCase())) return false;
      }
      return true;
    });
  }, [skills, category, market, level, q]);

  return (
    <div className="space-y-6">
      <div className="card p-4 sm:p-5">
        <label className="label" htmlFor="skill-search">
          Search skills
        </label>
        <input
          id="skill-search"
          className="input"
          placeholder="e.g. HOS, DAT, leadership…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <FilterGroup label="Category">
            {categories.map((c) => (
              <Chip key={c} active={category === c} onClick={() => setCategory(c)}>
                {c}
              </Chip>
            ))}
          </FilterGroup>
          <FilterGroup label="Market relevance">
            {markets.map((m) => (
              <Chip key={m} active={market === m} onClick={() => setMarket(m)}>
                {m}
              </Chip>
            ))}
          </FilterGroup>
          <FilterGroup label="Proficiency">
            {levels.map((l) => (
              <Chip key={l} active={level === l} onClick={() => setLevel(l)}>
                {l}
              </Chip>
            ))}
          </FilterGroup>
        </div>
        <p className="mt-4 text-sm text-[var(--muted)]">
          Showing <strong className="text-[var(--foreground)]">{filtered.length}</strong> of{" "}
          {skills.length} skills
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {filtered.map((s) => (
          <article key={s.name} className="card p-5">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <h3 className="font-semibold">{s.name}</h3>
              <span
                className={clsx(
                  "tag",
                  s.level === "Expert" && "border-brand-300 text-brand-700 dark:text-brand-300",
                  s.level === "Strong" && "border-emerald-300 text-emerald-700 dark:text-emerald-300"
                )}
              >
                {s.level}
              </span>
            </div>
            <p className="mt-2 text-sm text-[var(--muted)]">{s.blurb}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="tag">{s.category}</span>
              {s.markets.map((m) => (
                <span key={m} className="tag">
                  {m}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="rounded-2xl border border-dashed border-[var(--card-border)] p-8 text-center text-[var(--muted)]">
          No skills match these filters. Clear search or choose All.
        </p>
      )}
    </div>
  );
}

function FilterGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
        {label}
      </p>
      <div className="flex flex-wrap gap-2">{children}</div>
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
        "rounded-full px-3 py-1 text-xs font-medium transition",
        active
          ? "bg-brand-600 text-white"
          : "border border-[var(--card-border)] bg-[var(--card)] text-[var(--muted)] hover:text-[var(--foreground)]"
      )}
    >
      {children}
    </button>
  );
}
