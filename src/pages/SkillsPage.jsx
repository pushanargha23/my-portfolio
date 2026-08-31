import React from 'react';
import Skills from '../components/Skills.jsx';
import NextPageNav from '../components/NextPageNav.jsx';

export default function SkillsPage() {
  return (
    <div style={{ paddingTop: '100px' }}>
      <Skills />
      <NextPageNav 
        prevLink="/experience" 
        prevLabel="Experience & Work" 
        nextLink="/projects" 
        nextLabel="Featured Projects" 
      />
    </div>
  );
}
