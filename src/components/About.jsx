import React from 'react';

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">Full-Stack Java Engineer</h2>
          <p className="section-subtitle">Bridging Java 17, Spring Boot, and React.js web architectures with robust database optimization.</p>
        </div>

        <div className="glass-card" style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', alignItems: 'center', marginBottom: '32px' }}>
            
            {/* Professional Portrait Frame */}
            <div style={{
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              border: '1px solid var(--red-border)',
              boxShadow: 'var(--shadow-red)',
              position: 'relative'
            }}>
              <img 
                src="/argha-photo.jpg" 
                alt="Argha Kamal Saha" 
                style={{ width: '100%', height: '320px', objectFit: 'cover', objectPosition: 'center 20%', display: 'block' }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/profile.png';
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(180deg, transparent 0%, rgba(8,2,4,0.95) 100%)',
                padding: '16px',
                textAlign: 'center',
                color: 'var(--white)',
                fontFamily: 'var(--font-heading)',
                fontWeight: '700'
              }}>
                Argha Kamal Saha • Kolkata, India
              </div>
            </div>

            {/* Bio Content */}
            <div>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '16px', lineHeight: '1.8' }}>
                I am a detail-oriented <strong>Full-Stack Java Developer</strong> and Computer Science Engineering student at <strong>MCKV Institute of Engineering</strong>. My background spans engineering production backend services with <strong>Java 17, Spring Boot 4, Spring Security JWT, MapStruct, STOMP WebSockets, and PostgreSQL</strong>, as well as optimizing enterprise database queries for <strong>South Eastern Railway</strong>.
              </p>
              <p style={{ fontSize: '1.02rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                Whether architecting RESTful microservices, crafting responsive UIs with <strong>React.js and Tailwind CSS</strong>, or tuning relational database queries in <strong>Oracle & PostgreSQL</strong>, I focus on delivering clean, scalable, and secure software systems.
              </p>
            </div>

          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '20px',
            paddingTop: '30px',
            borderTop: '1px solid var(--border-color)'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--red-bright)', fontFamily: 'var(--font-heading)' }}>2+</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Software Internships</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--white)', fontFamily: 'var(--font-heading)' }}>2027</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>B.Tech CSE Graduation</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--red-bright)', fontFamily: 'var(--font-heading)' }}>Java 17</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Core Development Language</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--white)', fontFamily: 'var(--font-heading)' }}>100%</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Commitment to Quality</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
