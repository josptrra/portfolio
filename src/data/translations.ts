export type Lang = 'en' | 'id';

export const translations: Record<Lang, Record<string, Record<string, string>>> = {
  en: {
    hero: {
      subtitle: "Software Engineer & Builder",
      current: "Currently: Fullstack Dev · Building CBT platforms",
      previous: "Previously: Bangkit 2024 · Telkom Digistar · KOMINFO",
      status: "Open to opportunities. Based in Palembang, ID.",
      cta_projects: "View Projects ↓",
      cta_cv: "Download CV"
    },
    about: {
      name_desc: "fullstack developer & problem solver",
      synopsis: "julio [--build] [--lead] [--learn]",
      description: "Computer Science student at Universitas Sriwijaya (GPA: 3.95/4.00) who builds things that work. From government platforms to CBT systems, from teaching deaf communities to winning hackathons.",
      personality: "Doesn't believe in skill percentage bars. Believes in shipping.",
      aiesec: "Once learned sign language to teach. Still building tools to communicate."
    },
    experience: {
      title: "Career Log"
    },
    projects: {
      title: "Projects"
    },
    stack: {
      title: "Tech Stack"
    },
    awards: {
      title: "Achievements"
    },
    contact: {
      status: "Open to opportunities",
      location: "Palembang, Indonesia",
      quote_1: "Good code speaks for itself.",
      quote_2: "Great engineers speak for their team."
    },
    nav: {
      about: "about",
      experience: "experience",
      projects: "projects",
      stack: "stack",
      awards: "awards",
      contact: "contact"
    },
    project_detail: {
      back: "cd ..",
      problem: "Problem",
      tech: "Tech Stack",
      contributions: "Key Contributions",
      links: "Links"
    }
  },
  id: {
    hero: {
      subtitle: "Software Engineer & Builder",
      current: "Saat ini: Fullstack Dev · Membangun platform CBT",
      previous: "Sebelumnya: Bangkit 2024 · Telkom Digistar · KOMINFO",
      status: "Terbuka untuk kesempatan baru. Berbasis di Palembang.",
      cta_projects: "Lihat Proyek ↓",
      cta_cv: "Unduh CV"
    },
    about: {
      name_desc: "fullstack developer & problem solver",
      synopsis: "julio [--build] [--lead] [--learn]",
      description: "Mahasiswa Teknik Informatika di Universitas Sriwijaya (IPK: 3.95/4.00) yang membangun hal-hal yang bekerja. Dari platform pemerintah hingga sistem CBT, dari mengajar komunitas tuli hingga memenangkan hackathon.",
      personality: "Tidak percaya skill percentage bars. Percaya pada shipping.",
      aiesec: "Pernah belajar bahasa isyarat untuk mengajar. Masih membangun alat untuk berkomunikasi."
    },
    experience: {
      title: "Riwayat Karir"
    },
    projects: {
      title: "Proyek"
    },
    stack: {
      title: "Tech Stack"
    },
    awards: {
      title: "Pencapaian"
    },
    contact: {
      status: "Terbuka untuk kesempatan",
      location: "Palembang, Indonesia",
      quote_1: "Kode yang baik berbicara untuk dirinya sendiri.",
      quote_2: "Engineer hebat berbicara untuk timnya."
    },
    nav: {
      about: "tentang",
      experience: "pengalaman",
      projects: "proyek",
      stack: "stack",
      awards: "prestasi",
      contact: "kontak"
    },
    project_detail: {
      back: "cd ..",
      problem: "Masalah",
      tech: "Tech Stack",
      contributions: "Kontribusi Utama",
      links: "Tautan"
    }
  }
};
