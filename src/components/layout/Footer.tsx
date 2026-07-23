import { SiGithub, SiInstagram } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa6';
import { useLocation, useNavigate } from 'react-router-dom';

const navItems = [
  { id: 'about', label: 'about' },
  { id: 'experience', label: 'experience' },
  { id: 'projects', label: 'projects' },
  { id: 'stack', label: 'stack' },
  { id: 'contact', label: 'contact' },
];

const socials = [
  { href: 'https://github.com/josptrra', icon: SiGithub, label: 'GitHub' },
  { href: 'https://linkedin.com/in/josptrra', icon: FaLinkedin, label: 'LinkedIn' },
  { href: 'https://instagram.com/josptrra', icon: SiInstagram, label: 'Instagram' },
];

export function Footer() {
  const location = useLocation();
  const navigate = useNavigate();
  const isProjectPage = location.pathname.startsWith('/project/');

  const scrollToSection = (id: string) => {
    if (isProjectPage) {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="mt-24 border-t border-border/60 bg-background font-mono">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-14 space-y-12">

        {/* Top row: brand, navigate, connect aligned with justify-between */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 md:gap-8">

          {/* 1. Brand */}
          <div className="space-y-3 max-w-sm">
            <button
              type="button"
              onClick={() => {
                if (isProjectPage) navigate('/');
                else window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left bg-transparent border-none p-0 cursor-pointer group font-mono"
            >
              <span className="text-lg font-bold text-text group-hover:text-accent transition-colors tracking-wide font-display">
                julio<span className="text-accent">.dev</span>
              </span>
            </button>
            <p className="font-sans text-[13px] text-muted leading-relaxed">
              Software engineer from Palembang, Indonesia — building clean, performant web applications.
            </p>
          </div>

          {/* 2. Navigate */}
          <div>
            <h4 className="text-[11px] text-muted uppercase tracking-widest mb-3.5">// navigate</h4>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="text-text/80 hover:text-accent transition-colors cursor-pointer bg-transparent border-none p-0 font-mono text-xs capitalize"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* 3. Connect */}
          <div>
            <h4 className="text-[11px] text-muted uppercase tracking-widest mb-3.5">// connect</h4>
            <div className="flex items-center gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className="w-9 h-9 rounded-xl bg-surface/80 border border-border/60 hover:border-accent/40 text-muted hover:text-accent flex items-center justify-center transition-all hover:-translate-y-0.5"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="border-t border-border/40 pt-6 flex flex-col sm:flex-row justify-between items-center text-[11px] text-muted gap-2">
          <span>© {new Date().getFullYear()} Julio Saputra</span>
          <span className="text-muted/50">react + vite // handcrafted</span>
        </div>

      </div>
    </footer>
  );
}
