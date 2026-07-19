import { type Project } from '../../data/projects';
import { TechIcon } from './TechIcon';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-surface border border-border rounded-xl p-5 md:p-6 transition-all duration-300 hover:border-accent/60 hover:shadow-glow-sm flex flex-col justify-between group relative overflow-hidden">
      <div>
        {/* Card Header: Folder Icon & Name + Badge */}
        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-accent">
            <svg className="w-4 h-4 text-accent shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
            </svg>
            <span className="text-glow-sm">~/{project.folderName}</span>
          </div>

          <span className="font-mono text-[10px] font-semibold text-accent-alt bg-accent-alt/10 border border-accent-alt/30 px-2 py-0.5 rounded">
            {project.badge}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display text-lg font-bold text-text mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-text/80 font-sans text-xs md:text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tech Stack Pills with Brand TechIcons */}
        <div className="flex flex-wrap gap-1.5 mb-5 font-mono text-[11px]">
          {project.tech.map((t, idx) => (
            <span
              key={idx}
              className="bg-background border border-border text-muted px-2 py-0.5 rounded flex items-center gap-1 group-hover:border-border/80 transition-colors"
            >
              <TechIcon name={t} className="w-3 h-3 shrink-0" />
              <span>{t}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Footer Link */}
      <div className="pt-3 border-t border-border/60 flex items-center justify-between font-mono text-xs">
        <span className="text-muted text-[10px]">// VIEW_SPECS</span>
        <Link
          to={`/project/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-accent font-bold hover:underline text-glow-sm cursor-pointer"
        >
          <span>[ cd ./{project.slug} → ]</span>
        </Link>
      </div>
    </div>
  );
}
