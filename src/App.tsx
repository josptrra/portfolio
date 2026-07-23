import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Home from './pages/Home';
import { TerminalLoader } from './components/ui/TerminalLoader';

const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/project/:slug"
            element={
              <Suspense fallback={<TerminalLoader />}>
                <ProjectDetail />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
