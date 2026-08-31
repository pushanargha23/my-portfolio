import React from 'react';
import Experience from '../components/Experience.jsx';
import NextPageNav from '../components/NextPageNav.jsx';

export default function ExperiencePage() {
  return (
    <div style={{ paddingTop: '100px' }}>
      <Experience />
      <NextPageNav 
        prevLink="/about" 
        prevLabel="About Me" 
        nextLink="/skills" 
        nextLabel="Skills & Technologies" 
      />
    </div>
  );
}
