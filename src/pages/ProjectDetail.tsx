import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { projects } from '../data/projects';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();

  // Scroll to top when page mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  // Lookup project by slug
  const project = projects.find((p) => p.slug === slug);

  // Redirect to home if slug is invalid
  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-background text-text flex flex-col justify-between font-sans">
      <Navbar />

      <main className="pt-28 pb-20 px-4 md:px-8 max-w-4xl mx-auto w-full grow space-y-10">
        
        {/* 1. TOP CLI COMMAND PROMPT */}
        <div className="font-mono text-xs md:text-sm text-text flex items-center gap-2">
          <span className="text-accent font-bold">$</span>
          <span>cat ~/projects/{project.slug}/README.md</span>
          <span className="w-2 h-4 bg-accent animate-pulse inline-block" />
        </div>

        {/* 2. TITLE & DESCRIPTION */}
        <div className="space-y-2">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-text tracking-tight">
            {project.title}
          </h1>
          <p className="font-mono text-xs md:text-sm text-muted font-medium">
            {project.description}
          </p>
        </div>

        {/* 3. PROJECT MOCKUP PREVIEW IMAGE */}
        <div className="bg-surface/90 border border-border/80 rounded-2xl p-2 sm:p-3 shadow-2xl overflow-hidden group">
          <img
            src={project.image || "/images/manggala-cbt.png"}
            alt={project.title}
            className="w-full h-auto rounded-xl object-cover border border-border/40"
          />
        </div>

        {/* 4. OVERVIEW SECTION */}
        <section className="space-y-3">
          <h2 className="font-mono text-lg md:text-xl font-bold text-text flex items-center gap-2">
            <span className="text-accent font-bold">#</span>
            <span>Overview</span>
          </h2>
          <div className="font-sans text-xs md:text-sm text-text/90 leading-relaxed space-y-3 whitespace-pre-line font-normal">
            {project.detail.problem}
          </div>
        </section>

        {/* 5. TECH STACK SECTION */}
        <section className="space-y-3">
          <h2 className="font-mono text-lg md:text-xl font-bold text-text flex items-center gap-2">
            <span className="text-accent font-bold">#</span>
            <span>Tech Stack</span>
          </h2>
          <div className="flex flex-wrap gap-2.5 font-mono text-xs">
            {project.tech.map((t, idx) => (
              <span
                key={idx}
                className="bg-surface/80 border border-border/80 px-3.5 py-1.5 rounded-xl text-text font-medium flex items-center gap-1.5 shadow-sm"
              >
                <span className="text-accent font-bold">&gt;</span>
                <span>{t}</span>
              </span>
            ))}
          </div>
        </section>

        {/* 6. ROLE & CONTRIBUTIONS 2-COLUMN SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-2">
          
          {/* Role */}
          <section className="md:col-span-5 space-y-3">
            <h2 className="font-mono text-lg md:text-xl font-bold text-text flex items-center gap-2">
              <span className="text-accent font-bold">#</span>
              <span>Role</span>
            </h2>
            <p className="font-mono text-xs md:text-sm text-text/90 font-medium">
              {project.role || "Frontend Developer & Project Manager"}
            </p>
          </section>

          {/* Contributions */}
          <section className="md:col-span-7 space-y-3">
            <h2 className="font-mono text-lg md:text-xl font-bold text-text flex items-center gap-2">
              <span className="text-accent font-bold">#</span>
              <span>Contributions</span>
            </h2>
            <ul className="space-y-2.5 font-mono text-xs md:text-sm text-text/90">
              {project.detail.contributions.map((c, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-accent font-bold shrink-0">→</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </section>

        </div>

        {/* 7. LINKS & ARTIFACTS BUTTONS */}
        {project.detail.links && project.detail.links.length > 0 && (
          <div className="pt-8 border-t border-border/60 flex items-center gap-3.5 font-mono text-xs">
            {project.detail.links.map((link, idx) => {
              const isPrimary = idx === 0;

              return (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`px-4 py-2.5 rounded-xl font-bold transition-all flex items-center gap-2 shadow-sm ${
                    isPrimary
                      ? 'bg-accent/10 hover:bg-accent/20 border border-accent text-accent shadow-[0_0_15px_rgba(0,255,102,0.1)]'
                      : 'bg-surface hover:bg-surface/80 border border-border/80 text-text hover:text-accent'
                  }`}
                >
                  <span>[{link.label}]</span>
                  <span>→</span>
                </a>
              );
            })}
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
}
