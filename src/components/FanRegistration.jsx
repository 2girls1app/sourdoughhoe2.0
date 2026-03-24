import React, { useState } from 'react';

const FanRegistration = ({ onBack, onRegisterSuccess }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const handleRegister = (e) => {
      e.preventDefault();
      alert('Only Buns Fan Account Created!');
      onRegisterSuccess('EATER');
  };

  return (
    <div id="view-container" style={{ paddingBottom: '40px', background: 'var(--color-bg)', minHeight: '100vh' }}>
      <header className="app-header" style={{ position: 'sticky', top: 0, margin: '0 -16px 24px', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
          <div className="header-content">
              <button className="icon-btn" onClick={onBack}>←</button>
              <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', margin: 0, flex: 1, textAlign: 'center' }}>Fan Registration</h1>
              <div style={{ width: '36px' }}></div>
          </div>
      </header>
      <form onSubmit={handleRegister} className="auth-form" style={{ padding: '0 16px' }}>
          <div style={{ background: 'var(--color-white)', padding: '24px', borderRadius: '16px', border: '1px solid #E0E0E0', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
              <h2 style={{ marginBottom: '24px', color: 'var(--color-primary)', textAlign: 'center', fontFamily: 'var(--font-heading)' }}>Join the Bun Fans 🍞</h2>
              <div className="form-group" style={{ marginBottom: '16px' }}>
                  <label>Full Name</label>
                  <input type="text" required placeholder="John Doe" />
              </div>
              <div className="form-group" style={{ marginBottom: '16px' }}>
                  <label>Phone Number</label>
                  <p style={{ fontSize: '11px', color: '#666', marginTop: '-6px', marginBottom: '6px' }}>Required for fresh bake text alerts.</p>
                  <input type="tel" required placeholder="(555) 012-3456" />
              </div>
              <div className="form-group" style={{ marginBottom: '24px' }}>
                  <label>Email (Optional)</label>
                  <input type="email" placeholder="john@example.com" />
              </div>
              <button type="submit" className="btn-accent-full" style={{ padding: '16px', fontSize: '16px' }}>
                  Create Account
              </button>
          </div>
      </form>
    </div>
  );
};

export default FanRegistration;
