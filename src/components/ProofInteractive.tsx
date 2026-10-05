"use client";

import { useState } from "react";
import clsx from "clsx";

const scenarios = [
  {
    id: "board",
    title: "Anonymized board scenario",
    summary: "Three trucks empty in different markets; choose coverage without stranding hours.",
    steps: [
      {
        title: "Read the board",
        body: "Truck A empties near Seattle with strong hours. Truck B is in Phoenix with a tight reset. Truck C sits in Salt Lake after a late receiver. Brokers are posting mixed PNW and Southwest freight.",
      },
      {
        title: "Prioritize risk",
        body: "Secure Truck B first — limited hours means fewer recovery options. Avoid fantasy same-day turns. Use known dwell history before chasing a shiny RPM.",
      },
      {
        title: "Communicate",
        body: "Send clean truck offers with real empties. Tell brokers what you will not do today. Log the plan so overnight coverage inherits intent, not guesswork.",
      },
    ],
  },
  {
    id: "sop",
    title: "Sample SOP excerpt",
    summary: "Detention clock start, broker notify, and billing packet — condensed for hiring conversations.",
    steps: [
      {
        title: "On arrival",
        body: "Driver confirms check-in time in tracker. Dispatch records free time from rate con. GPS breadcrumb noted.",
      },
      {
        title: "At free-time expiry",
        body: "Broker notified with timestamps. Ask for detention approval and loading estimate. Continue hourly updates.",
      },
      {
        title: "After load",
        body: "Attach approval thread to invoice packet. Mark accessorial status in tracker for billing follow-up.",
      },
    ],
  },
  {
    id: "day",
    title: "Day in dispatch walkthrough",
    summary: "Interactive outline of a US Pacific coverage day run from India overnight ops.",
    steps: [
      {
        title: "Board open / grooming",
        body: "Review overnight moves, verify ETAs, clear delivered paperwork flags, and list trucks needing freight before market heat.",
      },
      {
        title: "Coverage block",
        body: "Book and negotiate, protect HOS, confirm appointments, and push check-calls on risk loads. Escalate detention early.",
      },
      {
        title: "Handoff / close",
        body: "Write full handoffs, confirm next-shift priorities, and leave no verbal-only promises hanging.",
      },
    ],
  },
];

export function ProofInteractive() {
  const [tab, setTab] = useState(scenarios[0].id);
  const [step, setStep] = useState(0);
  const active = scenarios.find((s) => s.id === tab) ?? scenarios[0];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Proof sections">
        {scenarios.map((s) => (
          <button
            key={s.id}
            role="tab"
            aria-selected={tab === s.id}
            type="button"
            className={clsx(
              "rounded-xl px-4 py-2 text-sm font-semibold",
              tab === s.id
                ? "bg-brand-600 text-white"
                : "border border-[var(--card-border)] bg-[var(--card)] text-[var(--muted)]"
            )}
            onClick={() => {
              setTab(s.id);
              setStep(0);
            }}
          >
            {s.title}
          </button>
        ))}
      </div>

      <div className="card p-5 sm:p-8" role="tabpanel">
        <p className="text-sm text-[var(--muted)]">{active.summary}</p>
        <p className="mt-2 text-xs font-medium uppercase tracking-wide text-brand-700 dark:text-brand-300">
          Step {step + 1} of {active.steps.length}
        </p>
        <h3 className="mt-2 text-2xl font-bold">{active.steps[step].title}</h3>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--muted)]">
          {active.steps[step].body}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            className="btn-secondary"
            disabled={step === 0}
            onClick={() => setStep((s) => Math.max(0, s - 1))}
          >
            Previous
          </button>
          <button
            type="button"
            className="btn-primary"
            disabled={step >= active.steps.length - 1}
            onClick={() => setStep((s) => Math.min(active.steps.length - 1, s + 1))}
          >
            Next step
          </button>
        </div>

        <ol className="mt-8 grid gap-3 sm:grid-cols-3">
          {active.steps.map((st, i) => (
            <li key={st.title}>
              <button
                type="button"
                onClick={() => setStep(i)}
                className={clsx(
                  "h-full w-full rounded-xl border p-4 text-left text-sm",
                  i === step
                    ? "border-brand-500 bg-brand-50 dark:bg-brand-950/40"
                    : "border-[var(--card-border)]"
                )}
              >
                <span className="font-semibold">{i + 1}. {st.title}</span>
              </button>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-xs text-[var(--muted)]">
          Scenarios are anonymized teaching examples for interview conversations — not live customer
          data.
        </p>
      </div>
    </div>
  );
}
