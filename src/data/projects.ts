export interface Project {
  slug: string;
  folderName: string;     // display name in "ls" output
  title: string;          // full project title
  description: string;    // short description
  tech: string[];         // tech tags
  badge: string;          // e.g. "> In Production", "> 🏆 Runner-up"
  role?: string;          // role in project
  image?: string;         // primary image path
  images?: string[];      // multiple images gallery array
  detail: {
    problem: string;
    contributions: string[];
    links: { label: string; url: string }[];
  };
}


export const projects: Project[] = [];
