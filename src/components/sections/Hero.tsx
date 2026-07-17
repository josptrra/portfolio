import { useState, useEffect } from 'react';
import { CommandLine } from '../ui/CommandLine';
import { BlinkingCursor } from '../ui/BlinkingCursor';
import { TypeWriter } from '../ui/TypeWriter';
import { useLanguage } from '../../hooks/useLanguage';
import { TerminalWindow } from '../layout/TerminalWindow';

const treeText = `.
├── about
│   ├── profile.ts
│   └── skills.json
├── career
│   ├── bangkit_2024.md
│   ├── telkom_digistar.md
│   └── kominfo.md
├── projects
│   ├── government_cbt.tsx
│   └── sign_language.tsx
└── contact
    ├── email.sh
    └── linkedin.sh

4 directories, 9 files`;

export function Hero() {
  const { t } = useLanguage();
  const [step, setStep] = useState(0);
  const [treeStep, setTreeStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setStep(7);
      setTreeStep(1);
    }
  }, [isMobile]);

  return (
    <section className="min-h-screen flex flex-col justify-center px-8 relative max-w-7xl mx-auto pt-20">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        {/* LEFT COLUMN: Main Hero */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* 1. whoami command */}
          <CommandLine 
            command="whoami" 
            typed={!isMobile} 
            delay={200}
            speed={50}
            onComplete={() => setStep(1)} 
          />

          {/* 2. Output of whoami */}
          <div className="mt-6 mb-12">
            {(step >= 1 || isMobile) && (
              <h1 className="text-4xl md:text-6xl font-display font-bold text-accent text-glow mb-4">
                {isMobile ? "JULIO SYAH PUTRA" : (
                  <TypeWriter text="JULIO SYAH PUTRA" speed={100} showCursor={false} onComplete={() => setStep(2)} />
                )}
              </h1>
            )}
            
            {(step >= 2 || isMobile) && (
              <p className="text-xl md:text-2xl text-text font-sans mb-6 h-8">
                {isMobile ? t('hero', 'subtitle') : (
                  <TypeWriter text={t('hero', 'subtitle')} speed={20} showCursor={false} onComplete={() => setStep(3)} />
                )}
              </p>
            )}

            <div className="text-muted font-mono text-sm md:text-base space-y-2">
              {(step >= 3 || isMobile) && (
                <p className="h-6">
                  {isMobile ? t('hero', 'current') : (
                    <TypeWriter text={t('hero', 'current')} speed={20} showCursor={false} onComplete={() => setStep(4)} />
                  )}
                </p>
              )}
              {(step >= 4 || isMobile) && (
                <p className="h-6">
                  {isMobile ? t('hero', 'previous') : (
                    <TypeWriter text={t('hero', 'previous')} speed={20} showCursor={false} onComplete={() => setStep(5)} />
                  )}
                </p>
              )}
            </div>
          </div>

          {/* 3. cat status.txt command */}
          {(step >= 5 || isMobile) && (
            <CommandLine 
              command="cat status.txt" 
              typed={!isMobile} 
              delay={isMobile ? 0 : 300}
              speed={50}
              onComplete={() => setStep(6)} 
              className="mb-6"
            />
          )}

          {/* 4. Output of status.txt & CTA */}
          <div className="mt-2">
            {(step >= 6 || isMobile) && (
              <div className="text-text font-mono mb-10 flex items-start gap-3 h-6">
                <span className="text-accent text-glow-sm">{'>'}</span>
                <p>
                  {isMobile ? t('hero', 'status') : (
                    <TypeWriter text={t('hero', 'status')} speed={20} showCursor={false} onComplete={() => setStep(7)} />
                  )}
                </p>
              </div>
            )}
            
            {(step >= 7 || isMobile) && (
              <div className="flex flex-wrap gap-4 items-center opacity-0 animate-flicker">
                <a 
                  href="#projects" 
                  className="px-6 py-3 bg-accent/10 border border-accent text-accent font-mono text-sm hover:bg-accent/20 transition-colors no-underline"
                >
                  [{t('hero', 'cta_projects')}]
                </a>
                <a 
                  href="/cv.pdf" 
                  className="px-6 py-3 text-muted font-mono text-sm hover:text-text transition-colors border border-transparent hover:border-border no-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('hero', 'cta_cv')}
                </a>
              </div>
            )}
          </div>

          {/* Final Blinking Cursor */}
          {(step >= 7 || isMobile) && (
            <div className="mt-12">
              <BlinkingCursor />
            </div>
          )}
        </div>

        {/* RIGHT COLUMN: Directory Tree Terminal */}
        <div className="lg:col-span-5 hidden lg:block">
          <div className="animate-fade-in" style={{ animationFillMode: 'forwards' }}>
            <TerminalWindow title="tree ~/portfolio">
              <div className="font-mono text-sm p-4 h-[350px]">
                <CommandLine 
                  command="tree ." 
                  typed={!isMobile}
                  delay={500}
                  speed={80}
                  onComplete={() => setTreeStep(1)}
                />
                {(treeStep >= 1 || isMobile) && (
                  <div className="mt-4 text-muted">
                    {isMobile ? (
                      <span className="whitespace-pre-wrap">{treeText}</span>
                    ) : (
                      <TypeWriter text={treeText} speed={15} showCursor={false} />
                    )}
                  </div>
                )}
              </div>
            </TerminalWindow>
          </div>
        </div>
      </div>
      
    </section>
  );
}
