import React from 'react';

export default function Modals({ activeProject, onCloseProjectModal, isResumeOpen, onCloseResumeModal }) {
  const projectDetails = {
    'skipit-backend': {
      title: 'SkipIt Backend (ARMB)',
      badge: 'Matching Engine / Spring Boot 4',
      description: 'High-performance matching engine and RESTful API server engineered for SkipIt during my internship at ARMB. Features MapStruct zero-reflection mapping, OpenAPI 3 / Swagger interactive API testing, Spring Security JWT authentication, and PostgreSQL JPA data access.',
      highlights: [
        'Engineered high-performance RESTful API endpoints and matching engine using Java 17 & Spring Boot 4.0.5',
        'Implemented Spring Security JWT authentication and role-based access control (RBAC)',
        'Configured MapStruct 1.5.5 for zero-reflection high-efficiency DTO entity transformation',
        'Integrated OpenAPI 3 / Swagger UI (springdoc-openapi) for interactive browser-based API testing',
        'Designed safe relational persistence with PostgreSQL & Spring Data JPA'
      ],
      tech: ['Java 17', 'Spring Boot 4', 'MapStruct', 'OpenAPI 3 / Swagger', 'PostgreSQL', 'Spring Security JWT'],
      github: 'https://github.com/pushanargha'
    },
    'gulum-backend': {
      title: 'Gulum Backend (ARMB)',
      badge: 'Enterprise / Spring Boot 4',
      description: 'An enterprise Spring Boot 4 backend microservices platform engineered for educational institutions during my internship at ARMB. Features robust Spring Security JWT authentication, PostgreSQL relational persistence, STOMP WebSockets, and Apache POI Excel processing.',
      highlights: [
        'Engineered Spring Boot RESTful APIs for institutional management workflows in Java 17',
        'Implemented Spring Security with JWT authentication and role-based access control (RBAC)',
        'Integrated PostgreSQL database persistence using Spring Data JPA & Hibernate ORM',
        'Built STOMP WebSocket handlers for real-time notifications & Apache POI for automated Excel reporting'
      ],
      tech: ['Java 17', 'Spring Boot 4', 'PostgreSQL', 'Spring Security JWT', 'STOMP WebSockets', 'Apache POI', 'Lombok'],
      github: 'https://github.com/pushanargha'
    },
    'kode-rise': {
      title: 'Kode and Rise',
      badge: 'Full-Stack / E-Commerce',
      description: 'A comprehensive E-Commerce and Digital Marketing application engineered to deliver modern digital storefront capabilities, product showcase, cart logic, and integrated QR code tracking for seamless promotional campaigns.',
      highlights: [
        'Built responsive UI with React.js & Tailwind CSS for optimal conversion rates',
        'Implemented Node.js backend services to handle product inventory & orders',
        'Integrated QRjs dynamic QR generation for interactive digital marketing campaigns',
        'Designed smooth user workflows for modern digital commerce experience'
      ],
      tech: ['React.js', 'Node.js', 'Tailwind CSS', 'JavaScript', 'HTML5/CSS3', 'QRjs'],
      github: 'https://github.com/pushanargha'
    },
    'agri-guru': {
      title: 'Agri-Guru',
      badge: 'AI & Supply Chain Security',
      description: 'A tech-driven supply chain and drug verification platform designed to prevent counterfeit agricultural drugs and supplies. Utilizes cryptographic and QR-code tracking to authenticate genuine products from source to consumer.',
      highlights: [
        'Comprehensive supply chain verification platform preventing counterfeit goods',
        'Implemented secure QR-code verification mechanism for instant drug validation',
        'Frontend built with React.js and HTML5/CSS3 for seamless verification UI',
        'Node.js REST APIs for supply chain batch verification & auditing'
      ],
      tech: ['React.js', 'Node.js', 'JavaScript', 'HTML5', 'CSS3', 'QR Tracking'],
      github: 'https://github.com/pushanargha'
    },
    'ser-database': {
      title: 'South Eastern Railway IT Database System',
      badge: 'Enterprise / Database',
      description: 'Enterprise IT database optimization and query engineering developed during the Summer Internship at South Eastern Railway, Garden Reach.',
      highlights: [
        'Optimized complex Oracle SQL queries to support daily enterprise IT operations',
        'Analyzed multi-relational database schemas for high availability and reporting',
        'Streamlined internal reporting workflows for computer science & IT operations'
      ],
      tech: ['Oracle Database', 'SQL', 'Database Design', 'Enterprise Operations'],
      github: 'https://github.com/pushanargha'
    }
  };

  const currentProject = activeProject ? projectDetails[activeProject] : null;

  return (
    <>
      {/* Project Detail Modal */}
      {currentProject && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
          background: 'rgba(4, 1, 3, 0.88)', backdropFilter: 'blur(14px)',
          zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px'
        }} onClick={onCloseProjectModal}>
          <div style={{
            background: 'var(--bg-secondary)', border: '1px solid var(--red-border)',
            borderRadius: 'var(--radius-md)', maxWidth: '720px', width: '100%',
            maxHeight: '90vh', overflowY: 'auto', padding: '36px', position: 'relative',
            boxShadow: '0 25px 60px rgba(0,0,0,0.85)'
          }} onClick={(e) => e.stopPropagation()}>
            <button onClick={onCloseProjectModal} style={{
              position: 'absolute', top: '20px', right: '20px', width: '36px', height: '36px',
              borderRadius: '50%', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)',
              color: 'var(--text-muted)', cursor: 'pointer'
            }}>
              <i className="fa-solid fa-xmark"></i>
            </button>

            <span style={{
              display: 'inline-block', padding: '4px 12px', borderRadius: 'var(--radius-full)',
              background: 'var(--red-subtle)', border: '1px solid var(--red-border)',
              color: 'var(--red-bright)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', marginBottom: '14px'
            }}>
              {currentProject.badge}
            </span>

            <h2 style={{ fontSize: '2rem', marginBottom: '12px', color: 'var(--text-primary)' }}>{currentProject.title}</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6', marginBottom: '24px' }}>
              {currentProject.description}
            </p>

            <h4 style={{ fontSize: '1.1rem', color: 'var(--red-bright)', marginBottom: '12px' }}>Key Architecture & Highlights</h4>
            <ul style={{ listStyle: 'none', paddingLeft: 0, marginBottom: '24px' }}>
              {currentProject.highlights.map((h, i) => (
                <li key={i} style={{ position: 'relative', paddingLeft: '20px', marginBottom: '8px', color: 'var(--text-muted)' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--red-bright)' }}>▹</span> {h}
                </li>
              ))}
            </ul>

            <h4 style={{ fontSize: '1.1rem', color: 'var(--red-bright)', marginBottom: '12px' }}>Tech Stack</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
              {currentProject.tech.map((t, i) => (
                <span key={i} style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.8rem', padding: '4px 12px',
                  borderRadius: '6px', background: 'var(--red-subtle)', border: '1px solid var(--red-border)', color: 'var(--white)'
                }}>
                  {t}
                </span>
              ))}
            </div>

            <a href={currentProject.github} target="_blank" rel="noreferrer" className="btn-mb-primary" style={{ padding: '10px 22px', fontSize: '0.9rem' }}>
              <i className="fa-brands fa-github"></i> View GitHub Repository
            </a>
          </div>
        </div>
      )}

      {/* Resume Modal */}
      {isResumeOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
          background: 'rgba(4, 1, 3, 0.88)', backdropFilter: 'blur(14px)',
          zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px'
        }} onClick={onCloseResumeModal}>
          <div style={{
            background: 'var(--bg-secondary)', border: '1px solid var(--red-border)',
            borderRadius: 'var(--radius-md)', maxWidth: '850px', width: '100%',
            maxHeight: '90vh', overflowY: 'auto', padding: '36px', position: 'relative',
            boxShadow: '0 25px 60px rgba(0,0,0,0.85)'
          }} onClick={(e) => e.stopPropagation()}>
            <button onClick={onCloseResumeModal} style={{
              position: 'absolute', top: '20px', right: '20px', width: '36px', height: '36px',
              borderRadius: '50%', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)',
              color: 'var(--text-muted)', cursor: 'pointer'
            }}>
              <i className="fa-solid fa-xmark"></i>
            </button>

            <div style={{ textAlign: 'center', marginBottom: '24px', paddingBottom: '16px', borderBottom: '1px solid var(--border-color)' }}>
              <h2 style={{ fontSize: '2.2rem', marginBottom: '6px' }}>Argha Kamal Saha</h2>
              <div style={{ color: 'var(--red-bright)', fontFamily: 'var(--font-mono)', fontSize: '0.92rem', fontWeight: '600' }}>
                Computer Science & Engineering Student | Full-Stack & Database Developer
              </div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginTop: '6px' }}>
                Kolkata, India • +91 7890735867 • arghakamal.527@gmail.com • github.com/pushanargha
              </div>
            </div>

            <div style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ color: 'var(--red-bright)', fontSize: '1.1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '4px', marginBottom: '8px' }}>
                  Professional Summary
                </h4>
                <p>
                  Tech-driven and detail-oriented Computer Science and Engineering student with knowledge of programming, machine learning, deep learning, web development, and competitive coding. Strong foundation in problem-solving and analytical thinking, with hands-on experience in full-stack development and database technologies gained through internships.
                </p>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ color: 'var(--red-bright)', fontSize: '1.1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '4px', marginBottom: '8px' }}>
                  Experience
                </h4>
                <div style={{ marginBottom: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-primary)', fontWeight: '600' }}>
                    <span>Intern — South Eastern Railway</span>
                    <span>July 2026 – August 2026</span>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--red-bright)' }}>Garden Reach, West Bengal, India | On-site</div>
                  <ul style={{ marginTop: '6px', paddingLeft: '18px' }}>
                    <li>Selected for the competitive Summer Internship Programme in I.T. & Computer Science.</li>
                    <li>Worked hands-on with Oracle Database, writing and optimizing SQL queries to support enterprise IT operations.</li>
                    <li>Analyzed enterprise database systems to support day-to-day IT operations and reporting workflows.</li>
                  </ul>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-primary)', fontWeight: '600' }}>
                    <span>Intern — ARMB</span>
                    <span>January 2026 – July 2026</span>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--white)' }}>Remote</div>
                  <ul style={{ marginTop: '6px', paddingLeft: '18px' }}>
                    <li>Developed full-stack application features using Python and modern web development tools.</li>
                    <li>Collaborated with team members on ongoing software and web development initiatives spanning frontend and backend.</li>
                  </ul>
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ color: 'var(--red-bright)', fontSize: '1.1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '4px', marginBottom: '8px' }}>
                  Education
                </h4>
                <div style={{ marginBottom: '10px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-primary)', fontWeight: '600' }}>
                    <span>MCKV Institute of Engineering, Liluah, Howrah</span>
                    <span>Aug 2023 – Apr 2027</span>
                  </div>
                  <div>B.Tech in Computer Science and Engineering (CSE)</div>
                </div>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-primary)', fontWeight: '600' }}>
                    <span>Elite Co-Ed (Higher Secondary), Bandel</span>
                    <span>2010 – 2023</span>
                  </div>
                  <div>WBCHSE (PCMB), 2021 – 2023 • WBBSE, 2010 – 2021</div>
                </div>
              </div>

              <div>
                <h4 style={{ color: 'var(--red-bright)', fontSize: '1.1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '4px', marginBottom: '8px' }}>
                  Technical Skills
                </h4>
                <p><strong>Languages:</strong> Java, Python, C</p>
                <p><strong>Web Development:</strong> React.js, Node.js, HTML, CSS, JavaScript, Tailwind CSS</p>
                <p><strong>Database:</strong> Oracle Database, SQL</p>
                <p><strong>AI / ML:</strong> Machine Learning, Deep Learning</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
