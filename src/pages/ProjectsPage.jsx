import React from 'react';
import Projects from '../components/Projects.jsx';
import NextPageNav from '../components/NextPageNav.jsx';

export default function ProjectsPage({ onOpenProjectModal }) {
  return (
    <div style={{ paddingTop: '100px' }}>
      <Projects onOpenProjectModal={onOpenProjectModal} />
      <NextPageNav 
        prevLink="/skills" 
        prevLabel="Skills & Technologies" 
        nextLink="/education" 
        nextLabel="Education & Degrees" 
      />
    </div>
  );
}
