import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ProofInteractive } from "@/components/ProofInteractive";

export const metadata = {
  title: "Proof",
  description:
    "Anonymized board scenarios, sample SOPs, and an interactive day-in-dispatch walkthrough.",
};

export default function ProofPage() {
  return (
    <>
      <PageHero
        eyebrow="Working proof"
        title="Scenarios, SOPs, and a day in dispatch"
        lead="Interactive tabs for anonymized board decision-making, a condensed detention SOP, and a day-in-dispatch walkthrough — designed for interview conversations without exposing live customer data."
        actions={
          <Link href="/playbooks" className="btn-secondary">
            Related playbooks
          </Link>
        }
      />
      <div className="container-page space-y-10 py-12">
        <ProofInteractive />

        <section className="grid gap-6 md:grid-cols-2">
          <article className="card p-6">
            <h2 className="text-lg font-bold">Sample SOP index (excerpt)</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
              <li>Check-call cadence by load stage</li>
              <li>Detention clock start & broker notify</li>
              <li>Shift handoff required fields</li>
              <li>New dispatcher first-week checklist</li>
              <li>MC cutover parallel workstreams</li>
            </ul>
            <p className="mt-4 text-sm text-[var(--muted)]">
              Full write-ups live in the playbooks library; this page is the interactive layer for
              live walkthroughs.
            </p>
          </article>
          <article className="card p-6">
            <h2 className="text-lg font-bold">How to use this in hiring</h2>
            <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
              Ask Harinder to narrate a tab end-to-end. Listen for empty-time honesty, HOS
              awareness, escalation timing, and how handoffs are written. That conversation usually
              reveals more than a generic “tell me about a challenge” prompt.
            </p>
            <Link href="/contact" className="btn-primary mt-5">
              Book a walkthrough via contact
            </Link>
          </article>
        </section>
      </div>
    </>
  );
}
