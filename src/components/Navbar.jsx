import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileActive, setMobileActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        
        {/* AKS Logo Brand */}
        <Link to="/" className="nav-logo" onClick={() => setMobileActive(false)}>
          <div className="nav-logo-badge" style={{ fontWeight: '900', fontFamily: 'var(--font-heading)', fontSize: '0.85rem', letterSpacing: '-0.5px' }}>
            AKS
          </div>
          <span>AKS<span className="text-red">.dev</span></span>
        </Link>

        <ul className={`nav-links ${mobileActive ? 'mobile-active' : ''}`}>
          <li>
            <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setMobileActive(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setMobileActive(false)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/experience" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setMobileActive(false)}>
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setMobileActive(false)}>
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setMobileActive(false)}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/education" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setMobileActive(false)}>
              Education
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setMobileActive(false)}>
              Contact
            </NavLink>
          </li>
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button onClick={onOpenResume} className="btn-mb-primary" style={{ padding: '8px 20px', fontSize: '0.88rem' }}>
            <i className="fa-solid fa-file-pdf"></i> Resume
          </button>

          <button 
            className="mobile-toggle"
            onClick={() => setMobileActive(!mobileActive)}
            aria-label="Toggle Navigation Menu"
          >
            <i className={`fa-solid ${mobileActive ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>
    </header>
  );
}
