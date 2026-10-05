export const site = {
  name: "Harinder Sidhu",
  fullName: "Harinder Singh Sidhu",
  title: "Senior Logistics & Dispatch Manager",
  tagline:
    "US dry-van dispatch leadership with India-based overnight coverage — ready for onsite Mohali/Chandigarh roles and remote US/EU freight operations.",
  email: "harindersinghharry111@gmail.com",
  phone: "+91 99885-22679",
  location: "Sardulgarh / Mohali–Chandigarh corridor, Punjab, India",
  linkedin: "https://linkedin.com/in/harinder-sidhu-logistics",
  openToWork: true,
  markets: ["US dry-van / long-haul", "EU freight ops (remote)", "India logistics & ops (onsite or hybrid)"],
};

export type RoleSlug =
  | "ajit-transport-senior-logistics"
  | "king-spade-dispatch-manager"
  | "gps-logistics-dispatcher";

export type ExperienceRole = {
  slug: RoleSlug;
  company: string;
  location: string;
  title: string;
  period: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  chapters: { title: string; body: string }[];
  skills: string[];
};

export const experience: ExperienceRole[] = [
  {
    slug: "ajit-transport-senior-logistics",
    company: "Ajit Transport LLC",
    location: "Covington, WA · Remote (US Pacific hours)",
    title: "Senior Logistics Manager",
    period: "June 2026 – Present",
    current: true,
    summary:
      "End-to-end ownership of 53' dry-van long-haul dispatch for a US carrier — load sourcing, rate negotiation, broker development, fleet coordination, FMCSA/DOT compliance, and leadership of a two-dispatcher desk covering full US business hours from India overnight ops.",
    highlights: [
      "Lead dispatch for a 53' dry-van long-haul fleet; supervise two dispatchers and set daily coverage targets.",
      "Migrated full fleet and staff from King Spade LLC to a new MC authority in eight days with zero load-coverage downtime.",
      "Own load sourcing and rate negotiation via DAT and a 300+ brokerage network to protect margin and utilization.",
      "Run India overnight ops covering full US business hours; oversee GPS tracking, exceptions, drivers, and compliance.",
      "Built the company website (15 pages): responsive UI, quote form, EN/ES, SEO, and carrier-vetting flows.",
    ],
    chapters: [
      {
        title: "MC authority transition without downtime",
        body: "When the operation moved under Ajit Transport’s new MC authority, coverage could not slip. I coordinated truck IDs, insurance certificates, broker onboarding packets, ELD/GPS continuity, and same-day load handoffs so every active unit stayed productive. The cutover finished in eight days with no uncovered loads — brokers kept seeing the same reliability, drivers kept the same cadence, and the desk stayed calm under pressure.",
      },
      {
        title: "Desk leadership and overnight US coverage",
        body: "India-based overnight ops mean US Pacific morning arrives with a clean board: check-calls done, exceptions flagged, and next assignments queued. I set coverage targets, coach the two dispatchers on broker tone and HOS-aware planning, and step into rate fights or driver issues when the lane or the relationship needs senior judgment.",
      },
      {
        title: "Broker network and margin discipline",
        body: "Freight is sourced through DAT plus a network of 300+ brokerages (including major boards and national 3PLs). The job is not only booking volume — it is protecting RPM, deadhead, and driver hours while keeping shippers and brokers confident that the truck will show.",
      },
    ],
    skills: [
      "Fleet dispatch",
      "Rate negotiation",
      "FMCSA/DOT",
      "Team leadership",
      "MC transitions",
      "DAT",
      "Broker relations",
    ],
  },
  {
    slug: "king-spade-dispatch-manager",
    company: "King Spade LLC",
    location: "Kent, WA · Remote (US Pacific hours)",
    title: "Dispatch Manager",
    period: "April 2025 – June 2026",
    summary:
      "Grew a solo dry-van desk into a structured dispatch function — scaling to 12 active 53' trucks, recruiting and training two dispatchers, and building the Excel load tracker that became the operational source of truth.",
    highlights: [
      "Single-handedly dispatched a 53' dry-van fleet scaling to 12 active trucks — assignment, routing, and driver coordination.",
      "Booked freight via DAT and Uber Freight while building relationships across 300+ brokerages.",
      "Recruited and trained two dispatchers in 2026, converting a solo desk into a structured dispatch function.",
      "Built an advanced Excel load tracker for rates, lanes, brokers, and driver assignments.",
    ],
    chapters: [
      {
        title: "Scaling from solo desk to twelve trucks",
        body: "Early days meant every check-call, every tender, and every driver exception landed on one person. As trucks came on, I standardized assignment rules, preferred lanes (Pacific Northwest and Southwest), and a daily rhythm for morning coverage and afternoon re-power decisions so utilization stayed high without burning drivers out.",
      },
      {
        title: "Building the dispatch function",
        body: "Hiring two dispatchers was not just headcount — it was documenting how we talk to brokers, how we log rates, how we escalate detention, and how we protect HOS. Training focused on judgment calls: when to take a short haul to position, when to hold for a better RPM, and when to say no.",
      },
      {
        title: "Operational tooling",
        body: "The Excel load tracker captured rates, lanes, brokers, and assignments in a way the team could trust under pressure. It reduced missed follow-ups and made handoffs between shifts and between people explicit — the foundation for later overnight coverage models.",
      },
    ],
    skills: [
      "Dry-van ops",
      "Load planning",
      "Uber Freight",
      "DAT",
      "Excel tracking",
      "Hiring & training",
      "Driver coordination",
    ],
  },
  {
    slug: "gps-logistics-dispatcher",
    company: "GPS Logistics LLC",
    location: "Kent, WA · Remote (US Pacific hours)",
    title: "Dispatcher",
    period: "January 2024 – March 2025",
    summary:
      "Hands-on US long-haul dry-van dispatch — daily assignment, routing, check-calls, broker outreach, and load-board negotiation that built the operating instincts used in later manager roles.",
    highlights: [
      "Dispatched 53' dry-van drivers on US long-haul lanes with daily assignment, routing, and check-calls.",
      "Managed broker outreach and used load-board data plus negotiation to secure profitable freight.",
      "Built foundational habits: clear ETAs, honest exception communication, and disciplined board hygiene.",
    ],
    chapters: [
      {
        title: "Learning the board under live freight",
        body: "This chapter was apprenticeship by fire: matching trucks to lanes, calling brokers with a clean ask, and learning which loads look good on paper but fail on HOS or detention risk. Check-calls became a habit, not a checkbox — drivers knew someone was watching the clock with them.",
      },
      {
        title: "Broker outreach that sticks",
        body: "Relationships start with reliable information: accurate empty times, honest weight and equipment notes, and follow-through when something slips. That credibility compounded into faster callbacks when capacity was tight.",
      },
    ],
    skills: [
      "Check-calls",
      "Routing",
      "Broker outreach",
      "Load boards",
      "Driver communication",
      "Exception handling",
    ],
  },
];

export const earlierExperience = [
  {
    title: "IELTS Instructor",
    company: "Blue Leaf IELTS and Immigration, Punjab",
    period: "May – Dec 2023",
    note: "Communication coaching and structured instruction — transferable to driver coaching and clear broker/shipper updates.",
  },
  {
    title: "Computer Instructor & Lab Controller",
    company: "Miri Piri Khalsa Academy, Mansa",
    period: "Jul 2021 – Apr 2023",
    note: "Taught practical computer skills and ran lab operations — early ops discipline and tech literacy.",
  },
];

export type SkillCategory =
  | "Dispatch & Logistics"
  | "Compliance & Safety"
  | "Platforms & Tools"
  | "Leadership & Soft Skills"
  | "Technology";

export type Skill = {
  name: string;
  category: SkillCategory;
  level: "Working" | "Strong" | "Expert";
  markets: ("US/EU" | "India" | "Both")[];
  blurb: string;
};

export const skills: Skill[] = [
  { name: "53' dry-van long-haul dispatch", category: "Dispatch & Logistics", level: "Expert", markets: ["US/EU"], blurb: "Full-cycle assignment, routing, and coverage for US long-haul vans." },
  { name: "Load planning & lane strategy", category: "Dispatch & Logistics", level: "Expert", markets: ["Both"], blurb: "PNW/Southwest lane focus with deadhead and HOS-aware planning." },
  { name: "Rate negotiation", category: "Dispatch & Logistics", level: "Expert", markets: ["US/EU"], blurb: "Protect RPM and utilization across DAT and broker networks." },
  { name: "Broker & shipper communications", category: "Dispatch & Logistics", level: "Expert", markets: ["Both"], blurb: "Clear ETAs, exception honesty, and relationship follow-through." },
  { name: "Fleet utilization & re-power", category: "Dispatch & Logistics", level: "Strong", markets: ["US/EU"], blurb: "Keep trucks moving without burning drivers or margin." },
  { name: "Detention & accessorial handling", category: "Dispatch & Logistics", level: "Strong", markets: ["US/EU"], blurb: "Document, escalate, and recover time/money without burning relationships." },
  { name: "Check-call discipline", category: "Dispatch & Logistics", level: "Expert", markets: ["Both"], blurb: "Structured updates that surface problems early." },
  { name: "FMCSA / DOT awareness", category: "Compliance & Safety", level: "Strong", markets: ["US/EU"], blurb: "Operating awareness around authority, insurance, and roadside risk." },
  { name: "ELD / HOS awareness", category: "Compliance & Safety", level: "Strong", markets: ["US/EU"], blurb: "Plan freight that fits real hours, not wishful miles." },
  { name: "MC authority transition ops", category: "Compliance & Safety", level: "Strong", markets: ["US/EU"], blurb: "Cutover packets, broker onboarding, zero-downtime coverage." },
  { name: "Carrier vetting literacy", category: "Compliance & Safety", level: "Working", markets: ["US/EU"], blurb: "Familiar with FMCSA/SAFER/Highway/MyCarrierPortal style checks." },
  { name: "DAT Load Board", category: "Platforms & Tools", level: "Expert", markets: ["US/EU"], blurb: "Daily sourcing and market reads for dry-van freight." },
  { name: "Uber Freight carrier portal", category: "Platforms & Tools", level: "Strong", markets: ["US/EU"], blurb: "Booked and managed freight with strong on-time performance." },
  { name: "GPS tracking & exception monitoring", category: "Platforms & Tools", level: "Strong", markets: ["Both"], blurb: "Watch the board and intervene before a late becomes a claim." },
  { name: "Advanced Excel / Google Sheets", category: "Platforms & Tools", level: "Expert", markets: ["Both"], blurb: "Load trackers, rate logs, and shift handoff sources of truth." },
  { name: "TMS / routing literacy", category: "Platforms & Tools", level: "Working", markets: ["Both"], blurb: "Comfortable adopting carrier TMS and routing tools quickly." },
  { name: "Team leadership (dispatch desk)", category: "Leadership & Soft Skills", level: "Strong", markets: ["Both"], blurb: "Hired, trained, and set targets for a multi-dispatcher desk." },
  { name: "Driver coaching & calm escalation", category: "Leadership & Soft Skills", level: "Strong", markets: ["Both"], blurb: "Keep drivers informed and supported when plans break." },
  { name: "Process documentation / SOPs", category: "Leadership & Soft Skills", level: "Strong", markets: ["Both"], blurb: "Turn tribal knowledge into repeatable desk playbooks." },
  { name: "Cross-timezone remote ops", category: "Leadership & Soft Skills", level: "Expert", markets: ["Both"], blurb: "India overnight coverage aligned to US Pacific business hours." },
  { name: "Stakeholder negotiation", category: "Leadership & Soft Skills", level: "Strong", markets: ["Both"], blurb: "Brokers, drivers, and leadership — same facts, clear asks." },
  { name: "HTML / CSS / JavaScript", category: "Technology", level: "Working", markets: ["Both"], blurb: "Built multi-page carrier site with forms and SEO basics." },
  { name: "Responsive UI & SEO basics", category: "Technology", level: "Working", markets: ["India"], blurb: "Practical front-end for ops-facing web properties." },
  { name: "AI-assisted workflow tools", category: "Technology", level: "Working", markets: ["Both"], blurb: "Uses modern AI tools to speed research, drafts, and ops hygiene." },
  { name: "MCA technical foundation", category: "Technology", level: "Strong", markets: ["India"], blurb: "Master of Computer Applications — uncommon depth for a dispatch leader." },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "Guru Kashi University",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Guru Kashi University",
  },
];

export const certifications = [
  "IELTS (Apr 2023)",
  "Front-End Design Training — Softwizz Pvt. Ltd., Bathinda (2021)",
  "Web Development Internship — ThinkNEXT Technologies, Mohali (2024)",
];

/** Metrics from Harinder’s CV (Jan 2024 – Sep 2026 delivered loads). */
export const cvMetrics = [
  { label: "Freight revenue", value: "$3.93M", note: "$3,934,988.65 across 1,762 delivered loads · avg. $2,233 / load" },
  { label: "Fleet scale", value: "12 trucks", note: "53' dry vans; lead a 2-dispatcher team" },
  { label: "Broker network", value: "300+", note: "RXO, TQL, C.H. Robinson, J.B. Hunt, Arrive, Coyote, Uber Freight & more" },
  { label: "Reliability", value: "92.4% / 97%", note: "Load completion · on-time on Uber Freight" },
];

export const nav = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/skills", label: "Skills" },
  { href: "/markets/us-eu", label: "US/EU" },
  { href: "/markets/india", label: "India" },
  { href: "/playbooks", label: "Playbooks" },
  { href: "/proof", label: "Proof" },
  { href: "/resume", label: "Resume" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
