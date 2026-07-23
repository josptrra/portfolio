import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Experience } from '../components/sections/Experience';
import { Projects } from '../components/sections/Projects';
import { TechStack } from '../components/sections/TechStack';
import { Contact } from '../components/sections/Contact';
import { ScrollReveal } from '../components/ui/ScrollReveal';

export default function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const stateScrollTo = (location.state as { scrollTo?: string })?.scrollTo;
    const hashScrollTo = location.hash ? location.hash.replace('#', '') : null;
    const targetId = stateScrollTo || hashScrollTo;

    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'instant' });
      }
      if (stateScrollTo) {
        navigate(location.pathname + location.hash, { replace: true, state: {} });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, []);

  return (
    <main>
      <Navbar />

      <Hero />

      <ScrollReveal>
        <About />
      </ScrollReveal>

      <ScrollReveal>
        <Experience />
      </ScrollReveal>

      <ScrollReveal>
        <Projects />
      </ScrollReveal>

      <ScrollReveal>
        <TechStack />
      </ScrollReveal>

      <ScrollReveal>
        <Contact />
      </ScrollReveal>

      <Footer />
    </main>
  );
}
