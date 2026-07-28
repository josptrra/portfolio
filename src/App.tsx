import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { LanguageProvider } from './context/LanguageContext';
import Home from './pages/Home';
import { TerminalLoader } from './components/ui/TerminalLoader';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));

function App() {
  return (
    <LanguageProvider>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#14141A',
            color: '#E8E6E3',
            border: '1px solid #1E1E28',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '12px',
          },
          success: {
            iconTheme: {
              primary: '#39FF14',
              secondary: '#0A0A0F',
            },
          },
        }}
      />
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
          <Route path="/sys-admin-root-8823" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
