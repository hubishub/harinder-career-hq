import { PageHero } from "@/components/PageHero";
import { SkillsFilter } from "@/components/SkillsFilter";
import { skills } from "@/lib/site";

export const metadata = {
  title: "Skills",
  description:
    "Filterable skills matrix spanning dry-van dispatch, compliance, platforms, leadership, and technology.",
};

export default function SkillsPage() {
  return (
    <>
      <PageHero
        eyebrow="Skills matrix"
        title="Logistics depth, ops soft skills, and tech literacy"
        lead="Filter by category, market relevance, and proficiency. Built so US/EU freight recruiters and India hiring managers can scan for the same person through different lenses."
      />
      <div className="container-page py-12">
        <SkillsFilter skills={skills} />
      </div>
    </>
  );
}
