import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { cvMetrics, site } from "@/lib/site";

export const metadata = {
  title: "US/EU Markets",
  description:
    "How Harinder Sidhu works US/EU dry-van lanes, timezone overlap, and what foreign recruiters get.",
};

export default function UsEuMarketPage() {
  return (
    <>
      <PageHero
        eyebrow="Foreign markets"
        title="US & EU dry-van / logistics recruiters"
        lead="Hire an operator who has run 53' dry-van long-haul dispatch end-to-end — sourcing, negotiation, broker relationships, compliance-aware planning, and desk leadership — with India overnight coverage aligned to US Pacific business hours."
        actions={
          <>
            <Link href="/contact" className="btn-primary">
              Contact for US/EU roles
            </Link>
            <Link href="/playbooks/overnight-us-coverage" className="btn-secondary">
              Overnight coverage playbook
            </Link>
          </>
        }
      />
      <div className="container-page space-y-10 py-12">
        <section className="grid gap-6 lg:grid-cols-2">
          <article className="card p-6 sm:p-8">
            <h2 className="text-xl font-bold">How he works US dry-van lanes</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-relaxed text-[var(--muted)]">
              <li>
                Lane focus historically concentrated in Pacific Northwest & Southwest corridors
                (WA, OR, CA, AZ, UT, CO and related) — specialization that improves dwell
                prediction and broker conversations.
              </li>
              <li>
                Daily sourcing via DAT and a 300+ brokerage network including major US 3PLs and
                digital freight platforms.
              </li>
              <li>
                Planning that respects ELD/HOS reality, deadhead economics, and appointment windows
                — not fantasy miles.
              </li>
              <li>
                Exception handling: detention clocks, re-powers, honest ETAs, and clean handoffs
                across multi-dispatcher desks.
              </li>
            </ul>
          </article>
          <article className="card p-6 sm:p-8">
            <h2 className="text-xl font-bold">Timezone & overlap</h2>
            <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
              Based in Punjab, India, Harinder runs remote coverage on US Pacific hours through an
              overnight/early operating pattern. That means US mornings can open on a groomed
              board: check-calls done, risks flagged, and coverage decisions already in motion.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
              For EU-facing logistics or freight-tech roles, the same remote discipline applies —
              clear written updates, shared trackers, and escalation rules so distance does not
              become ambiguity. Exact overlap windows are negotiable by role; the operating
              principle is predictable coverage, not heroic availability.
            </p>
          </article>
        </section>

        <section className="card p-6 sm:p-8">
          <h2 className="text-xl font-bold">What foreign recruiters get</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              ["Operator judgment", "Someone who has booked, rescued, and declined freight — not only coordinated calendars."],
              ["Desk leadership", "Hired and trained dispatchers; set coverage targets; documented SOPs."],
              ["Compliance awareness", "FMCSA/DOT and ELD/HOS-aware planning; MC authority cutover experience."],
              ["Technical fluency", "MCA background plus practical web/ops tooling — faster on freight-tech stacks."],
              ["Communication quality", "Broker/shipper updates written to be forwarded; drivers get calm ownership."],
              ["Proof artifacts", "Playbooks and interactive scenarios ready for interview deep-dives."],
            ].map(([t, b]) => (
              <div key={t} className="rounded-xl border border-[var(--card-border)] p-4">
                <h3 className="font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{b}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cvMetrics.map((m) => (
            <div key={m.label} className="card p-5">
              <p className="text-2xl font-bold">{m.value}</p>
              <p className="mt-1 text-sm font-medium">{m.label}</p>
              <p className="mt-2 text-xs text-[var(--muted)]">{m.note}</p>
            </div>
          ))}
        </section>

        <section className="card p-6 sm:p-8">
          <h2 className="text-xl font-bold">Ideal role shapes</h2>
          <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
            Dispatch / fleet ops manager, remote carrier desk lead, logistics coordinator with real
            authority, freight marketplace ops, or hybrid operator-analyst roles where English-language
            board work and process design both matter. Location for these conversations: remote
            relative to US/EU teams, with {site.location} as home base.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/experience" className="btn-secondary">
              Experience
            </Link>
            <Link href="/proof" className="btn-secondary">
              Proof
            </Link>
            <Link href="/resume" className="btn-secondary">
              Resume
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
