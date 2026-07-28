export interface Experience {
  hash: string;
  branch?: string;
  role: string;
  company: string;
  type: string;
  period: string;
  description: string;
  bullets: string[];
  skills: string[];
  stat?: string;
  isCurrent: boolean;
}

export const experiences: Experience[] = [
  {
    hash: "f4a2d1e",
    branch: "(HEAD -> main)",
    role: "Frontend Dev & Project Manager",
    company: "Manggala Team",
    type: "Freelance",
    period: "Mar 2026 - Present",
    description: "Architected and engineered a high-throughput Computer-Based Testing (CBT) platform tailored for educational institutions. Overseeing sprint lifecycles and cross-functional team execution.",
    bullets: [
      "Designed real-time CBT exam platform serving high-concurrent student sessions.",
      "Implemented debounced auto-save mechanisms to eliminate test submission data loss.",
      "Collaborated and aligned sprint planning and task allocation via Jira for 3 cross-functional developers."
    ],
    skills: ["React", "TypeScript", "TailwindCSS", "Jira", "State Management"],
    stat: "Built CBT Engine",
    isCurrent: true
  },
  {
    hash: "c7b9e3a",
    role: "Cloud Engineer & Backend Developer",
    company: "Bangkit Academy (Google, GoTo, Traveloka)",
    type: "Bootcamp / Specialization",
    period: "Sep 2024 - Jan 2025",
    description: "Selected for the intensive Google-led cloud backend engineering path. Developed robust RESTful microservices and integrated machine learning inference endpoints.",
    bullets: [
      "Engineered scalable Node.js & Express REST APIs deployed on Google Cloud Platform.",
      "Integrated machine learning inference API endpoints for computer vision features.",
      "Constructed secure JWT-based authentication pipelines and database schemas."
    ],
    skills: ["Node.js", "Express.js", "GCP", "REST API", "JWT", "PostgreSQL"],
    stat: "Cloud & Backend Path",
    isCurrent: false
  },
  {
    hash: "a1f8d2c",
    role: "Frontend Developer",
    company: "Digistar Class by Telkom Indonesia",
    type: "Mentorship & Internship",
    period: "Aug 2024 - Oct 2024",
    description: "Selected as one of the top candidates out of 12,000+ national applicants in Telkom's flagship tech accelerator program.",
    bullets: [
      "Graduated in the Top 29 final candidates out of 500 mentee.",
      "Developed real-world company case study prototypes using React and JavaScript within a collaborative team.",
      "Structured Lean Canvas and Business Model Canvas (BMC) for product validation, rapid prototyping, and final pitching."
    ],
    skills: ["React", "JavaScript", "Lean Canvas", "Business Model Canvas", "Product Management", "Leadership"],
    stat: "Top 29 from 12,000+ Applicants",
    isCurrent: false
  },
  {
    hash: "8e3c7b1",
    role: "Frontend Developer",
    company: "KOMINFO Palembang",
    type: "Government Internship",
    period: "Jun 2024 - Aug 2024",
    description: "Engineered official public-facing government web portals and internal administration systems with headless CMS integration.",
    bullets: [
      "Built responsive, accessible web portals using Next.js, React Query, and TailwindCSS.",
      "Connected Strapi headless CMS content structures for dynamic municipal news publishing.",
    ],
    skills: ["Next.js", "Strapi CMS", "React Query", "TailwindCSS", "SSR"],
    stat: "Municipal Web Portal",
    isCurrent: false
  }
];



