import { useLanguage } from '../../hooks/useLanguage';
import { TerminalWindow } from '../layout/TerminalWindow';

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="min-h-screen py-24 px-8 max-w-7xl mx-auto flex items-center justify-center">
      <div className="w-full">
        <TerminalWindow>
          <div className="font-mono text-text text-sm md:text-base p-2">
            
            {/* Header */}
            <div className="flex justify-between mb-8 text-muted uppercase">
              <span>JULIO(1)</span>
              <span>Portfolio Manual</span>
              <span>JULIO(1)</span>
            </div>

            {/* NAME */}
            <div className="mb-8">
              <h2 className="text-accent font-bold mb-2">NAME</h2>
              <p className="pl-8 sm:pl-12">
                julio - {t('about', 'name_desc')}
              </p>
            </div>

            {/* SYNOPSIS */}
            <div className="mb-8">
              <h2 className="text-accent font-bold mb-2">SYNOPSIS</h2>
              <p className="pl-8 sm:pl-12">
                {t('about', 'synopsis')}
              </p>
            </div>

            {/* DESCRIPTION */}
            <div className="mb-8">
              <h2 className="text-accent font-bold mb-2">DESCRIPTION</h2>
              <div className="pl-8 sm:pl-12 space-y-4 leading-relaxed">
                <p>{t('about', 'description')}</p>
                <p>{t('about', 'personality')}</p>
                <p className="italic text-muted mt-4 border-l-2 border-border pl-4 py-1">
                  "{t('about', 'aiesec')}"
                </p>
              </div>
            </div>

            {/* SEE ALSO */}
            <div>
              <h2 className="text-accent font-bold mb-2">SEE ALSO</h2>
              <p className="pl-8 sm:pl-12">
                <a href="#experience" className="text-text hover:text-accent underline decoration-border hover:decoration-accent underline-offset-4 transition-colors">experience(1)</a>,{' '}
                <a href="#projects" className="text-text hover:text-accent underline decoration-border hover:decoration-accent underline-offset-4 transition-colors">projects(1)</a>,{' '}
                <a href="#stack" className="text-text hover:text-accent underline decoration-border hover:decoration-accent underline-offset-4 transition-colors">stack(1)</a>
              </p>
            </div>

          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}
