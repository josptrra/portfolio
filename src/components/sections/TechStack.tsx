import { useState } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { TechIcon } from '../ui/TechIcon';

interface TechItem {
  name: string;
  label: string;
  role: string;
  usedIn?: string[];
}

interface TechDomain {
  id: string;
  title: string;
  overline: string;
  items: TechItem[];
}

const domainsData: TechDomain[] = [
  {
    id: 'frontend',
    overline: '01 // FRONTEND_SYSTEMS',
    title: 'Frontend Architecture',
    items: [
      { name: 'React', label: 'React.js', role: 'PRIMARY FRAMEWORK', usedIn: ['Manggala CBT', 'Kasir Kilat'] },
      { name: 'Next.js', label: 'Next.js', role: 'FULLSTACK & SSR', usedIn: ['KOMINFO', 'Kasir Kilat'] },
      { name: 'TypeScript', label: 'TypeScript', role: 'TYPE SAFETY & DX', usedIn: ['Manggala CBT', 'Kasir Kilat'] },
      { name: 'TailwindCSS', label: 'Tailwind CSS', role: 'DESIGN SYSTEM & UI', usedIn: ['All Projects'] }
    ]
  },
  {
    id: 'backend',
    overline: '02 // BACKEND_SERVICES',
    title: 'Backend & Database',
    items: [
      { name: 'Node.js', label: 'Node.js', role: 'SERVER RUNTIME', usedIn: ['Bangkit Academy'] },
      { name: 'Express.js', label: 'Express.js', role: 'RESTFUL API ENGINE', usedIn: ['Bangkit Academy'] },
      { name: 'PostgreSQL', label: 'PostgreSQL', role: 'RELATIONAL STORAGE', usedIn: ['Manggala CBT', 'Bangkit'] },
      { name: 'Firebase', label: 'Firebase', role: 'REALTIME BAAS & AUTH', usedIn: ['Bangkit Capstone'] }
    ]
  },
  {
    id: 'languages',
    overline: '03 // CORE_LANGUAGES',
    title: 'Languages & Protocols',
    items: [
      { name: 'Python', label: 'Python', role: 'DATA & ML PIPELINES', usedIn: ['AeroTrack Thesis'] },
      { name: 'JavaScript', label: 'JavaScript (ES6+)', role: 'CORE WEB STANDARD', usedIn: ['All Projects'] },
      { name: 'REST API', label: 'REST API & JWT', role: 'INTERFACE CONTRACT', usedIn: ['CBT & Gov Systems'] }
    ]
  },
  {
    id: 'toolchain',
    overline: '04 // DEVOPS_TOOLCHAIN',
    title: 'Tools & Infrastructure',
    items: [
      { name: 'Git', label: 'Git & GitHub', role: 'VERSION CONTROL', usedIn: ['Daily Workflow'] },
      { name: 'Figma', label: 'Figma', role: 'UI/UX & PROTOTYPING', usedIn: ['Design Systems'] },
      { name: 'Google Cloud', label: 'Google Cloud (GCP)', role: 'CLOUD INFRASTRUCTURE', usedIn: ['Bangkit Academy'] },
      { name: 'Jira', label: 'Jira & Agile', role: 'SPRINT MANAGEMENT', usedIn: ['Manggala PM'] }
    ]
  }
];

// Theme matching the portfolio dark phosphor palette
const calendarTheme = {
  light: ['#121214', '#143823', '#1e633a', '#29a356', '#00ff66'],
  dark: ['#121214', '#143823', '#1e633a', '#29a356', '#00ff66'],
};

export function TechStack() {
  const [viewMode, setViewMode] = useState<'cards' | 'cli'>('cards');

  return (
    <section id="stack" className="min-h-screen py-24 px-4 md:px-8 max-w-6xl mx-auto flex flex-col justify-center">
      {/* Top Section Command Bar */}
      <div className="mb-6 flex items-center justify-between font-mono text-xs text-muted border-b border-border/80 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
          <span className="text-accent font-bold tracking-wider text-glow-sm">
            // LIVE_TELEMETRY :: STACK_SPECS
          </span>
        </div>

        {/* View Mode Switcher Buttons */}
        <div className="flex items-center gap-2 bg-surface p-1 rounded-lg border border-border">
          <button
            onClick={() => setViewMode('cards')}
            className={`px-3 py-1 rounded text-[11px] font-mono transition-all cursor-pointer ${
              viewMode === 'cards'
                ? 'bg-accent/20 border border-accent/40 text-accent font-bold text-glow-sm'
                : 'text-muted hover:text-text'
            }`}
          >
            [ DOMAIN_GRID ]
          </button>
          <button
            onClick={() => setViewMode('cli')}
            className={`px-3 py-1 rounded text-[11px] font-mono transition-all cursor-pointer ${
              viewMode === 'cli'
                ? 'bg-accent/20 border border-accent/40 text-accent font-bold text-glow-sm'
                : 'text-muted hover:text-text'
            }`}
          >
            [ ~/.techrc ]
          </button>
        </div>
      </div>

      <div className="space-y-10 animate-fade-in">
        {/* 1. REAL GITHUB CONTRIBUTIONS VIA REACT-GITHUB-CALENDAR */}
        <div className="bg-surface border border-border rounded-2xl p-5 md:p-7 shadow-2xl hover:border-accent/40 transition-all duration-500">
          {/* Header */}
          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-background border border-border/80 flex items-center justify-center shrink-0 shadow-md">
                <svg className="w-5 h-5 text-text" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-2.5">
                  <h3 className="font-display text-lg md:text-xl font-bold text-text">GitHub Contributions</h3>
                  <span className="inline-flex items-center gap-1.5 bg-accent/10 border border-accent/30 text-accent font-mono text-[10px] px-2.5 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    react-github-calendar
                  </span>
                </div>
                <p className="font-mono text-[11px] text-muted mt-0.5">// REALTIME_ACTIVITY_FEED</p>
              </div>
            </div>

            <a
              href="https://github.com/josptrra"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs text-text hover:text-accent transition-colors bg-background border border-border hover:border-accent/40 px-3.5 py-2 rounded-xl inline-flex items-center gap-2 group shadow-sm"
            >
              <span className="text-muted font-normal">@</span>
              <span className="font-bold">josptrra</span>
              <span className="text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
            </a>
          </div>

          {/* GitHub Calendar Container */}
          <div className="overflow-x-auto py-2 flex justify-center items-center text-text font-mono text-xs [&_svg]:max-w-full">
            <GitHubCalendar
              username="josptrra"
              colorScheme="dark"
              theme={calendarTheme}
              blockSize={12}
              blockMargin={4}
              fontSize={12}
              style={{
                color: '#8E8E9A',
                fontFamily: 'JetBrains Mono, monospace'
              }}
            />
          </div>
        </div>

        {/* 2. ELEVATED TECH STACK (DOMAIN CARDS) */}
        {viewMode === 'cards' ? (
          <div className="space-y-8">
            {domainsData.map((domain) => (
              <div key={domain.id} className="bg-surface border border-border rounded-2xl p-6 md:p-7 shadow-xl hover:border-accent/40 transition-all duration-300">
                {/* Domain Header */}
                <div className="mb-5 pb-3 border-b border-border/60 flex items-center justify-between">
                  <div>
                    <span className="font-mono text-[10px] text-accent font-bold tracking-wider text-glow-sm">
                      {domain.overline}
                    </span>
                    <h3 className="font-display text-xl font-bold text-text mt-0.5">
                      {domain.title}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-muted">
                    [{domain.items.length} MODULES]
                  </span>
                </div>

                {/* Skill Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {domain.items.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="bg-background/80 border border-border/80 hover:border-accent/60 p-4 rounded-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-sm group"
                    >
                      <div>
                        {/* Icon + Skill Name Header */}
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-xl bg-surface border border-border/80 flex items-center justify-center shrink-0 group-hover:border-accent/40 transition-colors shadow-inner">
                            <TechIcon name={skill.name} className="w-5 h-5 shrink-0 transition-transform duration-300 group-hover:scale-110" />
                          </div>
                          <div>
                            <h4 className="font-display text-sm md:text-base font-bold text-text group-hover:text-accent transition-colors">
                              {skill.label}
                            </h4>
                            <span className="font-mono text-[9px] text-accent-alt font-semibold tracking-wider block mt-0.5">
                              {skill.role}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Used In Tags Footer */}
                      {skill.usedIn && (
                        <div className="mt-3 pt-2.5 border-t border-border/40 flex items-center gap-1.5 flex-wrap font-mono text-[10px]">
                          <span className="text-muted/70 text-[9px]">USED_IN:</span>
                          {skill.usedIn.map((tag, tIdx) => (
                            <span key={tIdx} className="bg-surface border border-border text-muted px-1.5 py-0.5 rounded text-[9.5px] group-hover:border-accent/30 group-hover:text-text transition-colors">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* 3. CLI CONFIG FILE VIEW (~/.techrc) */
          <div className="bg-surface border border-border rounded-2xl p-6 md:p-8 font-mono text-xs space-y-6 shadow-2xl">
            <div className="text-muted text-[11px] border-b border-border/60 pb-3 flex items-center justify-between">
              <span># ~/.techrc — Environment Configuration & Core Tooling</span>
              <span className="text-accent text-[10px]">// READONLY_CONFIG</span>
            </div>

            {domainsData.map((domain, idx) => (
              <div key={idx} className="space-y-3">
                <div className="text-muted italic">{domain.overline} — {domain.title}</div>
                <div className="space-y-2 pl-4">
                  {domain.items.map((item, iIdx) => (
                    <div key={iIdx} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                      <span className="text-accent font-bold text-glow-sm">export {item.name.toUpperCase().replace(/[^A-Z0-9]/g, '_')}=</span>
                      <span className="text-text font-semibold bg-background px-2.5 py-1 rounded border border-border">
                        "{item.label}"
                      </span>
                      <span className="text-accent-alt text-[10px]"># {item.role}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
