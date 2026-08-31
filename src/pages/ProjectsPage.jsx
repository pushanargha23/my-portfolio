import React from 'react';
import Projects from '../components/Projects.jsx';

export default function ProjectsPage({ onOpenProjectModal }) {
  return (
    <div style={{ paddingTop: '100px' }}>
      <Projects onOpenProjectModal={onOpenProjectModal} />
    </div>
  );
}
