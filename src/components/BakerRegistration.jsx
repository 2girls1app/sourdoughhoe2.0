import React, { useState } from 'react';

const BakerRegistration = ({ onBack, onRegisterSuccess }) => {
  const [formData, setFormData] = useState({
      name: '', company: '', email: '', phone: '', social: ''
  });

  const handleRegister = (e) => {
      e.preventDefault();
      alert('Baker Account Created Successfully!');
      onRegisterSuccess('BAKER');
  };

  return (
    <div id="view-container" style={{ paddingBottom: '40px', background: 'var(--color-bg)' }}>
      <header className="app-header" style={{ position: 'sticky', top: 0, margin: '0 -16px 24px', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
          <div className="header-content">
              <button className="icon-btn" onClick={onBack}>←</button>
              <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', margin: 0, flex: 1, textAlign: 'center' }}>Baker Registration</h1>
              <div style={{ width: '36px' }}></div>
          </div>
      </header>

      <form onSubmit={handleRegister} className="auth-form">
          <div style={{ background: 'var(--color-white)', padding: '16px', borderRadius: '12px', border: '1px solid #E0E0E0' }}>
              <h3 style={{ marginBottom: '16px', color: 'var(--color-primary)' }}>1. Basic Info</h3>
              <div className="form-group" style={{ marginBottom: '12px' }}>
                  <label>Full Name</label>
                  <input type="text" required placeholder="Sarah Jenkins" />
              </div>
              <div className="form-group" style={{ marginBottom: '12px' }}>
                  <label>Bakery / Company Name</label>
                  <input type="text" required placeholder="Sarah's Onlybuns" />
              </div>
              <div className="form-group" style={{ marginBottom: '12px' }}>
                  <label>Email</label>
                  <input type="email" required placeholder="sarah@example.com" />
              </div>
              <div className="form-group" style={{ marginBottom: '12px' }}>
                  <label>Phone Number</label>
                  <input type="tel" required placeholder="(555) 012-3456" />
              </div>
              <div className="form-group">
                  <label>Social Media Link</label>
                  <input type="text" placeholder="instagram.com/sarahbakes" />
              </div>
          </div>

          <div style={{ background: 'var(--color-white)', padding: '16px', borderRadius: '12px', border: '1px solid #E0E0E0' }}>
              <h3 style={{ marginBottom: '16px', color: 'var(--color-primary)' }}>2. Home Location</h3>
              <p style={{ fontSize: '12px', color: 'var(--color-text-light)', marginBottom: '12px' }}>Pinpoint exactly where buyers can pick up your fresh buns.</p>
              
              <div style={{ 
                  height: '200px', 
                  background: '#e5e5e5', 
                  borderRadius: '8px', 
                  position: 'relative',
                  overflow: 'hidden',
                  marginBottom: '12px',
                  border: '1px solid #ccc'
              }}>
                  <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106132.8942299884!2d-84.0628373!3d33.914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5be6c5c066f39%3A0xe54df52b66236b2f!2sGwinnett%20County%2C%20GA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                      width="100%" 
                      height="100%" 
                      style={{ border: 0, position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }} 
                      title="Mock Location Selector"
                  ></iframe>
                  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '32px', zIndex: 10 }}>📍</div>
                  <div style={{ position: 'absolute', bottom: '8px', left: '50%', transform: 'translateX(-50%)', background: 'var(--color-white)', padding: '4px 12px', borderRadius: '16px', fontSize: '12px', fontWeight: 'bold', boxShadow: '0 2px 4px rgba(0,0,0,0.2)', zIndex: 10 }}>Drag to move pin</div>
              </div>
              <div className="form-group">
                  <input type="text" placeholder="123 Main St, Grayson, GA" />
              </div>
          </div>

          <div style={{ background: 'var(--color-white)', padding: '16px', borderRadius: '12px', border: '1px solid #E0E0E0' }}>
              <h3 style={{ marginBottom: '16px', color: 'var(--color-primary)' }}>3. Mobile Schedule (Optional)</h3>
              <p style={{ fontSize: '12px', color: 'var(--color-text-light)', marginBottom: '12px' }}>Select the days you broadcast live drops from this location.</p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px', marginBottom: '16px' }}>
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                      <div key={i} style={{ 
                          aspectRatio: '1', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center', 
                          background: i === 2 || i === 4 ? 'var(--color-accent)' : 'white', 
                          color: i === 2 || i === 4 ? 'white' : 'var(--color-text)',
                          borderRadius: '50%',
                          fontSize: '12px',
                          fontWeight: 'bold',
                          border: '1px solid #ccc',
                          cursor: 'pointer'
                      }}>
                          {day}
                      </div>
                  ))}
              </div>
              <p style={{ fontSize: '11px', textAlign: 'center', color: '#666' }}>Example: Tuesdays and Thursdays selected.</p>
          </div>

          <button type="submit" className="btn-accent-full" style={{ marginTop: '16px' }}>
              Complete Registration
          </button>
      </form>
    </div>
  );
};

export default BakerRegistration;
