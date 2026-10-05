# Harinder Sidhu — Career HQ

Multi-page Next.js portfolio for dual-market hiring:

- **US/EU** dry-van / logistics / freight recruiters (remote coverage)
- **India** Mohali / Chandigarh / Punjab onsite + hybrid / remote ops roles

Local portfolio only — **no public deploy** in this project scope.

## Stack

- Next.js 14 (App Router) + TypeScript + Tailwind CSS
- MDX playbooks via `next-mdx-remote` + `gray-matter`
- `next-themes` dark/light toggle (persisted)
- Light Framer Motion (`FadeIn`)

## Run locally

```bash
cd /workspace/harinder-career-hq
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve production build
```

## Routes

| Route | Purpose |
|-------|---------|
| `/` | Dual-market hero + CTAs |
| `/experience` | Expandable career timeline |
| `/experience/[role]` | Deep role/case pages (3) |
| `/skills` | Filterable skills matrix |
| `/markets/us-eu` | US/EU recruiter pitch |
| `/markets/india` | India / Tri-City pitch |
| `/playbooks` | MDX playbook index + search/tags |
| `/playbooks/[slug]` | Full articles (8) |
| `/proof` | Interactive scenarios / SOP / day-in-dispatch |
| `/resume` | Printable web CV |
| `/contact` | Dual-market form (mailto + console stub) |
| `/about` | Story, values, Open to Work |

## Preview notes

- Theme toggle is in the header; preference persists in localStorage via `next-themes`.
- Contact form validates client-side and opens a mailto; also `console.info`s the payload.
- Print the resume page for PDF; a static PDF can be added under `public/` later.
- Screenshots (if generated) live in `preview-shots/`.
- See `REVIEW.md` for build status and known gaps.

## Content source

Copy and metrics aligned to Harinder’s CV (Ajit Transport LLC, King Spade LLC, GPS Logistics LLC, and earlier Punjab roles). Example/illustrative snippets in playbooks are labeled as such.
