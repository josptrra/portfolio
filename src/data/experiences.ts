export interface Experience {
  hash: string;          // fake git hash, e.g. "f4a2d1e"
  branch?: string;       // e.g. "(HEAD -> main)" — only on current
  role: string;          // "Frontend Dev & PM"
  company: string;       // "Manggala"
  period: string;        // "Mar 2026 - Present"
  bullets: string[];     // detail items
  isCurrent: boolean;
}

export const experiences: Experience[] = [
  {
    hash: "f4a2d1e",
    branch: "(HEAD -> main)",
    role: "Frontend Dev & PM",
    company: "Manggala",
    period: "Mar 2026 - Present",
    bullets: [
      "Built CBT platform for SMA Titian Teras Jambi",
      "Led sprint planning via Jira",
      "Optimized exam engine with debounce mechanisms"
    ],
    isCurrent: true
  },
  {
    hash: "c7b9e3a",
    role: "Backend Dev",
    company: "Bangkit Academy 2024",
    period: "Sep 2024 - Jan 2025",
    bullets: [
      "Google × GoTo × Traveloka bootcamp",
      "Node.js + Express.js server-side development",
      "Integrated ML models into production app"
    ],
    isCurrent: false
  },
  {
    hash: "a1f8d2c",
    role: "Frontend Dev",
    company: "Digistar (Telkom Indonesia)",
    period: "Aug 2024 - Oct 2024",
    bullets: [
      "Selected from 12,000+ applicants",
      "Graduated as Top 29"
    ],
    isCurrent: false
  },
  {
    hash: "8e3c7b1",
    role: "Frontend Dev",
    company: "KOMINFO Palembang",
    period: "Jun 2024 - Aug 2024",
    bullets: [
      "Built responsive UI with Next.js + TailwindCSS",
      "Integrated Strapi CMS + React Query"
    ],
    isCurrent: false
  }
];
