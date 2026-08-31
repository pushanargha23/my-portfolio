import React from 'react';
import Contact from '../components/Contact.jsx';
import NextPageNav from '../components/NextPageNav.jsx';

export default function ContactPage({ onShowToast }) {
  return (
    <div style={{ paddingTop: '100px' }}>
      <Contact onShowToast={onShowToast} />
      <NextPageNav 
        prevLink="/education" 
        prevLabel="Education & Degrees" 
        nextLink="/" 
        nextLabel="Back to Home" 
      />
    </div>
  );
}
