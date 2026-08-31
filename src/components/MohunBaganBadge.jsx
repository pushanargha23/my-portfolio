import React, { useState } from 'react';

export default function MohunBaganBadge() {
  const [cheered, setCheered] = useState(false);
  const [cheerCount, setCheerCount] = useState(1889);

  const handleCheer = () => {
    setCheerCount(prev => prev + 1);
    setCheered(true);
    setTimeout(() => setCheered(false), 1500);
  };

  return (
    <div className="glass-card" style={{
      background: 'linear-gradient(135deg, rgba(217, 4, 41, 0.25) 0%, rgba(141, 8, 1, 0.25) 100%)',
      border: '1px solid var(--red-border)',
      textAlign: 'center',
      padding: '24px 20px',
      position: 'relative'
    }}>
      <div style={{
        position: 'absolute',
        top: '-12px',
        right: '20px',
        background: 'var(--red-primary)',
        color: '#fff',
        padding: '2px 10px',
        borderRadius: '12px',
        fontSize: '0.75rem',
        fontWeight: '800',
        letterSpacing: '1px'
      }}>
        MARINERS SPIRIT ⚽
      </div>

      <div style={{
        width: '64px',
        height: '64px',
        borderRadius: '50%',
        background: 'var(--grad-red)',
        border: '3px solid var(--white)',
        margin: '0 auto 14px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.8rem',
        color: 'var(--white)',
        boxShadow: 'var(--shadow-red)'
      }}>
        <i className="fa-solid fa-sailboat"></i>
      </div>

      <h4 style={{ fontSize: '1.2rem', color: 'var(--white)', marginBottom: '4px' }}>
        Joy Mohun Bagan! ❤️💚
      </h4>
      <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
        Kolkata CSE Developer • Engineered with passion, precision & green-maroon pride.
      </p>

      <button
        onClick={handleCheer}
        className="btn-mb-secondary"
        style={{
          padding: '8px 18px',
          fontSize: '0.85rem',
          borderRadius: 'var(--radius-full)',
          borderColor: cheered ? 'var(--red-bright)' : 'var(--red-border)',
          background: cheered ? 'var(--red-primary)' : 'rgba(255,255,255,0.05)',
          color: cheered ? '#fff' : 'var(--text-primary)'
        }}
      >
        <i className="fa-solid fa-heart" style={{ color: cheered ? '#fff' : '#EF233C' }}></i> {cheered ? 'Joy Mohun Bagan!' : `Cheer Mariner (${cheerCount})`}
      </button>
    </div>
  );
}
