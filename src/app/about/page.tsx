import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata = {
  title: "About",
  description: "Story, values, and Open to Work status for Harinder Sidhu.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Operator first — technical enough to improve the desk"
        lead="The short version: Punjab-based logistics leader who learned US dry-van dispatch the hard way — on the board — then scaled a desk, led people, and kept covering US Pacific hours from India overnight ops."
      />
      <div className="container-page space-y-8 py-12">
        <section className="card p-6 sm:p-8">
          <h2 className="text-xl font-bold">Story</h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-[var(--muted)]">
            <p>
              Harinder’s path runs through computer applications education (BCA/MCA), teaching and
              lab operations in Punjab, and then into US long-haul dry-van dispatch. The dispatch
              years are the core of this Career HQ: GPS Logistics as hands-on dispatcher, King Spade
              as the chapter that scaled a solo desk toward twelve trucks and a trained team, and
              Ajit Transport as senior logistics ownership — including an eight-day MC authority
              transition with zero coverage downtime.
            </p>
            <p>
              Living in the Sardulgarh / Mohali–Chandigarh corridor while working US Pacific hours
              is not a gimmick; it is the operating model. Morning boards for US carriers can open
              already groomed. That same model is exactly what many India GCC / captive ops teams
              try to build — and what foreign recruiters need when they hire remote dispatch
              leadership.
            </p>
            <p>
              Technical fluency (HTML/CSS/JS, responsive UI, SEO basics, AI-assisted workflows)
              shows up as practical ops leverage: company websites, cleaner trackers, faster
              research, and less waiting for engineering on hygiene tasks.
            </p>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {[
            ["Truth over theater", "Empty times, ETAs, and hours must be real. Invented optimism destroys broker trust and driver safety."],
            ["Write it down", "If the next shift cannot inherit the board from notes, the desk is still a single point of failure."],
            ["Respect the driver", "Plans that ignore HOS or leave people alone at bad receivers are not “hustle” — they are bad management."],
          ].map(([t, b]) => (
            <article key={t} className="card p-5">
              <h3 className="font-bold">{t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{b}</p>
            </article>
          ))}
        </section>

        <section className="card border-emerald-500/30 p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-900 dark:bg-emerald-950 dark:text-emerald-100">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Open to Work
            </span>
            <h2 className="text-xl font-bold">Current status</h2>
          </div>
          <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
            Actively open to onsite roles in Mohali/Chandigarh/Punjab and to remote US/EU logistics
            & dispatch opportunities. Based in {site.location}. Prefer clear scopes over vague
            “ops coordinator” labels — say what decisions the seat owns.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/markets/india" className="btn-accent">
              India market page
            </Link>
            <Link href="/markets/us-eu" className="btn-primary">
              US/EU market page
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
