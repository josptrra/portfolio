import { useState } from 'react';
import { type Experience } from '../../data/experiences';
import { TechIcon } from './TechIcon';

interface GitCommitProps {
  experience: Experience;
  isLast?: boolean;
}

export function GitCommit({ experience, isLast = false }: GitCommitProps) {
  const [showDiff, setShowDiff] = useState(experience.isCurrent);

  return (
    <div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr] gap-4 md:gap-6 group">
      {/* LEFT COLUMN: Timeline Node & Vertical Connector Line */}
      <div className="flex flex-col items-center relative">
        {/* Node Circle */}
        {experience.isCurrent ? (
          <div className="relative z-10 flex items-center justify-center mt-1">
            <span className="absolute w-7 h-7 rounded-full bg-accent/25 animate-ping" />
            <div className="w-8 h-8 rounded-full bg-surface border-2 border-accent text-accent flex items-center justify-center shadow-glow-md">
              <div className="w-2.5 h-2.5 rounded-full bg-accent text-glow-sm" />
            </div>
          </div>
        ) : (
          <div className="w-7 h-7 rounded-full bg-surface border-2 border-muted/50 text-muted flex items-center justify-center transition-all duration-300 group-hover:border-accent group-hover:text-accent group-hover:scale-110 z-10 mt-1">
            <div className="w-2 h-2 rounded-full bg-muted/60 group-hover:bg-accent transition-colors" />
          </div>
        )}

        {/* Continuous Connector Line Going Straight Down Column Center */}
        {!isLast && (
          <div className="w-0.5 flex-1 bg-border group-hover:bg-accent/40 transition-colors my-1" />
        )}
      </div>

      {/* RIGHT COLUMN: Elevated Experience Card */}
      <div className="bg-surface border border-border rounded-xl p-5 md:p-6 transition-all duration-300 group-hover:border-accent/60 group-hover:shadow-glow-sm relative overflow-hidden mb-2">
        {/* Metadata Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3 font-mono text-xs">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-muted bg-background px-2 py-0.5 rounded border border-border">
              commit: <strong className="text-text">{experience.hash}</strong>
            </span>
            {experience.branch && (
              <span className="text-accent bg-accent/10 border border-accent/30 px-2 py-0.5 rounded font-bold text-glow-sm">
                {experience.branch}
              </span>
            )}
            <span className="text-muted/80 bg-background px-2.5 py-0.5 rounded border border-border hidden sm:inline-block">
              {experience.type}
            </span>
          </div>

          <div className="text-accent-alt bg-accent-alt/10 border border-accent-alt/30 px-3 py-1 rounded-full font-semibold">
            {experience.period}
          </div>
        </div>

        {/* Title & Company */}
        <div className="mb-3">
          <h3 className="text-text font-display font-bold text-xl md:text-2xl group-hover:text-accent transition-colors tracking-tight">
            {experience.role}
          </h3>
          <p className="text-muted font-mono text-sm mt-0.5 flex items-center gap-1.5">
            <span>@</span>
            <span className="text-accent-alt/90 font-medium">{experience.company}</span>
          </p>
        </div>

        {/* Highlight Stat (if present) */}
        {experience.stat && (
          <div className="inline-flex items-center gap-1.5 text-accent bg-accent/10 border border-accent/30 font-mono text-xs px-3 py-1 rounded-md mb-3 text-glow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3.5 h-3.5 fill-none stroke-current"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
            <span>{experience.stat}</span>
          </div>
        )}

        {/* Description */}
        <p className="text-text/90 text-sm md:text-base leading-relaxed font-sans mb-4">
          {experience.description}
        </p>

        {/* Commit Achievements (Git Diff View) */}
        <div className="mb-4">
          <button
            onClick={() => setShowDiff(!showDiff)}
            className="text-xs font-mono text-accent hover:text-accent/80 flex items-center gap-1.5 cursor-pointer bg-background hover:bg-surface border border-border px-3 py-1.5 rounded-md transition-colors"
          >
            <span>{showDiff ? '[-]' : '[+]'}</span>
            <span>{showDiff ? 'Hide Commit Achievements' : 'View Commit Achievements'}</span>
          </button>

          {showDiff && (
            <ul className="mt-3 space-y-2 bg-background/90 border border-border/80 rounded-lg p-3 md:p-4 font-mono text-xs md:text-sm">
              {experience.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-2 text-text/90">
                  <span className="text-accent font-bold mt-0.5">+</span>
                  <span className="leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Tech Stack Section with Mini Icons */}
        <div className="mt-4 pt-3.5 border-t border-border flex flex-col gap-2.5">
          <div className="flex items-center gap-1.5 font-mono text-xs text-muted font-semibold tracking-wider">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3.5 h-3.5 fill-none stroke-current text-accent-alt"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
            <span className="text-text font-bold">STACK</span>
            <span className="text-muted/60">//</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {experience.skills.map((skill, idx) => (
              <span
                key={idx}
                className="bg-background border border-[#2a2b3c] text-text font-mono text-xs font-semibold px-2.5 py-1 rounded-md shadow-sm hover:border-accent/60 transition-all cursor-default flex items-center gap-1.5 group/skill"
              >
                <TechIcon name={skill} className="w-3.5 h-3.5 shrink-0" />
                <span>{skill}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}






