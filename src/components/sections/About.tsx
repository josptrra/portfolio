import { useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';

export function About() {
  const { t } = useLanguage();
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="min-h-screen py-24 px-4 md:px-8 max-w-6xl mx-auto flex flex-col justify-center">
      {/* Section Header Bar */}
      <div className="mb-6 flex items-center justify-between font-mono text-xs text-muted border-b border-border/80 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
          <span className="text-accent font-bold tracking-[0.2em] text-glow-sm">
            // SIGNAL_INTERCEPT :: PROFILE_RENDER
          </span>
        </div>
        <span className="hidden sm:block text-muted">SIGNAL_ID: #JSP-2026-PHOSPHOR</span>
      </div>

      {/* Main Signal Profile Card */}
      <div className="space-y-6 animate-fade-in">
        {/* Hero Card: Photo (4 col) + Editorial Content (8 col) */}
        <div className="bg-surface border border-border hover:border-accent/40 transition-all duration-500 rounded-2xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* LEFT: Photo Frame Container (lg:col-span-4) */}
            <div className="lg:col-span-4 p-4 md:p-6 lg:p-7 flex flex-col items-center justify-center bg-background/40 relative border-b lg:border-b-0 lg:border-r border-border/60 group/signal">
              <div className="relative w-full max-w-[320px] aspect-4/5 sm:aspect-3/4 rounded-xl overflow-hidden border border-border/90 shadow-xl group/photo">
                {!imgError ? (
                  <img
                    src="/profile.webp"
                    alt="Julio Syah Putra"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/signal:scale-[1.04]"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-linear-to-br from-background via-surface to-background">
                    <div className="w-20 h-20 rounded-full border-2 border-dashed border-accent/30 flex items-center justify-center mb-3">
                      <svg className="w-10 h-10 text-accent/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                    <span className="font-mono text-[10px] text-accent/80 font-bold tracking-widest text-glow-sm">SIGNAL_PHOTO_SLOT</span>
                    <p className="font-mono text-[9px] text-muted mt-1">public/profile.jpg</p>
                  </div>
                )}

                {/* Viewfinder Corner Brackets */}
                <div className="absolute top-2.5 left-2.5 w-4 h-4 border-t-2 border-l-2 border-accent/70" />
                <div className="absolute top-2.5 right-2.5 w-4 h-4 border-t-2 border-r-2 border-accent/70" />
                <div className="absolute bottom-2.5 left-2.5 w-4 h-4 border-b-2 border-l-2 border-accent/70" />
                <div className="absolute bottom-2.5 right-2.5 w-4 h-4 border-b-2 border-r-2 border-accent/70" />

                {/* Infinite Looping Laser Scan Sweep Line on Hover */}
                <div className="absolute left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-accent to-transparent opacity-0 group-hover/signal:opacity-100 group-hover/signal:animate-laser-scan pointer-events-none shadow-glow-sm" />
              </div>

              {/* Dynamic Signal Status Badge: SEARCHING on Idle -> SIGNAL LOCKED on Hover */}
              <div className="mt-4 inline-flex items-center font-mono text-[10px] rounded-full shadow-sm transition-all duration-300 bg-background border border-accent-alt/40 text-accent-alt px-3.5 py-1.5 group-hover/signal:border-accent/50 group-hover/signal:text-accent">
                {/* Default Idle State: Searching Frequency */}
                <div className="flex items-center gap-2 group-hover/signal:hidden">
                  <span className="w-2 h-2 rounded-full bg-accent-alt animate-ping" />
                  <span className="tracking-wider font-semibold">SEARCHING SIGNAL...</span>
                </div>
                {/* Hovered State: Signal Locked */}
                <div className="hidden group-hover/signal:flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-glow-sm" />
                  <span className="tracking-wider font-bold text-glow-sm">SIGNAL LOCKED</span>
                </div>
              </div>
            </div>

            {/* RIGHT: Editorial Typography & Clean Spec Sheet (lg:col-span-8) */}
            <div className="lg:col-span-8 p-6 md:p-10 flex flex-col justify-between">
              <div>
                {/* Overline index */}
                <div className="font-mono text-[11px] text-accent font-bold tracking-wider mb-2 text-glow-sm">
                  01 // BIOGRAPHY_SPECS
                </div>

                {/* Name Block */}
                <div className="mb-6">
                  <h2 className="font-display text-4xl md:text-5xl font-black text-text tracking-tight leading-[0.95] mb-2">
                    JULIO<br />
                    <span className="text-accent text-glow-sm">SYAH PUTRA</span>
                  </h2>
                  <div className="flex items-center gap-3 mt-3">
                    <div className="h-[2px] w-10 bg-accent-alt" />
                    <span className="font-mono text-xs text-accent-alt font-bold tracking-wider">FULLSTACK SOFTWARE ENGINEER</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-text/85 font-sans text-sm md:text-base leading-relaxed mb-8 max-w-xl">
                  {t('about', 'description')}
                </p>

                {/* Clean Monospace Spec Lines */}
                <div className="space-y-3 font-mono text-xs border-t border-border/60 pt-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-border/40 pb-2.5">
                    <span className="text-muted text-[11px]">UNIVERSITY</span>
                    <span className="text-text font-semibold flex items-center gap-2">
                      <span>Universitas Sriwijaya</span>
                      <span className="text-accent font-bold text-glow-sm">[ IPK 3.95/4.00 ]</span>
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-border/40 pb-2.5">
                    <span className="text-muted text-[11px]">TRACK RECORD</span>
                    <span className="text-text font-semibold">Bangkit 2024 • Telkom Digistar • KOMINFO</span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-border/40 pb-2.5">
                    <span className="text-muted text-[11px]">CORE FOCUS</span>
                    <span className="text-accent-alt font-semibold">CBT Platform Engines & Gov Systems</span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-1">
                    <span className="text-muted text-[11px]">LOCATION</span>
                    <span className="text-text font-semibold">Palembang, Indonesia <span className="text-muted font-normal">[ WIB / UTC+7 ]</span></span>
                  </div>
                </div>
              </div>

              {/* Philosophy accent footer */}
              <div className="mt-6 pt-4 border-t border-border/50 text-xs text-muted font-mono italic">
                "{t('about', 'personality')}"
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip: Quote + Status */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Quote Block (Vertically Centered) */}
          <div className="md:col-span-7 bg-surface border border-border border-l-2 border-l-accent-alt rounded-r-xl p-5 flex items-center gap-4 hover:border-accent/40 transition-all shadow-md">
            <div className="w-9 h-9 rounded-lg border border-accent-alt/30 flex items-center justify-center shrink-0">
              <svg className="w-4.5 h-4.5 text-accent-alt" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21" />
                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3" />
              </svg>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-text/90 font-sans text-xs md:text-sm italic leading-relaxed">
                "{t('about', 'aiesec')}"
              </p>
              <p className="text-muted font-mono text-[10px] mt-1.5 tracking-wider">// COMMUNITY_IMPACT</p>
            </div>
          </div>

          {/* Status Metric Card */}
          <div className="md:col-span-5 bg-surface border border-border rounded-xl p-5 flex flex-col justify-center hover:border-accent/40 transition-all shadow-md font-mono">
            <div className="text-[10px] text-muted mb-2 tracking-wider">// CURRENT_STATUS</div>
            <div className="flex items-center gap-2.5 mb-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse shadow-glow-sm" />
              <span className="text-accent font-bold text-xs md:text-sm text-glow-sm">AVAILABLE FOR HIRE</span>
            </div>
            <div className="flex items-center gap-3 text-[10px] text-muted">
              <a href="#experience" className="text-accent-alt hover:text-accent transition-colors underline underline-offset-2 decoration-border">experience(1)</a>
              <span>/</span>
              <a href="#projects" className="text-accent-alt hover:text-accent transition-colors underline underline-offset-2 decoration-border">projects(1)</a>
              <span>/</span>
              <a href="#stack" className="text-accent-alt hover:text-accent transition-colors underline underline-offset-2 decoration-border">stack(1)</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
