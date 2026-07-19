import { useState } from 'react';
import { GitCommit } from '../ui/GitCommit';
import { experiences } from '../../data/experiences';

export function Experience() {
  const [filter, setFilter] = useState<'all' | 'frontend' | 'backend'>('all');

  const filteredExperiences = experiences.filter((exp) => {
    if (filter === 'all') return true;
    if (filter === 'frontend') return exp.role.toLowerCase().includes('frontend');
    if (filter === 'backend') return exp.role.toLowerCase().includes('backend');
    return true;
  });

  return (
    <section id="experience" className="min-h-screen py-24 px-4 md:px-8 max-w-5xl mx-auto flex flex-col justify-center">
      {/* Terminal Header Card */}
      <div className="mb-12 bg-surface border border-border rounded-xl p-5 md:p-6 shadow-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-muted mb-1.5">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse inline-block" />
              <span>SYS.CAREER_LOG</span>
              <span>•</span>
              <span className="text-accent text-glow-sm">branch: main</span>
              <span className="hidden sm:inline-block">•</span>
              <span className="text-muted hidden sm:inline-block">status: clean</span>
            </div>

            <div className="flex items-center gap-2.5 font-mono text-xl md:text-3xl font-bold text-accent text-glow">
              <span>$</span>
              <span>git log --career --graph</span>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 font-mono text-xs bg-background p-1.5 rounded-lg border border-border self-start md:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-accent/20 border border-accent/40 text-accent font-bold text-glow-sm'
                  : 'text-muted hover:text-text'
              }`}
            >
              [ ALL ]
            </button>
            <button
              onClick={() => setFilter('frontend')}
              className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                filter === 'frontend'
                  ? 'bg-accent/20 border border-accent/40 text-accent font-bold text-glow-sm'
                  : 'text-muted hover:text-text'
              }`}
            >
              [ FRONTEND ]
            </button>
            <button
              onClick={() => setFilter('backend')}
              className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                filter === 'backend'
                  ? 'bg-accent/20 border border-accent/40 text-accent font-bold text-glow-sm'
                  : 'text-muted hover:text-text'
              }`}
            >
              [ BACKEND ]
            </button>
          </div>
        </div>
      </div>

      {/* Timeline Grid Container */}
      <div className="flex flex-col">
        {filteredExperiences.map((exp, index) => (
          <GitCommit
            key={exp.hash || index}
            experience={exp}
            isLast={index === filteredExperiences.length - 1}
          />
        ))}
      </div>
    </section>
  );
}





