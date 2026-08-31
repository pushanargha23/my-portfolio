import React from 'react';

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Academic Background</span>
          <h2 className="section-title">Education & Credentials</h2>
          <p className="section-subtitle">Academic degrees and foundations in Computer Science & Mathematics.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>

          {/* MCKVIE */}
          <div className="glass-card">
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: 'var(--radius-sm)',
              background: 'var(--red-subtle)',
              border: '1px solid var(--red-border)',
              color: 'var(--red-bright)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              marginBottom: '20px'
            }}>
              <i className="fa-solid fa-graduation-cap"></i>
            </div>

            <h3 style={{ fontSize: '1.25rem', marginBottom: '6px' }}>Bachelor of Technology (B.Tech)</h3>
            <div style={{ color: 'var(--red-bright)', fontSize: '0.95rem', marginBottom: '12px', fontWeight: '500' }}>
              Computer Science and Engineering (CSE)
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-dim)', marginBottom: '16px' }}>
              <i className="fa-solid fa-building-columns" style={{ color: 'var(--red-bright)' }}></i> MCKV Institute of Engineering, Liluah, Howrah | Aug 2023 – Apr 2027
            </div>

            <ul style={{ listStyle: 'none' }}>
              <li style={{ position: 'relative', paddingLeft: '20px', marginBottom: '8px', color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--red-bright)' }}>▹</span>
                Solid foundation in Data Structures & Algorithms implemented in <strong>Java</strong>.
              </li>
              <li style={{ position: 'relative', paddingLeft: '20px', marginBottom: '8px', color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--red-bright)' }}>▹</span>
                In-depth coursework in Machine Learning, Deep Learning, Operating Systems, and Relational Databases.
              </li>
              <li style={{ position: 'relative', paddingLeft: '20px', marginBottom: '8px', color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--red-bright)' }}>▹</span>
                Leadership and project-management experience gained through team engineering initiatives.
              </li>
            </ul>
          </div>

          {/* Elite Co-Ed */}
          <div className="glass-card">
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: 'var(--radius-sm)',
              background: 'var(--red-subtle)',
              border: '1px solid var(--red-border)',
              color: 'var(--white)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              marginBottom: '20px'
            }}>
              <i className="fa-solid fa-school"></i>
            </div>

            <h3 style={{ fontSize: '1.25rem', marginBottom: '6px' }}>Higher Secondary & Secondary Education</h3>
            <div style={{ color: 'var(--white)', fontSize: '0.95rem', marginBottom: '12px', fontWeight: '500' }}>
              WBCHSE (PCMB) & WBBSE
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-dim)', marginBottom: '16px' }}>
              <i className="fa-solid fa-location-dot" style={{ color: 'var(--red-bright)' }}></i> Elite Co-Ed (Higher Secondary), Bandel | 2010 – 2023
            </div>

            <ul style={{ listStyle: 'none' }}>
              <li style={{ position: 'relative', paddingLeft: '20px', marginBottom: '8px', color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--red-bright)' }}>▹</span>
                Higher Secondary (12th Grade): WBCHSE Board with Physics, Chemistry, Mathematics & Biology (PCMB, 2021 – 2023).
              </li>
              <li style={{ position: 'relative', paddingLeft: '20px', marginBottom: '8px', color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--red-bright)' }}>▹</span>
                Secondary Education (10th Grade): WBBSE Board (2010 – 2021).
              </li>
              <li style={{ position: 'relative', paddingLeft: '20px', marginBottom: '8px', color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--red-bright)' }}>▹</span>
                Developed strong quantitative and analytical fundamentals in science and mathematics.
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
