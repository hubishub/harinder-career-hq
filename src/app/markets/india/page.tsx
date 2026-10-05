import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { certifications, education, site } from "@/lib/site";

export const metadata = {
  title: "India Markets",
  description:
    "Mohali/Chandigarh/Punjab readiness and India hiring fit for Harinder Sidhu.",
};

export default function IndiaMarketPage() {
  return (
    <>
      <PageHero
        eyebrow="India demand"
        title="Mohali · Chandigarh · Punjab — onsite ready"
        lead="Open to Work for onsite and hybrid roles in the Tri-City corridor and broader India logistics, supply chain, control-tower, and ops leadership opportunities — bringing US dry-van operating rigor plus an MCA technical foundation."
        actions={
          <>
            <Link href="/contact" className="btn-accent">
              Contact for India roles
            </Link>
            <Link href="/about" className="btn-secondary">
              Story & values
            </Link>
          </>
        }
      />
      <div className="container-page space-y-10 py-12">
        <section className="grid gap-6 lg:grid-cols-2">
          <article className="card p-6 sm:p-8">
            <h2 className="text-xl font-bold">Geographic readiness</h2>
            <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
              Home base: {site.location}. Actively targeting Mohali and Chandigarh for onsite
              presence where teams need a logistics/ops leader who can sit with stakeholders, train
              desks, and still speak fluent freight. Comfortable with hybrid patterns common to
              IT/ops campuses in the Tri-City region.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
              Prior local-context experience includes instruction roles in Punjab and a web
              development internship with ThinkNEXT Technologies, Mohali (2024) — useful when India
              employers want someone who already understands regional professional norms.
            </p>
          </article>
          <article className="card p-6 sm:p-8">
            <h2 className="text-xl font-bold">What India hiring managers get</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-relaxed text-[var(--muted)]">
              <li>Proven remote operations leadership covering US business hours — transferable to global captive / GCC ops models.</li>
              <li>Process documentation, training, and multi-person desk design — not only individual contributor dispatch.</li>
              <li>English-language professionalism suitable for US/EU customer or partner communication.</li>
              <li>MCA + practical front-end/AI-assisted workflow literacy for modern logistics tech stacks.</li>
              <li>Calm exception handling and stakeholder negotiation under live operational pressure.</li>
            </ul>
          </article>
        </section>

        <section className="card p-6 sm:p-8">
          <h2 className="text-xl font-bold">Role fit examples (India)</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              ["Logistics / fleet ops lead", "Domestic or EXIM-adjacent ops where planning, vendor coordination, and SLA discipline matter."],
              ["Control tower / remote desk manager", "Teams covering foreign freight hours from India — a direct map to current working pattern."],
              ["Ops + light tech hybrid", "Roles that value someone who can improve trackers, SOPs, and simple internal web tools without waiting on engineering for every hygiene fix."],
            ].map(([t, b]) => (
              <div key={t} className="rounded-xl border border-[var(--card-border)] p-4">
                <h3 className="font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{b}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <article className="card p-6">
            <h2 className="text-lg font-bold">Education</h2>
            <ul className="mt-4 space-y-3 text-sm text-[var(--muted)]">
              {education.map((e) => (
                <li key={e.degree}>
                  <p className="font-medium text-[var(--foreground)]">{e.degree}</p>
                  <p>{e.school}</p>
                </li>
              ))}
            </ul>
          </article>
          <article className="card p-6">
            <h2 className="text-lg font-bold">Certifications & training</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
              {certifications.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="card border-accent-500/30 p-6 sm:p-8">
          <h2 className="text-xl font-bold">Open to Work status</h2>
          <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
            Actively exploring onsite Mohali/Chandigarh opportunities and selective remote India
            roles, alongside US/EU remote logistics conversations. Prefer concrete scopes: team
            size, freight or ops domain, tools, and decision rights. Start via the{" "}
            <Link href="/contact" className="font-medium text-brand-600 dark:text-brand-400">
              contact form
            </Link>{" "}
            and choose the India hiring market option.
          </p>
        </section>
      </div>
    </>
  );
}
