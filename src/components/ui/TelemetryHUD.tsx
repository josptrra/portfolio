import { useState, useEffect } from 'react';
import { TechIcon } from './TechIcon';

export function TelemetryHUD() {
  const [time, setTime] = useState<string>('');
  const [latency, setLatency] = useState<number>(14);

  // Live clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'Asia/Jakarta'
      });
      setTime(`${timeString} WIB`);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Latency micro-fluctuation for telemetry realism
  useEffect(() => {
    const latencyTimer = setInterval(() => {
      setLatency(Math.floor(Math.random() * 5) + 12); // 12ms - 16ms
    }, 3000);
    return () => clearInterval(latencyTimer);
  }, []);

  const coreStack = ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'TailwindCSS'];

  return (
    <div className="bg-surface/90 backdrop-blur-md border border-border rounded-2xl p-6 md:p-7 shadow-2xl space-y-6 hover:border-accent/60 hover:shadow-glow-md transition-all duration-500 relative overflow-hidden group opacity-0 animate-fade-in">
      {/* Laser Scanning Line Animation Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="w-full h-0.5 bg-linear-to-r from-transparent via-accent to-transparent animate-scan opacity-40 shadow-glow-sm" />
      </div>

      {/* Background Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-size-[16px_16px] pointer-events-none" />

      {/* Staggered Sub-elements (Doubled Delays) */}
      {/* Header: System Telemetry Signal & Live Clock (Delay: 300ms) */}
      <div className="flex items-center justify-between border-b border-border/80 pb-4 relative z-10 opacity-0 animate-[fadeIn_0.6s_ease-out_300ms_forwards]">
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center">
            <span className="w-3 h-3 rounded-full bg-accent animate-ping absolute opacity-75" />
            <span className="w-2.5 h-2.5 rounded-full bg-accent shadow-glow-sm" />
          </div>
          <div>
            <span className="font-mono text-[11px] text-accent font-bold tracking-widest text-glow-sm block">
              // TELEMETRY_HUD :: ACTIVE
            </span>
            <span className="font-mono text-[10px] text-muted tracking-wider">
              ID: JSP-7701 // PALEMBANG_NODE
            </span>
          </div>
        </div>

        <div className="bg-background/90 border border-border/80 px-3 py-1.5 rounded-lg font-mono text-[11px] text-accent font-bold tracking-wider shadow-inner group-hover:border-accent/40 transition-colors">
          {time || '15:00:00 WIB'}
        </div>
      </div>

      {/* Core Metrics Grid (Staggered Cards: 600ms, 800ms, 1000ms) */}
      <div className="grid grid-cols-3 gap-3 relative z-10">
        <div className="bg-background/80 border border-border/70 p-3 rounded-xl hover:border-accent/40 hover:bg-background transition-all duration-300 hover:-translate-y-0.5 group/card opacity-0 animate-[fadeIn_0.6s_ease-out_600ms_forwards]">
          <span className="font-mono text-[9px] text-muted tracking-wider block uppercase">EXPERIENCE</span>
          <span className="font-display text-lg font-bold text-text group-hover/card:text-accent transition-colors mt-0.5 block">3+ Yrs</span>
          <span className="font-mono text-[9px] text-accent-alt">Fullstack</span>
        </div>

        <div className="bg-background/80 border border-border/70 p-3 rounded-xl hover:border-accent/40 hover:bg-background transition-all duration-300 hover:-translate-y-0.5 group/card opacity-0 animate-[fadeIn_0.6s_ease-out_800ms_forwards]">
          <span className="font-mono text-[9px] text-muted tracking-wider block uppercase">PROJECTS</span>
          <span className="font-display text-lg font-bold text-text group-hover/card:text-accent transition-colors mt-0.5 block">10+</span>
          <span className="font-mono text-[9px] text-accent-alt">Shipped</span>
        </div>

        <div className="bg-background/80 border border-border/70 p-3 rounded-xl hover:border-accent/40 hover:bg-background transition-all duration-300 hover:-translate-y-0.5 group/card opacity-0 animate-[fadeIn_0.6s_ease-out_1000ms_forwards]">
          <span className="font-mono text-[9px] text-muted tracking-wider block uppercase">AVAILABILITY</span>
          <span className="font-display text-lg font-bold text-accent text-glow-sm mt-0.5 block">OPEN</span>
          <span className="font-mono text-[9px] text-muted">Full-time / Contract</span>
        </div>
      </div>

      {/* Current Focus Highlight Card (Delay: 1200ms) */}
      <div className="bg-background/90 border-l-2 border-l-accent border-r border-t border-b border-border/80 p-4 rounded-xl space-y-2 relative z-10 hover:border-accent/40 transition-all duration-300 group/focus opacity-0 animate-[fadeIn_0.6s_ease-out_1200ms_forwards]">
        <div className="flex items-center justify-between font-mono text-[10px]">
          <span className="text-muted tracking-wider">// CURRENT_FOCUS</span>
          <span className="text-accent font-bold group-hover/focus:text-glow-sm transition-all">CBT_ARCHITECTURE</span>
        </div>
        <p className="font-sans text-sm text-text font-medium leading-relaxed">
          Building high-concurrency Computer Based Testing platforms & government portal systems.
        </p>
        <div className="pt-2 border-t border-border/40 flex items-center justify-between text-[11px] font-mono text-muted">
          <span>Target: Manggala CBT</span>
          <span className="text-accent-alt">Bangkit '24 Alum</span>
        </div>
      </div>

      {/* Core Tech Stack Badges (Delay: 1400ms) */}
      <div className="space-y-2.5 relative z-10 opacity-0 animate-[fadeIn_0.6s_ease-out_1400ms_forwards]">
        <div className="flex items-center justify-between font-mono text-[10px] text-muted">
          <span className="tracking-wider">// CORE_PRIMARY_STACK</span>
          <span className="text-accent text-[9px]">ENGINEERING</span>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {coreStack.map((tech, idx) => (
            <div
              key={idx}
              className="bg-background/60 border border-border/80 hover:border-accent/50 hover:bg-accent/10 px-3 py-2 rounded-lg flex items-center gap-2.5 transition-all duration-300 hover:-translate-y-0.5 group/item cursor-default"
            >
              <div className="w-5 h-5 flex items-center justify-center shrink-0">
                <TechIcon name={tech} className="w-4 h-4 transition-transform duration-300 group-hover/item:scale-125" />
              </div>
              <span className="font-mono text-[11px] text-text group-hover/item:text-accent group-hover/item:text-glow-sm font-medium truncate transition-colors">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 2.5 Signal Status & Latency Footer (Delay: 1600ms) */}
      <div className="pt-3 border-t border-border/60 flex items-center justify-between font-mono text-[10px] text-muted relative z-10 opacity-0 animate-[fadeIn_0.6s_ease-out_1600ms_forwards]">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span>LATENCY: <strong className="text-text font-bold transition-all">{latency}ms</strong></span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-accent-alt">GITHUB:</span>
          <a
            href="https://github.com/josptrra"
            target="_blank"
            rel="noreferrer"
            className="text-text hover:text-accent transition-colors font-bold underline decoration-accent/40 hover:decoration-accent"
          >
            @josptrra
          </a>
        </div>
      </div>
    </div>
  );
}
