export interface Project {
  slug: string;
  folderName: string;     // display name in "ls" output
  title: string;          // full project title
  description: string;    // short description
  tech: string[];         // tech tags
  badge: string;          // e.g. "> In Production", "> 🏆 Runner-up"
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
    title: "Manggala CBT Platform",
    description: "CBT Platform",
    tech: ["React", "Vite", "TypeScript"],
    badge: "> In Production",
    detail: {
      problem: "SMA Titian Teras Jambi needed a reliable Computer-Based Test platform...",
      contributions: [
        "Built the entire frontend architecture with React + Vite",
        "Implemented exam engine with auto-save and debounce",
        "Led sprint planning and task management via Jira"
      ],
      links: [
        { label: "GitHub", url: "#" },
        { label: "Live Demo", url: "#" }
      ]
    }
  },
  {
    slug: "kasir-kilat",
    folderName: "kasir-kilat",
    title: "Kasir Kilat — POS System",
    description: "POS System",
    tech: ["Next.js", "ShadCN", "TypeScript"],
    badge: "> 🏆 Runner-up",
    detail: {
      problem: "Built for Tech Euphoria WebDev Competition...",
      contributions: [
        "Designed and implemented full POS UI with ShadCN components",
        "Real-time inventory management",
        "Won Runner-up in competition"
      ],
      links: [
        { label: "GitHub", url: "#" }
      ]
    }
  },
  {
    slug: "aerotrack",
    folderName: "aerotrack",
    title: "AeroTrack — Flight Monitor",
    description: "Flight Monitor",
    tech: ["Python", "Data Pipeline"],
    badge: "> Thesis Project",
    detail: {
      problem: "Thesis project for monitoring flight data...",
      contributions: [
        "Built data pipeline for real-time flight tracking",
        "Implemented data visualization dashboard"
      ],
      links: [
        { label: "GitHub", url: "#" }
      ]
    }
  },
  {
    slug: "typewriter",
    folderName: "typewriter",
    title: "Typewriter — Communication Tool",
    description: "Communication Tool for Deaf",
    tech: ["Web App", "Accessibility"],
    badge: "> AIESEC Vol.",
    detail: {
      problem: "Built during AIESEC volunteer program to help deaf communities communicate...",
      contributions: [
        "Learned sign language to understand user needs",
        "Built accessible communication interface"
      ],
      links: [
        { label: "GitHub", url: "#" }
      ]
    }
  }
];
