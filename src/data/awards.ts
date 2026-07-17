export interface Award {
  date: string;          // e.g. "2024-11"
  icon: string;          // emoji: "🏆", "✓", "●"
  title: string;
  description: string;
}

export const awards: Award[] = [
  {
    date: "2024-11",
    icon: "🏆",
    title: "Runner-up — Tech Euphoria WebDev",
    description: "Competition. Built \"Kasir Kilat\" POS."
  },
  {
    date: "2024-10",
    icon: "✓",
    title: "Graduated Top 29 — Digistar Class",
    description: "by Telkom Indonesia (from 12,000+)"
  },
  {
    date: "2024-09",
    icon: "✓",
    title: "Selected — Bangkit Academy 2024",
    description: "by Google × GoTo × Traveloka"
  },
  {
    date: "2022-08",
    icon: "●",
    title: "Started — CS @ Universitas Sriwijaya",
    description: "Current GPA: 3.95/4.00"
  }
];
