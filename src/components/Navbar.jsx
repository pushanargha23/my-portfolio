import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);

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
        
        {/* Standalone Logo Image in Original Shape */}
        <Link to="/" className="nav-logo" style={{ padding: 0, background: 'none' }}>
          <img 
            src="/logo.png" 
            alt="AKS Logo" 
            style={{ 
              height: '46px', 
              width: 'auto', 
              display: 'block', 
              borderRadius: '0', 
              filter: 'drop-shadow(0 0 10px rgba(255, 0, 60, 0.45))'
            }}
          />
        </Link>

        <ul className="nav-links">
          <li>
            <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/experience" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/education" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Education
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Contact
            </NavLink>
          </li>
        </ul>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button onClick={onOpenResume} className="btn-mb-primary" style={{ padding: '8px 20px', fontSize: '0.88rem' }}>
            <i className="fa-solid fa-file-pdf"></i> Resume
          </button>
        </div>
      </div>
    </header>
  );
}
