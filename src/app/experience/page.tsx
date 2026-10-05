import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { experience } from "@/lib/site";

export const metadata = {
  title: "Experience",
  description:
    "Career timeline: Ajit Transport senior logistics, King Spade dispatch manager, GPS Logistics dispatcher, and earlier foundation roles.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        eyebrow="Career timeline"
        title="US dry-van dispatch leadership, chapter by chapter"
        lead="Expand each role for highlights, then open the deep case pages for operating narrative — MC cutovers, desk scaling, and the habits that make overnight US coverage work from India."
        actions={
          <>
            <Link href="/resume" className="btn-secondary">
              Resume view
            </Link>
            <Link href="/proof" className="btn-secondary">
              Proof & scenarios
            </Link>
          </>
        }
      />
      <div className="container-page py-12">
        <ExperienceTimeline roles={experience} />
      </div>
    </>
  );
}
