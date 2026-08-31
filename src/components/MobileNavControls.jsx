import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const routesSequence = [
  { path: '/', label: 'Home', nextPath: '/about', nextLabel: 'About Me', icon: 'fa-house' },
  { path: '/about', label: 'About', nextPath: '/experience', nextLabel: 'Work Experience', icon: 'fa-user' },
  { path: '/experience', label: 'Experience', nextPath: '/skills', nextLabel: 'Technical Skills', icon: 'fa-briefcase' },
  { path: '/skills', label: 'Skills', nextPath: '/projects', nextLabel: 'Featured Projects', icon: 'fa-laptop-code' },
  { path: '/projects', label: 'Projects', nextPath: '/education', nextLabel: 'Education & Degree', icon: 'fa-layer-group' },
  { path: '/education', label: 'Education', nextPath: '/contact', nextLabel: 'Contact Me', icon: 'fa-graduation-cap' },
  { path: '/contact', label: 'Contact', nextPath: '/', nextLabel: 'Back to Home', icon: 'fa-paper-plane' }
];

export default function MobileNavControls() {
  const { pathname } = useLocation();
  const currentRouteIndex = routesSequence.findIndex(r => r.path === pathname);
  const currentRoute = currentRouteIndex !== -1 ? routesSequence[currentRouteIndex] : routesSequence[0];

  return (
    <div className="mobile-nav-controls-wrapper">
      
      {/* 1. Mobile-Only Next Page Banner (Placed before footer) */}
      <div className="container mobile-next-page-banner">
        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--red-border)',
          borderRadius: 'var(--radius-md)',
          padding: '20px 24px',
          display: 'flex',
          justify: 'space-between',
          alignItems: 'center',
          marginTop: '30px',
          marginBottom: '20px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.6)'
        }}>
          <div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
              Next Section
            </div>
            <div style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--white)' }}>
              {currentRoute.nextLabel}
            </div>
          </div>

          <Link to={currentRoute.nextPath} className="btn-mb-primary" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>
            Next Page <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>

      {/* 2. Mobile-Only Bottom Glass Navigation Dock */}
      <nav className="mobile-bottom-dock">
        {routesSequence.filter(r => ['/', '/about', '/experience', '/projects', '/contact'].includes(r.path)).map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`mobile-dock-item ${isActive ? 'active' : ''}`}
            >
              <i className={`fa-solid ${item.icon}`}></i>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

    </div>
  );
}
