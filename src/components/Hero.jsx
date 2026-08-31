import React, { useState, useEffect } from 'react';
import TerminalWidget from './TerminalWidget.jsx';

export default function Hero() {
  const [typingText, setTypingText] = useState('');
  const [showTerminal, setShowTerminal] = useState(false);

  const words = [
    'Full-Stack Java Developer',
    'Spring Boot & Microservices Engineer',
    'Full-Stack Web Developer',
    'Software Engineering Intern',
    'CSE Student @ MCKVIE'
  ];

  useEffect(() => {
    let wordIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let timeoutId;

    function type() {
      const currentWord = words[wordIdx];
      if (isDeleting) {
        setTypingText(currentWord.substring(0, charIdx - 1));
        charIdx--;
      } else {
        setTypingText(currentWord.substring(0, charIdx + 1));
        charIdx++;
      }

      if (!isDeleting && charIdx === currentWord.length) {
        isDeleting = true;
        timeoutId = setTimeout(type, 1800);
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        wordIdx = (wordIdx + 1) % words.length;
        timeoutId = setTimeout(type, 300);
      } else {
        timeoutId = setTimeout(type, isDeleting ? 40 : 90);
      }
    }

    type();
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-grid">
        
        {/* Left Column: Bio & Action CTAs */}
        <div className="hero-content">
          <div className="hero-status-pill">
            <span className="pulsing-dot"></span>
            Open for Java & Software Engineering Roles
          </div>

          <h1 className="hero-title">
            Argha Kamal <span className="text-gradient">Saha</span>
          </h1>

          <div className="hero-typing">
            <span>I'm a </span>
            <span className="typing-text">{typingText}</span>
            <span className="typing-cursor"></span>
          </div>

          {/* Floating Tech Stack Pills */}
          <div className="floating-tech-grid">
            <span className="tech-pill-tag">
              <i className="fa-brands fa-java" style={{ color: '#FF003C' }}></i> Java 17
            </span>
            <span className="tech-pill-tag">
              <i className="fa-solid fa-leaf" style={{ color: '#68a063' }}></i> Spring Boot 4
            </span>
            <span className="tech-pill-tag">
              <i className="fa-brands fa-react" style={{ color: '#61dafb' }}></i> React.js
            </span>
            <span className="tech-pill-tag">
              <i className="fa-solid fa-database" style={{ color: '#336791' }}></i> PostgreSQL
            </span>
            <span className="tech-pill-tag">
              <i className="fa-solid fa-server" style={{ color: '#D90429' }}></i> Oracle DB
            </span>
          </div>

          <p className="hero-description">
            Detail-oriented <strong>Full-Stack Java Developer</strong> and Computer Science Engineering student at <strong>MCKV Institute of Engineering</strong>. Specialized in engineering <strong>Java 17 & Spring Boot</strong> microservices, modern <strong>React.js</strong> web applications, and optimizing enterprise <strong>Oracle & PostgreSQL</strong> databases.
          </p>

          <div className="hero-ctas">
            <a href="#projects" className="btn-mb-primary">
              Explore Projects <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a href="#contact" className="btn-mb-secondary">
              Get in Touch <i className="fa-solid fa-paper-plane"></i>
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/pushanargha" target="_blank" rel="noreferrer" className="social-icon-btn" title="GitHub">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/Argha-h" target="_blank" rel="noreferrer" className="social-icon-btn" title="LinkedIn">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="mailto:arghakamal.527@gmail.com" className="social-icon-btn" title="Email">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>

        {/* Right Showcase Column (Single High-Impact Portrait Card & Terminal Toggle) */}
        <div className="hero-widget-col" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          {/* Single High-Res Portrait Card */}
          <div className="trendy-portrait-card">
            <img 
              src="/argha-photo.jpg" 
              alt="Argha Kamal Saha - Professional Portrait" 
              className="trendy-portrait-img"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/profile.png';
              }}
            />
            <div className="trendy-glass-badge">
              <div>
                <h4>Argha Kamal Saha</h4>
                <p>Full-Stack Java Software Engineer</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', color: 'var(--white)' }}>
                <i className="fa-solid fa-location-dot" style={{ color: 'var(--red-neon)' }}></i> Kolkata, India
              </div>
            </div>
          </div>

          {/* Interactive Terminal Toggle Button */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button
              onClick={() => setShowTerminal(!showTerminal)}
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--red-border)',
                borderRadius: 'var(--radius-sm)',
                padding: '8px 16px',
                color: 'var(--silver)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                width: '100%',
                justifyContent: 'center',
                transition: 'var(--transition-fast)'
              }}
            >
              <i className="fa-solid fa-terminal" style={{ color: 'var(--red-neon)' }}></i>
              {showTerminal ? 'Hide Terminal CLI' : 'Open Developer CLI Terminal'}
            </button>
          </div>

          {showTerminal && (
            <div style={{ animation: 'fadeIn 0.3s ease' }}>
              <TerminalWidget />
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
