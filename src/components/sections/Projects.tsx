import { projects } from '../../data/projects';
import { ProjectCard } from '../ui/ProjectCard';

export function Projects() {
  return (
    <section id="projects" className="min-h-screen py-24 px-4 md:px-8 max-w-6xl mx-auto flex flex-col justify-center">
      {/* Top Section Command Bar */}
      <div className="mb-6 flex items-center justify-between font-mono text-xs text-muted border-b border-border/80 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
          <span className="text-accent font-bold tracking-wider text-glow-sm">
            $ ls -la ~/projects/
          </span>
        </div>
        <span className="hidden sm:block text-muted">// FEATURED_BUILDS ({projects.length} DIRECTORIES)</span>
      </div>

      {/* Projects 2-Column Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
