import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { cvMetrics, experience, site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-[var(--card-border)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-200/50 via-transparent to-transparent dark:from-brand-900/30" />
        <div className="container-page relative grid gap-10 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:py-24">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-emerald-600/40 bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-900 dark:border-emerald-400/40 dark:bg-emerald-950 dark:text-emerald-100">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Open to Work · onsite Mohali/Chandigarh + remote US/EU
            </p>
            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {site.fullName}
            </h1>
            <p className="mt-3 text-xl font-medium text-brand-700 dark:text-brand-300">
              {site.title}
            </p>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              {site.tagline} Concrete dry-van operating experience — load sourcing, rate
              negotiation, broker development, fleet coordination, and FMCSA/DOT-aware dispatch —
              paired with an MCA technical foundation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/markets/us-eu" className="btn-primary">
                Hire US/EU
              </Link>
              <Link href="/markets/india" className="btn-accent">
                Hire India
              </Link>
              <Link href="/resume" className="btn-secondary">
                View resume
              </Link>
              <Link href="/contact" className="btn-secondary">
                Contact
              </Link>
            </div>
          </div>

          <aside className="card p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
              CV performance window (Jan 2024 – Sep 2026)
            </p>
            <ul className="mt-4 space-y-4">
              {cvMetrics.map((m) => (
                <li key={m.label} className="border-b border-[var(--card-border)] pb-4 last:border-0 last:pb-0">
                  <p className="text-2xl font-bold tracking-tight">{m.value}</p>
                  <p className="text-sm font-medium">{m.label}</p>
                  <p className="mt-1 text-xs text-[var(--muted)]">{m.note}</p>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-[var(--muted)]">
              Figures sourced from Harinder’s CV highlights — ask for context in interview.
            </p>
          </aside>
        </div>
      </section>

      <section className="container-page py-14">
        <FadeIn>
        <div>
        <h2 className="section-title">Built for two hiring markets</h2>
        <p className="section-lead">
          One profile, two clear pitches: foreign freight recruiters who need US dry-van operating
          judgment on remote coverage, and India employers who need logistics/ops leadership near
          Mohali–Chandigarh with uncommon technical fluency.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Link href="/markets/us-eu" className="card group p-6 transition hover:border-brand-400">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-700 dark:text-brand-300">
              Foreign markets
            </p>
            <h3 className="mt-2 text-2xl font-bold">US / EU dry-van & logistics</h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
              Remote US Pacific coverage from India, DAT + broker network fluency, detention and
              check-call discipline, MC cutover experience, and desk leadership. Ideal for carriers,
              3PLs, and freight tech teams who value operators who can run the board.
            </p>
            <span className="mt-5 inline-flex text-sm font-semibold text-brand-700 group-hover:underline dark:text-brand-300">
              Read US/EU market page →
            </span>
          </Link>
          <Link href="/markets/india" className="card group p-6 transition hover:border-accent-500">
            <p className="text-xs font-semibold uppercase tracking-wide text-accent-600">
              India demand
            </p>
            <h3 className="mt-2 text-2xl font-bold">Mohali / Chandigarh / Punjab</h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
              Open to onsite or hybrid roles in the Tri-City corridor and broader India logistics /
              control-tower / ops leadership. MCA + front-end literacy plus proven remote ops
              management for global freight.
            </p>
            <span className="mt-5 inline-flex text-sm font-semibold text-accent-600 group-hover:underline">
              Read India market page →
            </span>
          </Link>
        </div>
        </div>
        </FadeIn>
      </section>

      <section className="border-y border-[var(--card-border)] bg-[var(--card)]">
        <div className="container-page py-14">
          <h2 className="section-title">Career chapters at a glance</h2>
          <p className="section-lead">
            Progression from hands-on dispatcher to dispatch manager to senior logistics manager on
            US 53&apos; dry-van fleets — including Ajit Transport LLC.
          </p>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {experience.map((role) => (
              <Link key={role.slug} href={`/experience/${role.slug}`} className="card p-5 hover:border-brand-400">
                <p className="text-xs text-[var(--muted)]">{role.period}</p>
                <h3 className="mt-2 font-bold">{role.title}</h3>
                <p className="text-sm text-brand-700 dark:text-brand-300">{role.company}</p>
                <p className="mt-3 line-clamp-4 text-sm text-[var(--muted)]">{role.summary}</p>
              </Link>
            ))}
          </div>
          <Link href="/experience" className="btn-secondary mt-6">
            Full expandable timeline
          </Link>
        </div>
      </section>

      <section className="container-page py-14">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              href: "/playbooks",
              title: "Ops playbooks",
              body: "Long-form MDX articles on check-calls, HOS-aware planning, detention, broker comms, overnight coverage, and SOPs.",
            },
            {
              href: "/proof",
              title: "Proof & walkthroughs",
              body: "Anonymized board scenarios, sample SOP flows, and an interactive day-in-dispatch walkthrough for interviews.",
            },
            {
              href: "/skills",
              title: "Filterable skills matrix",
              body: "Logistics, compliance, platforms, leadership, and tech literacy — filter by market and proficiency.",
            },
          ].map((c) => (
            <Link key={c.href} href={c.href} className="card p-6 hover:border-brand-400">
              <h3 className="text-lg font-bold">{c.title}</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">{c.body}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
