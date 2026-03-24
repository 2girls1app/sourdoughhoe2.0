import React from 'react';

const Login = ({ onLogin }) => {
  return (
    <div className="mobile-container welcome-screen" style={{ overflowY: 'auto' }}>
        <div className="welcome-hero" style={{ paddingBottom: '32px' }}>
            <img src="/logo.png" alt="Onlybuns Logo" className="welcome-logo" style={{ width: '80px', height: '80px', objectFit: 'contain', margin: '0 auto', display: 'block' }} />
            <h1 className="welcome-title">Onlybuns</h1>
            <p className="welcome-subtitle" style={{ fontWeight: 'bold', fontSize: '1.2rem', margin: '8px 0 4px', color: 'var(--color-accent)' }}>
                No junk, just buns.
            </p>
            <p className="welcome-subtitle" style={{ lineHeight: 1.4, padding: '0 16px', fontSize: '0.95rem' }}>
                A marketplace connecting clean-ingredient bread bakers with health-conscious buyers.
            </p>
        </div>
        
        <div className="welcome-actions" style={{ gap: '16px' }}>
            <button 
                className="btn-primary-large" 
                onClick={() => onLogin('GUEST')}
                style={{ background: '#43A047', fontSize: '1.05rem', marginBottom: '4px' }}
            >
                📍 Browse Nearby Bakers (Guest)
            </button>
            <p style={{ textAlign: 'center', margin: '0 0 12px', color: 'var(--color-primary)', fontWeight: 'bold', fontSize: '0.9rem' }}>
                Or sign in to save your favorite makers:
            </p>
            <button 
                className="btn-outline" 
                onClick={() => onLogin('EATER')}
                style={{ width: '100%', padding: '12px' }}
            >
                👤 Bun Fan Sign In / Sign Up
            </button>

            <div style={{ margin: '16px 0', borderTop: '1px solid rgba(139, 69, 19, 0.2)' }}></div>

            <button 
                className="btn-secondary-large" 
                onClick={() => onLogin('BAKER')}
                style={{ marginBottom: '8px' }}
            >
                👩🍳 Baker Dashboard Login
            </button>
            <button 
                className="btn-outline" 
                onClick={() => onLogin('REGISTER_BAKER')}
                style={{ width: '100%', padding: '12px', borderColor: 'var(--color-accent)', color: 'var(--color-accent)' }}
            >
                📝 Register as Baker
            </button>
        </div>
    </div>
  );
};

export default Login;
