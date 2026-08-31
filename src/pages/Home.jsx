import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';

export default function Home({ onOpenProjectModal }) {
  return (
    <div>
      <Hero />
      <About />

      {/* Quick Explore Banner */}
      <section style={{ padding: '60px 0', background: 'rgba(122, 0, 38, 0.15)', borderTop: '1px solid var(--border-gold)', borderBottom: '1px solid var(--border-gold)' }}>
        <div className="container" style={{ textCenter: 'center', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.8rem', color: 'var(--mb-gold)', marginBottom: '12px' }}>
            Explore Full Portfolio Sections
          </h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '24px', maxWidth: '600px', margin: '0 auto 24px' }}>
            Navigate through dedicated pages for my professional experience, skills, projects, education, and contact details.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <Link to="/experience" className="btn-mb-primary">
              View Experience <i className="fa-solid fa-briefcase"></i>
            </Link>
            <Link to="/projects" className="btn-mb-secondary">
              View Projects <i className="fa-solid fa-code"></i>
            </Link>
            <Link to="/contact" className="btn-mb-secondary">
              Contact Me <i className="fa-solid fa-paper-plane"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
