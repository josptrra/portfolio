import { GitCommit } from '../ui/GitCommit';
import { experiences } from '../../data/experiences';

export function Experience() {
  return (
    <section id="experience" className="py-16 md:py-20 px-4 md:px-8 max-w-5xl mx-auto flex flex-col justify-center">
      {/* Terminal Header Card */}
      <div className="mb-12 bg-surface border border-border rounded-xl p-5 md:p-6 shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-muted mb-1.5">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse inline-block" />
              <span>SYS.CAREER_LOG</span>
              <span>•</span>
              <span className="text-accent text-glow-sm">branch: main</span>
              <span className="hidden sm:inline-block">•</span>
              <span className="text-muted hidden sm:inline-block">status: clean</span>
            </div>

            <div className="flex items-center gap-2.5 font-mono text-xl md:text-2xl font-bold text-accent text-glow">
              <span>$</span>
              <span>git log --career --graph</span>
            </div>
          </div>

          <div className="font-mono text-xs text-muted hidden sm:block">
            // {experiences.length} COMMITS TOTAL
          </div>
        </div>
      </div>

      {/* Timeline Grid Container */}
      <div className="flex flex-col">
        {experiences.map((exp, index) => (
          <GitCommit
            key={exp.hash || index}
            experience={exp}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
