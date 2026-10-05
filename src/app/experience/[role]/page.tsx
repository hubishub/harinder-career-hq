import Link from "next/link";
import { notFound } from "next/navigation";
import { experience, type RoleSlug } from "@/lib/site";
import { PageHero } from "@/components/PageHero";

export function generateStaticParams() {
  return experience.map((r) => ({ role: r.slug }));
}

export function generateMetadata({ params }: { params: { role: string } }) {
  const role = experience.find((r) => r.slug === params.role);
  if (!role) return { title: "Role" };
  return {
    title: `${role.title} · ${role.company}`,
    description: role.summary,
  };
}

export default function RolePage({ params }: { params: { role: string } }) {
  const role = experience.find((r) => r.slug === params.role as RoleSlug);
  if (!role) notFound();

  return (
    <>
      <PageHero
        eyebrow={role.company}
        title={role.title}
        lead={`${role.period} · ${role.location}. ${role.summary}`}
        actions={
          <>
            <Link href="/experience" className="btn-secondary">
              ← All experience
            </Link>
            <Link href="/contact" className="btn-primary">
              Discuss this chapter
            </Link>
          </>
        }
      />
      <div className="container-page grid gap-10 py-12 lg:grid-cols-[1fr_280px]">
        <div className="space-y-8">
          <section className="card p-6 sm:p-8">
            <h2 className="text-xl font-bold">Role highlights</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-relaxed text-[var(--muted)]">
              {role.highlights.map((h) => (
                <li key={h}>
                  <span className="text-[var(--foreground)]">{h}</span>
                </li>
              ))}
            </ul>
          </section>

          {role.chapters.map((ch) => (
            <section key={ch.title} className="card p-6 sm:p-8">
              <h2 className="text-xl font-bold">{ch.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">{ch.body}</p>
            </section>
          ))}

          <section className="card p-6 sm:p-8">
            <h2 className="text-xl font-bold">How this chapter helps hiring managers</h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
              US/EU recruiters get evidence of real dry-van operating ownership — not generic
              “logistics coordination” language. India employers see remote leadership, process
              building, and the ability to train desks while staying close to freight detail. Ask
              for walkthroughs on the{" "}
              <Link className="font-medium text-brand-600 dark:text-brand-400" href="/proof">
                Proof
              </Link>{" "}
              page or related{" "}
              <Link className="font-medium text-brand-600 dark:text-brand-400" href="/playbooks">
                playbooks
              </Link>
              .
            </p>
          </section>
        </div>

        <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          <div className="card p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
              Skills in this role
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {role.skills.map((s) => (
                <span key={s} className="tag">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="card p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
              Other deep pages
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {experience
                .filter((r) => r.slug !== role.slug)
                .map((r) => (
                  <li key={r.slug}>
                    <Link className="hover:text-brand-600" href={`/experience/${r.slug}`}>
                      {r.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}
