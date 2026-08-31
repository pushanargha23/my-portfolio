import React, { useState } from 'react';

export default function Contact({ onShowToast }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text).then(() => {
      onShowToast(`Copied ${label} to clipboard: ${text}`);
    }).catch(() => {
      onShowToast('Failed to copy text.');
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Direct frontend email dispatch to arghakamal.527@gmail.com via FormSubmit AJAX API
      const res = await fetch('https://formsubmit.co/ajax/arghakamal.527@gmail.com', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`,
          _captcha: 'false'
        })
      });

      if (res.ok) {
        onShowToast(`Thank you, ${formData.name}! Your message has been sent directly to Argha.`);
      } else {
        // Fallback to direct mailto client trigger
        const mailtoUrl = `mailto:arghakamal.527@gmail.com?subject=${encodeURIComponent(`Portfolio Message from ${formData.name}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
        window.location.href = mailtoUrl;
        onShowToast(`Opening mail app to send message from ${formData.name}...`);
      }
    } catch (err) {
      const mailtoUrl = `mailto:arghakamal.527@gmail.com?subject=${encodeURIComponent(`Portfolio Message from ${formData.name}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      window.location.href = mailtoUrl;
      onShowToast(`Opening mail app to send message from ${formData.name}...`);
    } finally {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Let's Connect</span>
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">Interested in collaborating or discussing software engineering roles? Send a direct message!</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>

          {/* Contact Details */}
          <div className="glass-card">
            <h3 style={{ fontSize: '1.4rem', marginBottom: '16px', color: 'var(--text-primary)' }}>Contact Information</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '24px' }}>
              I am currently open to internship opportunities, full-stack software development roles, and project collaborations.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

              {/* Email */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '14px 18px',
                borderRadius: 'var(--radius-sm)',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid var(--red-border)'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'var(--red-subtle)',
                  color: 'var(--red-neon)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.1rem'
                }}>
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Email</div>
                  <a href="mailto:arghakamal.527@gmail.com" style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-primary)', textDecoration: 'none' }}>
                    arghakamal.527@gmail.com
                  </a>
                </div>
                <button
                  onClick={() => handleCopy('arghakamal.527@gmail.com', 'Email')}
                  style={{ marginLeft: 'auto', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: '6px' }}
                  title="Copy Email"
                >
                  <i className="fa-regular fa-copy"></i>
                </button>
              </div>

              {/* Phone */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '14px 18px',
                borderRadius: 'var(--radius-sm)',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid var(--red-border)'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'var(--red-subtle)',
                  color: 'var(--red-neon)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.1rem'
                }}>
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Phone / WhatsApp</div>
                  <a href="tel:+917890735867" style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-primary)', textDecoration: 'none' }}>
                    +91 7890735867
                  </a>
                </div>
                <button
                  onClick={() => handleCopy('+917890735867', 'Phone')}
                  style={{ marginLeft: 'auto', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: '6px' }}
                  title="Copy Phone"
                >
                  <i className="fa-regular fa-copy"></i>
                </button>
              </div>

              {/* Location */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '14px 18px',
                borderRadius: 'var(--radius-sm)',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid var(--red-border)'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'var(--red-subtle)',
                  color: 'var(--red-neon)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.1rem'
                }}>
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Location</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-primary)' }}>
                    Kolkata, West Bengal, India
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Form */}
          <div className="glass-card">
            <h3 style={{ fontSize: '1.4rem', marginBottom: '20px', color: 'var(--text-primary)' }}>Send Direct Message</h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div>
                <label style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: '500', display: 'block', marginBottom: '6px' }}>Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Rahul Sharma"
                  className="contact-form-input"
                />
              </div>

              <div>
                <label style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: '500', display: 'block', marginBottom: '6px' }}>Your Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. rahul@example.com"
                  className="contact-form-input"
                />
              </div>

              <div>
                <label style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: '500', display: 'block', marginBottom: '6px' }}>Your Message</label>
                <textarea
                  required
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Argha, I'd like to talk about..."
                  className="contact-form-input"
                  style={{ resize: 'vertical' }}
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="btn-mb-primary" 
                style={{ width: '100%', justifyContent: 'center', marginTop: '6px', opacity: isSubmitting ? 0.7 : 1 }}
              >
                {isSubmitting ? (
                  <>
                    <i className="fa-solid fa-spinner fa-spin"></i> Dispatching Message...
                  </>
                ) : (
                  <>
                    Send Direct Message <i className="fa-solid fa-paper-plane"></i>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
