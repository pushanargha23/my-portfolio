import React from 'react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: 'fa-solid fa-code',
      skills: [
        { name: 'Java', icon: 'fa-brands fa-java', color: '#EF233C' },
        { name: 'Python', icon: 'fa-brands fa-python', color: '#FF758F' },
        { name: 'C', icon: 'fa-solid fa-c', color: '#E2E8F0' }
      ]
    },
    {
      title: 'Web Development',
      icon: 'fa-solid fa-laptop-code',
      skills: [
        { name: 'React.js', icon: 'fa-brands fa-react', color: '#61dafb' },
        { name: 'Node.js', icon: 'fa-brands fa-node-js', color: '#68a063' },
        { name: 'JavaScript', icon: 'fa-brands fa-js', color: '#f7df1e' },
        { name: 'HTML5 / CSS3', icon: 'fa-brands fa-html5', color: '#EF233C' },
        { name: 'Tailwind CSS', icon: 'fa-solid fa-wind', color: '#38bdf8' }
      ]
    },
    {
      title: 'Databases & AI / ML',
      icon: 'fa-solid fa-database',
      skills: [
        { name: 'Spring Boot', icon: 'fa-solid fa-leaf', color: '#6DB33F' },
        { name: 'MongoDB', icon: 'fa-solid fa-database', color: '#47A248' },
        { name: 'Oracle Database', icon: 'fa-solid fa-server', color: '#D90429' },
        { name: 'Machine Learning', icon: 'fa-solid fa-brain', color: '#FF758F' },
        { name: 'Deep Learning', icon: 'fa-solid fa-network-wired', color: '#EF233C' }
      ]
    },
    {
      title: 'Engineering & Soft Skills',
      icon: 'fa-solid fa-lightbulb',
      skills: [
        { name: 'Algorithms & Data Structures', icon: 'fa-solid fa-microchip', color: '#FF758F' },
        { name: 'Competitive Coding', icon: 'fa-solid fa-terminal', color: '#EF233C' },
        { name: 'Leadership & Teamwork', icon: 'fa-solid fa-users', color: '#f43f5e' },
        { name: 'Project Management', icon: 'fa-solid fa-diagram-project', color: '#D90429' }
      ]
    }
  ];

  return (
    <section id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Tech Stack</span>
          <h2 className="section-title">Technical & Analytical Skills</h2>
          <p className="section-subtitle">Languages, frameworks, databases, and core problem-solving capabilities.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {skillCategories.map((cat, idx) => (
            <div className="glass-card" key={idx}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-primary)' }}>
                <i className={`${cat.icon}`} style={{ color: 'var(--red-bright)' }}></i> {cat.title}
              </h3>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {cat.skills.map((s, sIdx) => (
                  <div key={sIdx} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '10px 16px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--red-border)',
                    fontSize: '0.92rem',
                    fontWeight: '500',
                    transition: 'var(--transition-fast)',
                    cursor: 'default'
                  }}>
                    <i className={s.icon} style={{ color: s.color, fontSize: '1.1rem' }}></i>
                    <span>{s.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
