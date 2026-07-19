import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Experience } from '../components/sections/Experience';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <div id="projects" className="min-h-screen flex items-center justify-center text-muted border-b border-border">Projects Section Placeholder</div>
      <div id="stack" className="min-h-screen flex items-center justify-center text-muted border-b border-border">Tech Stack Section Placeholder</div>
      <div id="awards" className="min-h-screen flex items-center justify-center text-muted border-b border-border">Awards Section Placeholder</div>
      <div id="contact" className="min-h-screen flex items-center justify-center text-muted">Contact Section Placeholder</div>
      <Footer />
    </main>
  );
}
