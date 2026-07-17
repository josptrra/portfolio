export interface TechEntry {
  key: string;          // e.g. "DAILY_DRIVERS"
  values: string;       // e.g. "React, Next.js, TypeScript"
  usedIn?: string[];    // tooltip: projects where used
}

export interface TechCategory {
  comment: string;      // e.g. "# Frontend"
  entries: TechEntry[];
}

export const techStack: TechCategory[] = [
  {
    comment: "# Frontend",
    entries: [
      { key: "DAILY_DRIVERS", values: "React, Next.js, TypeScript", usedIn: ["Manggala CBT", "Kasir Kilat"] },
      { key: "STYLING", values: "TailwindCSS, CSS3, ShadCN UI", usedIn: ["KOMINFO", "Kasir Kilat"] }
    ]
  },
  {
    comment: "# Backend",
    entries: [
      { key: "SERVER", values: "Node.js, Express.js", usedIn: ["Bangkit Academy"] },
      { key: "DATABASE", values: "PostgreSQL, MySQL, Firebase", usedIn: ["Manggala CBT", "Bangkit Academy"] }
    ]
  },
  {
    comment: "# Languages",
    entries: [
      { key: "FLUENT", values: "JavaScript, TypeScript, Python" },
      { key: "CONVERSATIONAL", values: "PHP, Java" }
    ]
  },
  {
    comment: "# Tools & Platform",
    entries: [
      { key: "TOOLS", values: "Git, Jira, Figma" },
      { key: "CLOUD", values: "Firebase, Google Cloud", usedIn: ["Bangkit Academy"] }
    ]
  }
];
