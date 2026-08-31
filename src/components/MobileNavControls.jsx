import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const routesSequence = [
  { path: '/', label: 'Home', icon: 'fa-house' },
  { path: '/about', label: 'About', icon: 'fa-user' },
  { path: '/experience', label: 'Experience', icon: 'fa-briefcase' },
  { path: '/skills', label: 'Skills', icon: 'fa-laptop-code' },
  { path: '/projects', label: 'Projects', icon: 'fa-layer-group' },
  { path: '/education', label: 'Education', icon: 'fa-graduation-cap' },
  { path: '/contact', label: 'Contact', icon: 'fa-paper-plane' }
];

export default function MobileNavControls() {
  const { pathname } = useLocation();

  return (
    <div className="mobile-nav-controls-wrapper">
      
      {/* Mobile-Only Bottom Glass Navigation Dock */}
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
