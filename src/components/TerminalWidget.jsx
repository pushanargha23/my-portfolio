import React, { useState } from 'react';

export default function TerminalWidget() {
  const [activeTab, setActiveTab] = useState('info');

  return (
    <div className="terminal-card" style={{
      background: 'rgba(5, 1, 3, 0.95)',
      border: '1px solid var(--red-border)',
      borderRadius: 'var(--radius-md)',
      boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8)',
      overflow: 'hidden',
      fontFamily: 'var(--font-mono)'
    }}>
      <div style={{
        background: '#0F0307',
        padding: '12px 18px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid var(--border-color)'
      }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FF003C' }}></span>
          <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FF758F' }}></span>
          <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#38BDF8' }}></span>
        </div>
        <span style={{ fontSize: '0.82rem', color: 'var(--text-dim)' }}>argha@java-terminal:~ (zsh)</span>
      </div>

      <div style={{
        display: 'flex',
        background: 'rgba(255,255,255,0.03)',
        borderBottom: '1px solid var(--border-color)',
        padding: '6px 12px',
        gap: '10px'
      }}>
        <button
          onClick={() => setActiveTab('info')}
          style={{
            background: activeTab === 'info' ? 'var(--red-neon)' : 'transparent',
            color: activeTab === 'info' ? '#fff' : 'var(--text-muted)',
            border: 'none',
            padding: '4px 12px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '0.8rem',
            fontFamily: 'var(--font-mono)'
          }}
        >
          info.json
        </button>
        <button
          onClick={() => setActiveTab('stack')}
          style={{
            background: activeTab === 'stack' ? 'var(--red-primary)' : 'transparent',
            color: activeTab === 'stack' ? '#fff' : 'var(--text-muted)',
            border: 'none',
            padding: '4px 12px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '0.8rem',
            fontFamily: 'var(--font-mono)'
          }}
        >
          tech_stack.sh
        </button>
        <button
          onClick={() => setActiveTab('status')}
          style={{
            background: activeTab === 'status' ? 'var(--red-subtle)' : 'transparent',
            color: activeTab === 'status' ? 'var(--red-neon)' : 'var(--text-muted)',
            border: 'none',
            padding: '4px 12px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '0.8rem',
            fontFamily: 'var(--font-mono)'
          }}
        >
          git_status.log
        </button>
      </div>

      <div style={{ padding: '20px', fontSize: '0.88rem', color: '#e2e8f0', minHeight: '200px' }}>
        {activeTab === 'info' && (
          <div>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
              <span style={{ color: 'var(--red-neon)' }}>argha$</span>
              <span>cat info.json</span>
            </div>
            <div style={{ paddingLeft: '16px', color: 'var(--text-muted)' }}>
              &#123;<br />
              &nbsp;&nbsp;<span style={{ color: 'var(--red-neon)' }}>"developer"</span>: <span style={{ color: '#fff' }}>"Argha Kamal Saha"</span>,<br />
              &nbsp;&nbsp;<span style={{ color: 'var(--red-neon)' }}>"specialization"</span>: <span style={{ color: '#fff' }}>"Full-Stack Java Engineer"</span>,<br />
              &nbsp;&nbsp;<span style={{ color: 'var(--red-neon)' }}>"college"</span>: <span style={{ color: '#fff' }}>"MCKV Institute of Engineering (CSE)"</span>,<br />
              &nbsp;&nbsp;<span style={{ color: 'var(--red-neon)' }}>"location"</span>: <span style={{ color: '#fff' }}>"Kolkata, India"</span><br />
              &#125;
            </div>
          </div>
        )}

        {activeTab === 'stack' && (
          <div>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
              <span style={{ color: 'var(--red-neon)' }}>argha$</span>
              <span>./tech_stack.sh --summary</span>
            </div>
            <div style={{ paddingLeft: '16px', color: 'var(--text-muted)', lineHeight: '1.8' }}>
              [✓] Backend: Java 17, Spring Boot 4, Spring Security JWT, MapStruct<br />
              [✓] Frontend: React.js, Node.js, JavaScript, Tailwind CSS<br />
              [✓] Databases: MongoDB, PostgreSQL, Oracle Database, SQL Optimization<br />
              [✓] Real-Time & Docs: STOMP WebSockets, OpenAPI 3 / Swagger<br />
            </div>
          </div>
        )}

        {activeTab === 'status' && (
          <div>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
              <span style={{ color: 'var(--red-neon)' }}>argha$</span>
              <span>git status</span>
            </div>
            <div style={{ paddingLeft: '16px', color: 'var(--text-muted)' }}>
              On branch main<br />
              Your branch is up to date with 'origin/main'.<br /><br />
              <span style={{ color: '#FF758F' }}>nothing to commit, working tree clean</span><br />
              🚀 Actively engineering high-performance Java & React solutions!
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
