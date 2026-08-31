import React from 'react';
import Education from '../components/Education.jsx';
import NextPageNav from '../components/NextPageNav.jsx';

export default function EducationPage() {
  return (
    <div style={{ paddingTop: '100px' }}>
      <Education />
      <NextPageNav 
        prevLink="/projects" 
        prevLabel="Featured Projects" 
        nextLink="/contact" 
        nextLabel="Contact & Connect" 
      />
    </div>
  );
}
