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
            <h3 style={{ textAlign: 'center', margin: 0, fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}>Bread Eaters</h3>
            <button 
                className="btn-primary-large" 
                onClick={() => onLogin('EATER')}
                style={{ background: '#43A047' }}
            >
                📍 Find Buns Near Me
            </button>
            <button 
                className="btn-primary-large" 
                onClick={() => onLogin('EATER')}
            >
                ⭐ Fave Bakers Near Me
            </button>
            <button 
                className="btn-primary-large" 
                onClick={() => onLogin('EATER')}
                style={{ background: '#D2691E' }}
            >
                🍞 Fresh Buns Near Me
            </button>

            <div style={{ margin: '16px 0', borderTop: '1px solid rgba(139, 69, 19, 0.2)' }}></div>

            <h3 style={{ textAlign: 'center', margin: 0, fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}>Bakers</h3>
            <button 
                className="btn-secondary-large" 
                onClick={() => onLogin('BAKER')}
            >
                👩🍳 Sell Buns
            </button>
        </div>
    </div>
  );
};

export default Login;
