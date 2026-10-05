import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { MdxContent } from "@/components/MdxContent";
import { getAllPlaybooks, getPlaybook, getPlaybookSlugs } from "@/lib/playbooks";

export function generateStaticParams() {
  return getPlaybookSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = getPlaybook(params.slug);
  if (!p) return { title: "Playbook" };
  return { title: p.title, description: p.description };
}

export default function PlaybookPage({ params }: { params: { slug: string } }) {
  const playbook = getPlaybook(params.slug);
  if (!playbook) notFound();
  const others = getAllPlaybooks().filter((p) => p.slug !== playbook.slug).slice(0, 4);

  return (
    <>
      <PageHero
        eyebrow="Playbook"
        title={playbook.title}
        lead={playbook.description}
        actions={
          <>
            <Link href="/playbooks" className="btn-secondary">
              ← All playbooks
            </Link>
            <span className="tag">{playbook.readingMinutes} min read</span>
            <span className="tag">{playbook.audience}</span>
          </>
        }
      />
      <div className="container-page grid gap-10 py-12 lg:grid-cols-[minmax(0,1fr)_260px]">
        <article className="card p-6 sm:p-10">
          <div className="flex flex-wrap gap-2">
            {playbook.tags.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
            {playbook.updated && <span className="tag">Updated {playbook.updated}</span>}
          </div>
          <div className="mt-2">
            <MdxContent source={playbook.content} />
          </div>
        </article>
        <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          <div className="card p-5">
            <p className="text-sm font-semibold">More playbooks</p>
            <ul className="mt-3 space-y-3 text-sm">
              {others.map((p) => (
                <li key={p.slug}>
                  <Link className="hover:text-brand-600" href={`/playbooks/${p.slug}`}>
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Link href="/proof" className="btn-secondary w-full">
            See proof walkthroughs
          </Link>
        </aside>
      </div>
    </>
  );
}
