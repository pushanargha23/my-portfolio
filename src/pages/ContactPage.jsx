import React from 'react';
import Contact from '../components/Contact.jsx';

export default function ContactPage({ onShowToast }) {
  return (
    <div style={{ paddingTop: '100px' }}>
      <Contact onShowToast={onShowToast} />
    </div>
  );
}
