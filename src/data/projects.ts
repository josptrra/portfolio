export interface Project {
  slug: string;
  folderName: string;     // display name in "ls" output
  title: string;          // full project title
  description: string;    // short description
  tech: string[];         // tech tags
  badge: string;          // e.g. "> In Production", "> 🏆 Runner-up"
  role?: string;          // role in project
  image?: string;         // image path
  detail: {
    problem: string;
    contributions: string[];
    links: { label: string; url: string }[];
  };
}

export const projects: Project[] = [
  {
    slug: "manggala-cbt",
    folderName: "manggala-cbt",
    title: "manggala-cbt",
    description: "Robust CBT platform for educational institutions.",
    tech: ["React", "Vite", "Node.js", "Postgres", "Tailwind CSS"],
    badge: "> In Production",
    role: "Frontend Developer & Project Manager",
    detail: {
      problem: "manggala-cbt is a comprehensive Computer-Based Testing (CBT) platform engineered specifically for educational institutions. Designed to handle high-concurrency examination scenarios, it ensures a seamless, secure, and robust testing environment for both administrators and students.\n\nThe system provides advanced proctoring features, real-time analytics, and automated grading pipelines, significantly reducing the administrative overhead associated with large-scale assessments.",
      contributions: [
        "Building robust CBT platform UI",
        "Leading sprint planning & execution",
        "Cross-functional coordination",
        "State management architecture"
      ],
      links: [
        { label: "GitHub", url: "https://github.com/josptrra" },
        { label: "Live Demo", url: "#" }
      ]
    }
  },
  {
    slug: "kasir-kilat",
    folderName: "kasir-kilat",
    title: "kasir-kilat",
    description: "Lightning fast Point-of-Sale system for SMEs.",
    tech: ["Next.js", "ShadCN", "TypeScript", "Tailwind CSS"],
    badge: "> 🏆 Runner-up",
    role: "Fullstack Developer",
    detail: {
      problem: "kasir-kilat is a high-performance Point of Sale (POS) system engineered for small to medium retail enterprises. Designed for speed and minimal transaction latency, it integrates real-time inventory synchronization with an intuitive touch-first UI.",
      contributions: [
        "Designed and implemented full POS UI with ShadCN components",
        "Real-time inventory management & offline sync",
        "Won Runner-up in Tech Euphoria WebDev Competition"
      ],
      links: [
        { label: "GitHub", url: "https://github.com/josptrra" }
      ]
    }
  },
  {
    slug: "aerotrack",
    folderName: "aerotrack",
    title: "aerotrack",
    description: "Real-time flight monitoring and data analytics pipeline.",
    tech: ["Python", "Data Pipeline", "FastAPI", "React"],
    badge: "> Thesis Project",
    role: "Data Engineer & Lead Developer",
    detail: {
      problem: "AeroTrack is an automated telemetry monitoring pipeline designed to ingest, parse, and visualize live commercial flight streams. Built as a university thesis project, it handles high-throughput spatial trajectory data.",
      contributions: [
        "Built data pipeline for real-time flight tracking",
        "Implemented interactive data visualization dashboard",
        "Optimized telemetry parsing performance"
      ],
      links: [
        { label: "GitHub", url: "https://github.com/josptrra" }
      ]
    }
  },
  {
    slug: "typewriter",
    folderName: "typewriter",
    title: "typewriter",
    description: "Accessible communication tool for deaf & hard-of-hearing communities.",
    tech: ["Web App", "Accessibility", "React", "Web Audio"],
    badge: "> AIESEC Vol.",
    role: "Frontend & Accessibility Engineer",
    detail: {
      problem: "Typewriter is an assistive accessibility tool built during an AIESEC community initiative to bridge communication gaps for deaf and hard-of-hearing individuals.",
      contributions: [
        "Learned sign language to understand real user accessibility needs",
        "Built accessible, high-contrast communication interface",
        "Implemented real-time speech-to-text visual stream"
      ],
      links: [
        { label: "GitHub", url: "https://github.com/josptrra" }
      ]
    }
  }
];
