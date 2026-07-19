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
    type: "Contract / Remote",
    period: "Mar 2026 - Present",
    description: "Architected and engineered a high-throughput Computer-Based Testing (CBT) platform tailored for educational institutions. Overseeing sprint lifecycles and cross-functional team execution.",
    bullets: [
      "Designed real-time CBT exam platform serving high-concurrent student sessions.",
      "Implemented debounced auto-save mechanisms to eliminate test submission data loss.",
      "Led weekly sprint planning and task allocation via Jira for 5 cross-functional developers."
    ],
    skills: ["React", "TypeScript", "TailwindCSS", "Jira", "State Management"],
    stat: "Built CBT Engine",
    isCurrent: true
  },
  {
    hash: "c7b9e3a",
    role: "Backend Developer",
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
    company: "Digistar (Telkom Indonesia)",
    type: "Mentorship & Internship",
    period: "Aug 2024 - Oct 2024",
    description: "Selected as one of the top candidates out of 12,000+ national applicants in Telkom's flagship tech accelerator program.",
    bullets: [
      "Developed high-performance web dashboard interfaces using React and modern CSS systems.",
      "Collaborated with senior Telkom engineers to implement accessibility & UI component libraries.",
      "Graduated among the top-tier candidates in frontend engineering excellence."
    ],
    skills: ["React", "JavaScript (ES6+)", "Component Design", "UI/UX", "Git Workflow"],
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
      "Reduced initial page load speed by 35% through image optimization & server-side rendering."
    ],
    skills: ["Next.js", "Strapi CMS", "React Query", "TailwindCSS", "SSR"],
    stat: "35% Faster Page Load",
    isCurrent: false
  }
];



