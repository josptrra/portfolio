import { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { TerminalLoader } from '../components/ui/TerminalLoader';
import { getProjectBySlug } from '../services/projectService';
import { type Project } from '../data/projects';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (!slug) return;

    setLoading(true);
    getProjectBySlug(slug).then((data) => {
      setProject(data);
      setActiveImgIdx(0);
      setLoading(false);
    });
  }, [slug]);

  const [isHovered, setIsHovered] = useState(false);

  const projectImages = project?.images && project.images.length > 0
    ? project.images
    : (project?.image ? [project.image] : []);

  // Auto-slide every 3.5 seconds (paused when hovered or modal open)
  useEffect(() => {
    if (!projectImages || projectImages.length <= 1 || isModalOpen || isHovered) return;

    const timer = setInterval(() => {
      setActiveImgIdx((prev) => (prev === projectImages.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(timer);
  }, [projectImages, isModalOpen, isHovered]);

  const handlePrevImg = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveImgIdx((prev) => (prev === 0 ? projectImages.length - 1 : prev - 1));
  };

  const handleNextImg = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveImgIdx((prev) => (prev === projectImages.length - 1 ? 0 : prev + 1));
  };

  // Keyboard Navigation: ESC to close, Left/Right arrows to slide
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsModalOpen(false);
      if (e.key === 'ArrowLeft') {
        setActiveImgIdx((prev) => (prev === 0 ? projectImages.length - 1 : prev - 1));
      }
      if (e.key === 'ArrowRight') {
        setActiveImgIdx((prev) => (prev === projectImages.length - 1 ? 0 : prev + 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [projectImages.length]);

  if (loading) {
    return <TerminalLoader />;
  }

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

        {/* 3. PROJECT MOCKUP PREVIEW IMAGE GALLERY WITH SLIDER */}
        <div className="space-y-3">
          <div
            onClick={() => setIsModalOpen(true)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="bg-surface/90 border border-border/80 rounded-2xl p-2 sm:p-3 shadow-2xl overflow-hidden group cursor-zoom-in relative"
          >
            <img
              key={activeImgIdx}
              src={projectImages[activeImgIdx]}
              alt={project.title}
              className="max-w-full h-auto mx-auto rounded-xl border border-border/40 transition-all duration-300 block shadow-md group-hover:scale-[1.005] animate-slide-in"
            />

            {/* Left & Right Slider Controls on Main Preview */}
            {projectImages.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrevImg}
                  aria-label="Previous Image"
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background border border-border/80 text-accent font-bold w-9 h-9 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100 hover:scale-110 cursor-pointer z-10 flex items-center justify-center text-lg"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={handleNextImg}
                  aria-label="Next Image"
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background border border-border/80 text-accent font-bold w-9 h-9 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100 hover:scale-110 cursor-pointer z-10 flex items-center justify-center text-lg"
                >
                  ›
                </button>
              </>
            )}

            <div className="absolute top-4 right-4 bg-background/80 border border-border/60 text-accent text-[10px] font-mono px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-xs flex items-center gap-1.5 shadow-sm pointer-events-none">
              <span>🔍 click to expand</span>
            </div>
          </div>

          {/* Gallery Thumbnails (Rendered if > 1 image) */}
          {projectImages.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-2 pt-1">
              {projectImages.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImgIdx(idx)}
                  className={`w-20 h-14 rounded-lg overflow-hidden border-2 transition-all cursor-pointer p-0 shrink-0 bg-surface ${
                    activeImgIdx === idx
                      ? 'border-accent shadow-[0_0_10px_rgba(0,255,102,0.4)] opacity-100 scale-105'
                      : 'border-border/60 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Preview ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
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

      {/* 8. NEAR-FULLSCREEN IMAGE LIGHTBOX MODAL */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-background/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-fade-in"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-surface/95 border border-border/90 rounded-2xl max-w-6xl w-full max-h-[92vh] flex flex-col overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Window Header */}
            <div className="flex items-center justify-between text-xs font-mono border-b border-border/60 px-5 py-3.5 shrink-0 bg-background/60">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                <span className="text-muted text-[11px] ml-2 font-mono">
                  ~/projects/{project.slug}/full_view_{activeImgIdx + 1}.png
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="text-muted hover:text-accent font-mono text-xs cursor-pointer bg-transparent border border-border/60 hover:border-accent/40 px-3 py-1 rounded-lg transition-all"
              >
                [ESC] CLOSE ✕
              </button>
            </div>

            {/* Modal Image Viewport with Slider Controls */}
            <div className="p-4 md:p-6 overflow-auto flex items-center justify-center grow bg-background/40 relative">
              {projectImages.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={handlePrevImg}
                    aria-label="Previous Image"
                    className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background border border-border/80 text-accent font-bold w-11 h-11 rounded-full shadow-2xl transition-all hover:scale-110 cursor-pointer z-20 flex items-center justify-center text-xl"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={handleNextImg}
                    aria-label="Next Image"
                    className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background border border-border/80 text-accent font-bold w-11 h-11 rounded-full shadow-2xl transition-all hover:scale-110 cursor-pointer z-20 flex items-center justify-center text-xl"
                  >
                    ›
                  </button>
                </>
              )}

              <img
                key={activeImgIdx}
                src={projectImages[activeImgIdx]}
                alt={`${project.title} Full View`}
                className="max-w-full max-h-[78vh] object-contain rounded-xl shadow-2xl border border-border/40 animate-slide-in"
              />
            </div>

            {/* Bottom Thumbnail Bar inside Modal if > 1 image */}
            {projectImages.length > 1 && (
              <div className="border-t border-border/60 px-4 py-2.5 flex items-center justify-between gap-4 font-mono text-xs bg-background/80 shrink-0">
                <div className="flex items-center gap-2 overflow-x-auto">
                  {projectImages.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImgIdx(idx)}
                      className={`w-14 h-10 rounded-md overflow-hidden border transition-all cursor-pointer p-0 shrink-0 ${
                        activeImgIdx === idx
                          ? 'border-accent shadow-[0_0_8px_rgba(0,255,102,0.4)] opacity-100'
                          : 'border-border/60 opacity-50 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`Thumb ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
                <span className="text-muted text-[11px] shrink-0 font-mono">
                  {activeImgIdx + 1} of {projectImages.length}
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
