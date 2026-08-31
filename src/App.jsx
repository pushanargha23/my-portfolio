import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ExperiencePage from './pages/ExperiencePage.jsx';
import SkillsPage from './pages/SkillsPage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import EducationPage from './pages/EducationPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import Modals from './components/Modals.jsx';
import MobileNavControls from './components/MobileNavControls.jsx';

// Scroll to top helper on route navigation
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [activeProjectModal, setActiveProjectModal] = useState(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [toastText, setToastText] = useState('');
  const [showToast, setShowToast] = useState(false);

  const triggerToast = (msg) => {
    setToastText(msg);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3500);
  };

  return (
    <Router>
      <ScrollToTop />
      <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        
        {/* Multi-page Header */}
        <Navbar onOpenResume={() => setIsResumeModalOpen(true)} />

        {/* Dynamic Route Pages */}
        <main style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Home onOpenProjectModal={(id) => setActiveProjectModal(id)} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage onOpenProjectModal={(id) => setActiveProjectModal(id)} />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/contact" element={<ContactPage onShowToast={triggerToast} />} />
          </Routes>
        </main>

        {/* Mobile-Only Next Page Controls & Dock */}
        <MobileNavControls />

        {/* Global Footer */}
        <footer style={{ padding: '40px 0', borderTop: '1px solid var(--red-border)', background: 'var(--bg-dark)', marginTop: 'auto' }}>
          <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
            <div style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>
              © 2026 <strong>Argha Kamal Saha</strong>. All Rights Reserved. Built with React & Vite.
            </div>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              style={{
                width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.04)',
                border: '1px solid var(--red-border)', color: 'var(--red-bright)', display: 'flex',
                alignItems: 'center', justifyContent: 'center', cursor: 'pointer'
              }} 
              title="Back to top"
            >
              <i className="fa-solid fa-arrow-up"></i>
            </button>
          </div>
        </footer>

        {/* Toast Feedback */}
        <div style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          padding: '14px 24px',
          borderRadius: 'var(--radius-sm)',
          background: 'var(--bg-card)',
          border: '1px solid var(--red-border)',
          color: '#fff',
          boxShadow: '0 10px 30px rgba(0,0,0,0.7)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          zIndex: 2000,
          transform: showToast ? 'translateY(0)' : 'translateY(100px)',
          opacity: showToast ? 1 : 0,
          transition: 'var(--transition-normal)',
          pointerEvents: showToast ? 'all' : 'none'
        }}>
          <i className="fa-solid fa-circle-check" style={{ color: 'var(--red-bright)', fontSize: '1.2rem' }}></i>
          <span>{toastText}</span>
        </div>

        {/* Modals Overlay */}
        <Modals
          activeProject={activeProjectModal}
          onCloseProjectModal={() => setActiveProjectModal(null)}
          isResumeOpen={isResumeModalOpen}
          onCloseResumeModal={() => setIsResumeModalOpen(false)}
        />
      </div>
    </Router>
  );
}
