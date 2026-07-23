import { useState, useEffect } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { TechIcon } from '../ui/TechIcon';

interface SkillItem {
  name: string;
  label: string;
  color: string;
}

const skillsList: SkillItem[] = [
  { name: 'React', label: 'React JS', color: '#61DAFB' },
  { name: 'Next.js', label: 'Next.js', color: '#E2E8F0' },
  { name: 'TypeScript', label: 'TypeScript', color: '#3178C6' },
  { name: 'JavaScript', label: 'JavaScript', color: '#F7DF1E' },
  { name: 'Node.js', label: 'Node JS', color: '#339933' },
  { name: 'Express.js', label: 'Express JS', color: '#A855F7' },
  { name: 'PostgreSQL', label: 'PostgreSQL', color: '#4169E1' },
  { name: 'Firebase', label: 'Firebase', color: '#FFCA28' },
  { name: 'Python', label: 'Python', color: '#3776AB' },
  { name: 'REST API', label: 'REST API', color: '#10B981' },
  { name: 'TailwindCSS', label: 'Tailwind CSS', color: '#06B6D4' },
  { name: 'Git', label: 'Git', color: '#F05032' },
  { name: 'Google Cloud', label: 'Google Cloud', color: '#4285F4' },
  { name: 'Jira', label: 'Jira', color: '#2684FF' },
  { name: 'CI/CD', label: 'CI/CD', color: '#6366F1' }
];

// Theme matching the portfolio dark phosphor palette
const calendarTheme = {
  light: ['#121214', '#143823', '#1e633a', '#29a356', '#00ff66'],
  dark: ['#121214', '#143823', '#1e633a', '#29a356', '#00ff66'],
};

export function TechStack() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [totalCommits, setTotalCommits] = useState<number | null>(null);
  const [activeStreak, setActiveStreak] = useState<number | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Dynamically process contribution data from GitHub API
  const processContributionData = (
    contributions: Array<{ date: string; count: number; level: 0 | 1 | 2 | 3 | 4 }>
  ) => {
    // 1. Calculate live total commit sum dynamically
    const sum = contributions.reduce((acc, curr) => acc + curr.count, 0);
    if (sum > 0 && totalCommits !== sum) {
      setTotalCommits(sum);
    }

    // 2. Calculate current active streak dynamically
    let streak = 0;
    const sorted = [...contributions].reverse();
    for (const day of sorted) {
      if (day.count > 0) {
        streak++;
      } else if (streak > 0) {
        break;
      }
    }
    if (streak > 0 && activeStreak !== streak) {
      setActiveStreak(streak);
    }

    if (!isMobile) return contributions;

    // Filter last 4 months (April, May, June, July) for mobile screens
    const today = new Date();
    const fourMonthsAgo = new Date();
    fourMonthsAgo.setMonth(today.getMonth() - 3);
    fourMonthsAgo.setDate(1); // Start from beginning of April

    return contributions.filter((activity) => {
      const date = new Date(activity.date);
      return date >= fourMonthsAgo;
    });
  };

  return (
    <section id="stack" className="min-h-screen py-24 px-4 md:px-8 max-w-5xl mx-auto flex flex-col justify-center space-y-12">
      
      {/* 1. TOP COMMAND LINE HEADER BAR */}
      <div className="flex items-center justify-between font-mono text-xs md:text-sm border-b border-border/80 pb-3">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse shadow-glow-sm" />
          <span className="text-accent font-bold tracking-wider text-glow-sm">
            $ git log --author="josptrra" --stats
          </span>
        </div>
        <span className="text-muted tracking-wider text-[11px] font-mono">
          // TELEMETRY_STREAM :: {isMobile ? 'LAST 4 MONTHS' : '52 WEEKS'}
        </span>
      </div>

      {/* 2. ELEVATED CYBERPUNK HUD GITHUB CARD */}
      <div className="bg-linear-to-b from-surface via-surface/95 to-background border border-border/80 rounded-2xl p-5 md:p-7 shadow-2xl hover:border-accent/40 transition-all duration-500 space-y-6 relative overflow-hidden group">
        
        {/* Ambient Top Glow Line */}
        <div className="absolute top-0 left-1/4 right-1/4 h-px bg-linear-to-r from-transparent via-accent/50 to-transparent pointer-events-none" />
        
        {/* Terminal Window Header Bar */}
        <div className="flex items-center justify-between text-xs font-mono border-b border-border/60 pb-3.5">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
            <span className="text-muted text-[11px] ml-2 tracking-wider">DEV.HUD // GITHUB_ACTIVITY</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-ping inline-block" />
            <span className="text-accent font-mono text-[10px] tracking-wider uppercase font-semibold">
              STREAM: ACTIVE
            </span>
          </div>
        </div>

        {/* Card Main Title & Developer Handle Button */}
        <div className="flex items-center justify-between flex-wrap gap-4 pt-1">
          <div className="flex items-center justify-between w-full sm:w-auto gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-background border border-accent/30 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,255,102,0.15)] group-hover:border-accent/60 transition-colors">
                <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </div>

              <div>
                <h3 className="font-display text-base sm:text-xl font-bold text-text tracking-wide">
                  GitHub Contributions
                </h3>
                <p className="font-mono text-[11px] text-muted">// PUBLIC_REPOSITORIES</p>
              </div>
            </div>
          </div>

          <a
            href="https://github.com/josptrra"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto font-mono text-xs text-accent hover:text-white transition-all bg-accent/5 hover:bg-accent/15 border border-accent/30 hover:border-accent px-4 py-2.5 rounded-xl inline-flex items-center justify-center gap-2 group/btn shadow-[0_0_15px_rgba(0,255,102,0.08)]"
          >
            <span className="font-medium">git.me/@josptrra</span>
            <span className="text-accent group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform">↗</span>
          </a>
        </div>

        {/* HUD Telemetry Stat Bar Strip (Dynamic Real-time Values) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
          <div className="bg-background/80 border border-border/80 rounded-2xl p-3 flex flex-col justify-center font-mono">
            <span className="text-[10px] text-muted uppercase tracking-wider">Commits This Year</span>
            <span className="text-sm sm:text-base font-bold text-accent">
              {totalCommits !== null ? `${totalCommits} Commits` : 'Loading...'}
            </span>
          </div>

          <div className="bg-background/80 border border-border/80 rounded-2xl p-3 flex flex-col justify-center font-mono">
            <span className="text-[10px] text-muted uppercase tracking-wider">Active Streak</span>
            <span className="text-sm sm:text-base font-bold text-text">
              {activeStreak !== null ? `${activeStreak} Days Continuous` : 'Calculating...'}
            </span>
          </div>

          <div className="bg-background/80 border border-border/80 rounded-2xl p-3 col-span-2 sm:col-span-1 flex flex-col justify-center font-mono">
            <span className="text-[10px] text-muted uppercase tracking-wider">Primary Stack</span>
            <span className="text-sm sm:text-base font-bold text-text">TS / React / Node</span>
          </div>
        </div>

        {/* GitHub Activity Calendar Container */}
        <div className="overflow-x-auto pt-2 pb-1 flex justify-center items-center text-text font-mono text-xs [&_svg]:max-w-full [&_rect]:transition-all [&_rect]:duration-300 [&_rect:hover]:stroke-accent [&_rect:hover]:stroke-2">
          <GitHubCalendar
            username="josptrra"
            colorScheme="dark"
            theme={calendarTheme}
            transformData={processContributionData}
            blockSize={isMobile ? 15 : 12}
            blockMargin={isMobile ? 4.5 : 4}
            fontSize={isMobile ? 14 : 12}
            style={{
              color: '#8E8E9A',
              fontFamily: 'JetBrains Mono, monospace'
            }}
          />
        </div>
      </div>

      {/* 3. TECH STACK PILLS SECTION */}
      <div className="space-y-8 animate-fade-in pt-4">
        {/* Terminal Header Bar for Tech Stack */}
        <div className="flex items-center justify-between font-mono text-xs md:text-sm border-b border-border/80 pb-3">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse shadow-glow-sm" />
            <span className="text-accent font-bold tracking-wider text-glow-sm">
              $ cat ~/stack/skills.json
            </span>
          </div>
          <span className="text-muted tracking-wider text-[11px] font-mono">
            // CORE_TECHNOLOGIES (15)
          </span>
        </div>

        {/* Flex Pill Cards Container */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
          {skillsList.map((skill, idx) => {
            const isHovered = hoveredIdx === idx;

            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{
                  borderColor: isHovered ? skill.color : undefined,
                  backgroundColor: isHovered ? `${skill.color}15` : undefined,
                  color: isHovered ? skill.color : undefined,
                  boxShadow: isHovered ? `0 4px 20px ${skill.color}35` : undefined,
                }}
                className="bg-surface/80 border border-border/80 px-4 py-2.5 rounded-2xl flex items-center gap-3 shadow-md hover:-translate-y-1 transition-all duration-300 group cursor-default text-text"
              >
                <div className="w-5 h-5 flex items-center justify-center shrink-0">
                  <TechIcon name={skill.name} className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <span className="font-sans text-xs md:text-sm font-medium transition-colors">
                  {skill.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
