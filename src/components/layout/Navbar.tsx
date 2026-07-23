import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const navItems = [
  { id: 'about', label: 'about' },
  { id: 'experience', label: 'experience' },
  { id: 'projects', label: 'projects' },
  { id: 'stack', label: 'stack' },
  { id: 'contact', label: 'contact' },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isProjectPage = location.pathname.startsWith('/project/');

  // Track window scroll to toggle navbar bottom border & background blur
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Section observer for active link highlights
  useEffect(() => {
    if (isProjectPage) {
      setActiveSection('projects');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [isProjectPage]);

  const scrollToSection = (id: string) => {
    if (isProjectPage) {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }

    const element = elementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  function elementById(id: string) {
    return document.getElementById(id);
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/85 backdrop-blur-md border-b border-border shadow-md'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between font-mono text-xs md:text-sm">
          
          {/* Left: ← back link on project page, or brand logo on home */}
          {isProjectPage ? (
            <button
              type="button"
              onClick={() => navigate('/')}
              className="text-accent hover:underline flex items-center gap-1.5 font-bold cursor-pointer border-none bg-transparent p-0"
            >
              <span>← back</span>
            </button>
          ) : (
            <a
              href="#"
              className="text-accent no-underline font-mono"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              julio@portfolio:~$
            </a>
          )}

          {/* Right on Desktop: Nav Links (Desktop Only) */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = isProjectPage ? item.id === 'projects' : activeSection === item.id;
              const labelText = isActive ? `[_${item.label}]` : `[${item.label}]`;

              return (
                <a
                  key={item.id}
                  href={`/#${item.id}`}
                  className={`no-underline transition-colors duration-200 hover:text-text ${
                    isActive ? 'text-accent font-bold' : 'text-muted'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                >
                  {labelText}
                </a>
              );
            })}
          </div>

          {/* Right on Mobile: Hamburger Button (Mobile Only) */}
          <button
            type="button"
            className="block md:hidden bg-transparent border-none text-text text-xl cursor-pointer p-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-background/95 z-40 flex flex-col justify-center items-center transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex flex-col items-center gap-8 mb-16 font-mono text-lg">
          {navItems.map((item) => {
            const isActive = isProjectPage ? item.id === 'projects' : activeSection === item.id;
            const labelText = isActive ? `[_${item.label}]` : `[${item.label}]`;

            return (
              <a
                key={item.id}
                href={`/#${item.id}`}
                className={`no-underline ${isActive ? 'text-accent font-bold' : 'text-text'}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
              >
                {labelText}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}
