import React, { useState } from 'react';

export default function Projects({ onOpenProjectModal }) {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 'skipit-backend',
      title: 'SkipIt',
      category: 'web',
      badge: 'Matching Engine / Spring Boot 4',
      desc: 'Core matching engine and RESTful API backend service for SkipIt, engineered with Java 17, Spring Boot 4, MapStruct, OpenAPI 3/Swagger UI, Spring Security JWT, and PostgreSQL.',
      tech: ['Java 17', 'Spring Boot 4', 'MapStruct', 'OpenAPI 3', 'PostgreSQL', 'Spring Security JWT'],
      github: 'https://github.com/pushanargha'
    },
    {
      id: 'gulum-backend',
      title: 'Gulum',
      category: 'web',
      badge: 'Enterprise / Spring Boot',
      desc: 'Institutional management platform backend built with Java 17, Spring Boot 4, PostgreSQL, Spring Security JWT, WebSockets, and Apache POI for educational institutions.',
      tech: ['Java 17', 'Spring Boot', 'PostgreSQL', 'Spring Security JWT', 'WebSockets', 'Apache POI'],
      github: 'https://github.com/pushanargha',
      liveUrl: 'https://gulum-web.armb.cloud/login'
    },
    {
      id: 'kode-rise',
      title: 'Kode and Rise',
      category: 'web',
      badge: 'Full-Stack / E-Commerce',
      desc: 'An E-Commerce and digital marketing platform built to provide modern storefront experiences, product showcase UI, order logic, and QRjs integration for digital marketing promotions.',
      tech: ['React.js', 'Node.js', 'Tailwind CSS', 'QRjs', 'JavaScript'],
      github: 'https://github.com/pushanargha'
    },
    {
      id: 'agri-guru',
      title: 'Agri-Guru',
      category: 'security',
      badge: 'Supply Chain & QR',
      desc: 'Comprehensive supply chain and drug verification platform built to combat counterfeit agricultural supplies through secure QR-code verification and batch tracking.',
      tech: ['React.js', 'Node.js', 'JavaScript', 'HTML5', 'QR Tracking'],
      github: 'https://github.com/pushanargha'
    },
    {
      id: 'ser-database',
      title: 'South Eastern Railway IT Database System',
      category: 'web',
      badge: 'Database System',
      desc: 'Enterprise Oracle SQL query optimization and relational database analysis designed during the IT internship at South Eastern Railway, Garden Reach.',
      tech: ['Oracle Database', 'SQL', 'IT Operations', 'Schema Optimization'],
      github: 'https://github.com/pushanargha'
    }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Featured Work</span>
          <h2 className="section-title">Projects Showcase</h2>
          <p className="section-subtitle">Key software applications built using modern web stacks and security frameworks.</p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '48px', flexWrap: 'wrap' }}>
          <button
            onClick={() => setFilter('all')}
            style={{
              padding: '8px 22px',
              borderRadius: 'var(--radius-full)',
              background: filter === 'all' ? 'var(--grad-red)' : 'rgba(255, 255, 255, 0.04)',
              border: '1px solid var(--red-border)',
              color: filter === 'all' ? '#fff' : 'var(--text-muted)',
              fontSize: '0.9rem',
              fontWeight: filter === 'all' ? '700' : '500',
              cursor: 'pointer',
              transition: 'var(--transition-fast)'
            }}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter('web')}
            style={{
              padding: '8px 22px',
              borderRadius: 'var(--radius-full)',
              background: filter === 'web' ? 'var(--grad-red)' : 'rgba(255, 255, 255, 0.04)',
              border: '1px solid var(--red-border)',
              color: filter === 'web' ? '#fff' : 'var(--text-muted)',
              fontSize: '0.9rem',
              fontWeight: filter === 'web' ? '700' : '500',
              cursor: 'pointer',
              transition: 'var(--transition-fast)'
            }}
          >
            Web Apps & Systems
          </button>
          <button
            onClick={() => setFilter('security')}
            style={{
              padding: '8px 22px',
              borderRadius: 'var(--radius-full)',
              background: filter === 'security' ? 'var(--grad-red)' : 'rgba(255, 255, 255, 0.04)',
              border: '1px solid var(--red-border)',
              color: filter === 'security' ? '#fff' : 'var(--text-muted)',
              fontSize: '0.9rem',
              fontWeight: filter === 'security' ? '700' : '500',
              cursor: 'pointer',
              transition: 'var(--transition-fast)'
            }}
          >
            Security & AI
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '30px' }}>
          {filteredProjects.map((p) => (
            <div className="glass-card" key={p.id} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{
                display: 'inline-block',
                alignSelf: 'flex-start',
                padding: '4px 12px',
                borderRadius: 'var(--radius-full)',
                background: 'var(--red-subtle)',
                border: '1px solid var(--red-border)',
                color: 'var(--red-bright)',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                fontWeight: '600',
                marginBottom: '14px'
              }}>
                {p.badge}
              </div>

              <h3 style={{ fontSize: '1.4rem', marginBottom: '12px' }}>
                {p.liveUrl ? (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color: 'var(--text-primary)',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'var(--transition-fast)'
                    }}
                    title="Direct redirect to live application"
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--red-bright)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                  >
                    <span>{p.title}</span>
                    <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: '0.85rem', color: 'var(--red-bright)' }}></i>
                  </a>
                ) : (
                  <span style={{ color: 'var(--text-primary)' }}>{p.title}</span>
                )}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '24px', flexGrow: 1, lineHeight: '1.6' }}>
                {p.desc}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                {p.tech.map((t, idx) => (
                  <span key={idx} style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    padding: '3px 10px',
                    borderRadius: '6px',
                    background: 'var(--red-subtle)',
                    border: '1px solid var(--red-border)',
                    color: 'var(--white)'
                  }}>
                    {t}
                  </span>
                ))}
              </div>

              <div style={{
                marginTop: 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '16px',
                borderTop: '1px solid var(--border-color)',
                flexWrap: 'wrap',
                gap: '12px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: 'var(--text-muted)', fontSize: '1.15rem', transition: 'var(--transition-fast)' }}
                      title="GitHub Repository"
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--white)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                    >
                      <i className="fa-brands fa-github"></i>
                    </a>
                  )}
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: 'var(--red-bright)', fontSize: '1.1rem', transition: 'var(--transition-fast)' }}
                      title="Direct Live Link / Login"
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--red-bright)')}
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                  )}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '6px 14px',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(255, 0, 60, 0.12)',
                        border: '1px solid var(--red-border)',
                        color: 'var(--red-bright)',
                        fontSize: '0.82rem',
                        fontWeight: '600',
                        textDecoration: 'none',
                        transition: 'var(--transition-fast)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--grad-red)';
                        e.currentTarget.style.color = '#ffffff';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 0, 60, 0.12)';
                        e.currentTarget.style.color = 'var(--red-bright)';
                      }}
                      title="Direct redirect to live page"
                    >
                      <span>Live App</span>
                      <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: '0.72rem' }}></i>
                    </a>
                  )}

                  <button
                    onClick={() => onOpenProjectModal(p.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--text-muted)',
                      fontSize: '0.88rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      transition: 'var(--transition-fast)'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--white)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                  >
                    Details <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
