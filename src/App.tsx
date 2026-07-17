import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Home from './pages/Home';

const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:slug" element={
            <Suspense fallback={<div className="loading">Loading...</div>}>
              <ProjectDetail />
            </Suspense>
          } />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
