import Link from "next/link";
import {
  certifications,
  cvMetrics,
  education,
  experience,
  earlierExperience,
  site,
  skills,
} from "@/lib/site";

export const metadata = {
  title: "Resume",
  description: "Printable web CV layout for Harinder Singh Sidhu.",
};

export default function ResumePage() {
  const topSkills = skills.filter((s) => s.level === "Expert" || s.level === "Strong").slice(0, 16);

  return (
    <div className="container-page py-10 sm:py-14">
      <div className="no-print mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Resume</h1>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Web CV layout for screen and print. A dedicated PDF file can be added later under{" "}
            <code className="text-xs">/public</code>.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link href="/contact" className="btn-secondary">
            Contact
          </Link>
          <Link href="/experience" className="btn-secondary">
            Experience deep-dives
          </Link>
        </div>
      </div>

      <div className="no-print mb-6 rounded-xl border border-dashed border-[var(--card-border)] p-4 text-sm text-[var(--muted)]">
        Tip: use your browser’s <strong className="text-[var(--foreground)]">Print</strong> dialog
        (Ctrl/Cmd+P) and choose “Save as PDF”. Site chrome is hidden via print CSS.
      </div>

      <article id="resume-print" className="card overflow-hidden">
        <header className="border-b border-[var(--card-border)] bg-gradient-to-r from-brand-50 to-transparent p-6 dark:from-brand-950/40 sm:p-8">
          <h2 className="text-3xl font-bold tracking-tight">{site.fullName}</h2>
          <p className="mt-1 text-lg text-brand-700 dark:text-brand-300">{site.title}</p>
          <p className="mt-3 text-sm text-[var(--muted)]">
            {site.phone} · {site.email} · {site.location}
          </p>
          <p className="mt-1 text-sm text-[var(--muted)]">
            LinkedIn: linkedin.com/in/harinder-sidhu-logistics · Open to Work
          </p>
        </header>

        <div className="space-y-8 p-6 sm:p-8">
          <section>
            <h3 className="text-sm font-bold uppercase tracking-wide text-[var(--muted)]">
              Professional summary
            </h3>
            <p className="mt-3 text-sm leading-relaxed">
              Results-driven dispatch and logistics leader with full operational ownership of US
              long-haul 53&apos; dry van freight — load sourcing, rate negotiation, broker
              development, fleet coordination, and FMCSA/DOT compliance. Proven track record across
              the CV performance window below, scaling operations to 12 trucks and leading a
              2-dispatcher team. MCA graduate with front-end web and AI-assisted workflow capability
              — combining deep operational expertise with uncommon technical fluency for modern
              logistics teams.
            </p>
          </section>

          <section>
            <h3 className="text-sm font-bold uppercase tracking-wide text-[var(--muted)]">
              Key performance highlights (Jan 2024 – Sep 2026)
            </h3>
            <ul className="mt-3 grid gap-3 sm:grid-cols-2">
              {cvMetrics.map((m) => (
                <li key={m.label} className="rounded-xl border border-[var(--card-border)] p-3 text-sm">
                  <span className="font-bold">{m.value}</span> — {m.label}.{" "}
                  <span className="text-[var(--muted)]">{m.note}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="text-sm font-bold uppercase tracking-wide text-[var(--muted)]">
              Professional experience
            </h3>
            <div className="mt-4 space-y-6">
              {experience.map((role) => (
                <div key={role.slug}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="font-bold">
                      {role.title} | {role.company}
                    </p>
                    <p className="text-sm text-[var(--muted)]">{role.period}</p>
                  </div>
                  <p className="text-sm text-[var(--muted)]">{role.location}</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                    {role.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
              {earlierExperience.map((e) => (
                <div key={e.title}>
                  <p className="font-bold">
                    {e.title} | {e.company}
                  </p>
                  <p className="text-sm text-[var(--muted)]">{e.period}</p>
                  <p className="mt-1 text-sm">{e.note}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-sm font-bold uppercase tracking-wide text-[var(--muted)]">
              Core skills
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {topSkills.map((s) => (
                <span key={s.name} className="tag">
                  {s.name}
                </span>
              ))}
            </div>
          </section>

          <section className="grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-[var(--muted)]">
                Education
              </h3>
              <ul className="mt-3 space-y-2 text-sm">
                {education.map((e) => (
                  <li key={e.degree}>
                    <p className="font-medium">{e.degree}</p>
                    <p className="text-[var(--muted)]">{e.school}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-[var(--muted)]">
                Certifications
              </h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
                {certifications.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
