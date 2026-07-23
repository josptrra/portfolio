import { CommandLine } from '../ui/CommandLine';
import { useLanguage } from '../../hooks/useLanguage';
import { TelemetryHUD } from '../ui/TelemetryHUD';
import { LoopingTypewriter } from '../ui/LoopingTypewriter';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex flex-col justify-center px-4 md:px-8 relative max-w-7xl mx-auto pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        
        {/* LEFT COLUMN: Main Hero */}
        <div className="lg:col-span-7 flex flex-col justify-center animate-fade-in space-y-6">
          
          {/* 1. whoami command */}
          <CommandLine command="whoami" typed={false} />

          {/* 2. Main Title & Subtitle */}
          <div className="space-y-3">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-accent text-glow">
              JULIO SYAH PUTRA
            </h1>
            <p className="text-xl md:text-2xl text-text font-sans font-medium">
              {t('hero', 'subtitle')}
            </p>
          </div>

          {/* 3. LOOPING CURRENTLY / PREVIOUSLY TYPEWRITER SLOT */}
          <div className="text-muted font-mono text-xs md:text-sm h-10 flex items-center bg-surface/80 border border-border/80 px-4 py-2 rounded-xl w-fit min-w-70 sm:min-w-105 shadow-sm">
            <LoopingTypewriter
              strings={[t('hero', 'current'), t('hero', 'previous')]}
              typingSpeed={45}
              deletingSpeed={25}
              pauseDuration={2200}
            />
          </div>

          {/* 4. cat status.txt command & output */}
          <div className="space-y-2 pt-2">
            <CommandLine command="cat status.txt" typed={false} />

            <div className="text-text font-mono flex items-center gap-2.5 pt-1">
              <span className="text-accent text-glow-sm font-bold">&gt;</span>
              <p className="text-sm md:text-base">
                {t('hero', 'status')}
              </p>
            </div>
          </div>

          {/* 5. CTA Buttons */}
          <div className="flex flex-wrap gap-4 items-center pt-4">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 bg-accent/10 hover:bg-accent/20 border border-accent text-accent font-mono text-sm rounded-xl transition-all no-underline cursor-pointer font-bold shadow-[0_0_15px_rgba(0,255,102,0.15)]"
            >
              [{t('hero', 'cta_projects')}]
            </a>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-muted hover:text-text font-mono text-sm transition-colors border border-border/80 hover:border-text/60 rounded-xl no-underline"
            >
              {t('hero', 'cta_cv')}
            </a>
          </div>

        </div>

        {/* RIGHT COLUMN: Telemetry HUD Card */}
        <div className="lg:col-span-5 hidden lg:block animate-fade-in">
          <TelemetryHUD />
        </div>

      </div>
    </section>
  );
}
