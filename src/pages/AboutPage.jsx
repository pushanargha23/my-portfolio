import React from 'react';
import About from '../components/About.jsx';
import NextPageNav from '../components/NextPageNav.jsx';

export default function AboutPage() {
  return (
    <div style={{ paddingTop: '100px', paddingBottom: '40px' }}>
      <About />
      <NextPageNav 
        prevLink="/" 
        prevLabel="Home Page" 
        nextLink="/experience" 
        nextLabel="Experience & Work" 
      />
    </div>
  );
}
