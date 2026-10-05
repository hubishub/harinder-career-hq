import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description: "Dual-market contact form for US/EU and India hiring conversations.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start a hiring conversation"
        lead="Choose US/EU or India market context so the reply can match how you hire. Form uses client-side validation and a mailto/console stub — no email service provider is wired in this local portfolio."
      />
      <div className="container-page grid gap-8 py-12 lg:grid-cols-[1fr_320px]">
        <ContactForm />
        <aside className="space-y-4">
          <div className="card p-5">
            <h2 className="font-bold">Direct</h2>
            <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
              <li>
                Email:{" "}
                <a className="font-medium text-brand-600 dark:text-brand-400" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </li>
              <li>Phone: {site.phone}</li>
              <li>Location: {site.location}</li>
              <li>
                LinkedIn:{" "}
                <a
                  className="font-medium text-brand-600 dark:text-brand-400"
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  harinder-sidhu-logistics
                </a>
              </li>
            </ul>
          </div>
          <div className="card p-5">
            <h2 className="font-bold">What to include</h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
              Role title, freight or ops domain, onsite vs remote expectations, tools/TMS if known,
              and timeline. For India onsite roles, mention Mohali/Chandigarh office expectations
              early.
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}
