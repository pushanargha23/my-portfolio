import React from 'react';

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Career History</span>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">Internship roles where I applied software development and database engineering in real-world environments.</p>
        </div>

        <div className="timeline-wrapper">
          {/* Vertical Crimson Red Connector Line */}
          <div className="timeline-line"></div>

          {/* South Eastern Railway */}
          <div className="timeline-item">
            <div className="timeline-node"></div>

            <div className="glass-card timeline-card">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-title">I.T. & Computer Science Intern</h3>
                  <div className="timeline-company">South Eastern Railway</div>
                </div>
                <span className="timeline-badge">July 2026 – August 2026</span>
              </div>

              <div className="timeline-meta">
                <i className="fa-solid fa-location-dot" style={{ color: 'var(--red-bright)' }}></i> Garden Reach, West Bengal, India | On-site
              </div>

              <ul className="timeline-list">
                <li>
                  <span className="timeline-bullet">▹</span>
                  Selected for the competitive Summer Internship Programme in I.T. & Computer Science at South Eastern Railway headquarters.
                </li>
                <li>
                  <span className="timeline-bullet">▹</span>
                  Worked hands-on with enterprise <strong>Oracle Database</strong> systems, writing and optimizing complex SQL queries to support daily IT operations.
                </li>
                <li>
                  <span className="timeline-bullet">▹</span>
                  Analyzed enterprise database systems to support day-to-day IT operations and internal reporting workflows.
                </li>
              </ul>

              <div className="timeline-tags">
                <span className="tech-chip">Oracle Database</span>
                <span className="tech-chip">SQL Query Optimization</span>
                <span className="tech-chip">Enterprise IT Operations</span>
              </div>
            </div>
          </div>

          {/* ARMB */}
          <div className="timeline-item">
            <div className="timeline-node"></div>

            <div className="glass-card timeline-card">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-title">Full-Stack & Backend Software Intern</h3>
                  <div className="timeline-company">ARMB</div>
                </div>
                <span className="timeline-badge">January 2026 – July 2026</span>
              </div>

              <div className="timeline-meta">
                <i className="fa-solid fa-globe" style={{ color: 'var(--red-bright)' }}></i> Remote
              </div>

              <ul className="timeline-list">
                <li>
                  <span className="timeline-bullet">▹</span>
                  Engineered <strong>SkipIt Backend</strong> (Matching Engine & RESTful API Platform), built with <strong>Java 17 & Spring Boot 4</strong> using <strong>MapStruct</strong>, <strong>OpenAPI 3/Swagger</strong>, and <strong>Spring Security JWT</strong>.
                </li>
                <li>
                  <span className="timeline-bullet">▹</span>
                  Developed <strong>Gulum Backend</strong> (Educational Institution Platform), implementing Spring Data JPA entities, <strong>PostgreSQL</strong> persistence, and STOMP <strong>WebSockets</strong> for real-time notifications.
                </li>
                <li>
                  <span className="timeline-bullet">▹</span>
                  Built automated Excel data processing workflows using <strong>Apache POI</strong> and designed secure JSON Patch DTO transformation APIs.
                </li>
              </ul>

              <div className="timeline-tags">
                <span className="tech-chip">Java 17</span>
                <span className="tech-chip">Spring Boot 4</span>
                <span className="tech-chip">MapStruct</span>
                <span className="tech-chip">PostgreSQL</span>
                <span className="tech-chip">JWT & Security</span>
                <span className="tech-chip">OpenAPI 3</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
