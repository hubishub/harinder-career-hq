# Career HQ — Review

## Project path

`/workspace/harinder-career-hq`

## How to run

```bash
cd /workspace/harinder-career-hq
npm install
npm run dev          # http://localhost:3000
npm run build        # production build (verified green)
npm run start        # serve production build
```

Preview screenshots: `node scripts/capture-previews.mjs` (requires dev server on port 3000 + Playwright Chromium).

## Routes implemented

| Route | Status |
|-------|--------|
| `/` | Dual-market hero, Hire US/EU + Hire India CTAs, CV metrics, chapter cards |
| `/experience` | Expandable timeline (client) + earlier foundation |
| `/experience/ajit-transport-senior-logistics` | Deep role page |
| `/experience/king-spade-dispatch-manager` | Deep role page |
| `/experience/gps-logistics-dispatcher` | Deep role page |
| `/skills` | Filterable matrix (category / market / level / search) |
| `/markets/us-eu` | Foreign recruiter pitch, timezone, what you get |
| `/markets/india` | Mohali/Chandigarh readiness + India fit |
| `/playbooks` | Index + search/tag filter (8 articles) |
| `/playbooks/[slug]` | Full MDX articles |
| `/proof` | Interactive tabs: board scenario, SOP, day-in-dispatch |
| `/resume` | Printable web CV + note that PDF can be added later |
| `/contact` | Dual-market form, validation, mailto + console stub, success state |
| `/about` | Story, values, Open to Work |

### Playbook slugs

- `check-call-discipline`
- `load-planning-hos`
- `detention-accessorials`
- `broker-shipper-comms`
- `overnight-us-coverage`
- `mc-authority-cutover`
- `sop-shift-handoff`
- `day-one-dispatch-onboarding`

## Build status

**`npm run build` — SUCCESS** (Next.js 14.2.35, 25 static pages generated).

Dev server: started with `npm run dev -- -p 3000` → **http://127.0.0.1:3000** (verified HTTP 200 on `/` and a playbook route).

## Screenshot paths

All under `/workspace/harinder-career-hq/preview-shots/`:

- `/workspace/harinder-career-hq/preview-shots/home.png`
- `/workspace/harinder-career-hq/preview-shots/experience.png`
- `/workspace/harinder-career-hq/preview-shots/skills.png`
- `/workspace/harinder-career-hq/preview-shots/markets-us-eu.png`
- `/workspace/harinder-career-hq/preview-shots/markets-india.png`
- `/workspace/harinder-career-hq/preview-shots/playbooks.png`
- `/workspace/harinder-career-hq/preview-shots/proof.png`
- `/workspace/harinder-career-hq/preview-shots/resume.png`
- `/workspace/harinder-career-hq/preview-shots/contact.png`
- `/workspace/harinder-career-hq/preview-shots/about.png`

## Working UI checklist

- Shared header/footer, mobile nav, market emphasis CTAs — yes
- Dark/light theme toggle persisted (`next-themes`) — yes
- Skills filters that filter — yes
- Expandable experience timeline — yes
- Playbooks search + tag filter — yes
- Proof interactive steps/tabs — yes
- Contact validation + success state — yes

## Known gaps

- No dedicated downloadable PDF in `/public` yet (resume page documents browser Print → Save as PDF).
- Contact uses mailto + `console.info` stub only — no ESP (by design).
- No git push / no public deploy performed.
- Framer Motion used lightly (`FadeIn` on home dual-market section) — not site-wide animation.
- CV metrics and employers (Ajit Transport, King Spade LLC, GPS Logistics LLC) taken from Harinder’s CV on disk; playbook examples labeled “example data for illustration” where invented.
- `@next/mdx` is installed but playbooks render via `next-mdx-remote` + filesystem MDX (simpler for `[slug]`).

## Constraints honored

- No public deploy (Vercel/Netlify)
- No git push / no remote publish
- Google Sheet / dispatch sheet not touched
