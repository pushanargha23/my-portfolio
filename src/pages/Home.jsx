import React from 'react';
import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import NextPageNav from '../components/NextPageNav.jsx';

export default function Home({ onOpenProjectModal }) {
  return (
    <div>
      <Hero />
      <About />
      <NextPageNav 
        nextLink="/experience" 
        nextLabel="Experience & Work" 
      />
    </div>
  );
}
