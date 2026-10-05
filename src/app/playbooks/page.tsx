import { PageHero } from "@/components/PageHero";
import { PlaybooksBrowser } from "@/components/PlaybooksBrowser";
import { getAllPlaybooks, getAllTags } from "@/lib/playbooks";

export const metadata = {
  title: "Playbooks",
  description:
    "Long-form dispatch and logistics playbooks: check-calls, load planning, detention, broker comms, overnight coverage, and SOPs.",
};

export default function PlaybooksPage() {
  const playbooks = getAllPlaybooks();
  const tags = getAllTags();

  return (
    <>
      <PageHero
        eyebrow="Operating library"
        title="Playbooks for dry-van desks"
        lead="Eight long-form articles written as hiring artifacts — how the work is actually done. Search or filter by tag, then open full MDX articles."
      />
      <div className="container-page py-12">
        <PlaybooksBrowser playbooks={playbooks} tags={tags} />
      </div>
    </>
  );
}
