import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  lead,
  actions,
}: {
  eyebrow?: string;
  title: string;
  lead: string;
  actions?: ReactNode;
}) {
  return (
    <section className="border-b border-[var(--card-border)] bg-gradient-to-b from-brand-50/80 to-transparent dark:from-brand-950/40">
      <div className="container-page py-12 sm:py-16">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-700 dark:text-brand-300">
            {eyebrow}
          </p>
        )}
        <h1 className="section-title mt-2">{title}</h1>
        <p className="section-lead">{lead}</p>
        {actions && <div className="mt-6 flex flex-wrap gap-3">{actions}</div>}
      </div>
    </section>
  );
}
