import React from 'react';

const Profile = ({ userRole, onLogout }) => {
  return (
    <div id="view-container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '24px', fontWeight: 700 }}>
                    {userRole === 'BAKER' ? 'S' : 'J'}
                </div>
                <div>
                    <h1 style={{ fontFamily: 'var(--font-heading)', margin: 0, fontSize: '1.5rem', color: 'var(--color-primary)' }}>
                        {userRole === 'BAKER' ? "Sarah" : "John Doe"}
                    </h1>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-light)' }}>
                        {userRole === 'BAKER' ? "Baker" : "Bread Eater"}
                    </span>
                </div>
            </div>
            <button className="icon-btn" style={{ background: 'var(--color-bg)' }}>⚙️</button>
        </div>

        {userRole === 'EATER' && (
            <>
                <section style={{ marginBottom: '32px' }}>
                    <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', marginBottom: '16px', color: 'var(--color-primary)' }}>My Subscriptions</h2>
                    
                    <div style={{ background: 'var(--color-white)', padding: '16px', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <h3 style={{ margin: '0 0 4px 0', fontSize: '14px' }}>Sarah's Sourdough</h3>
                            <p style={{ margin: 0, fontSize: '12px', color: 'var(--color-text-light)' }}>1x Classic Boule • Every Thursday</p>
                        </div>
                        <button className="btn-outline">Manage</button>
                    </div>
                </section>

                <section style={{ marginBottom: '32px' }}>
                    <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', marginBottom: '16px', color: 'var(--color-primary)' }}>Order History</h2>
                    
                    {[1, 2].map((i) => (
                        <div key={i} style={{ padding: '16px', background: 'var(--color-bg)', borderRadius: 'var(--radius-sm)', marginBottom: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <h4 style={{ margin: '0 0 4px 0' }}>The Midnight Baker</h4>
                                <span style={{ fontSize: '11px', color: 'var(--color-text-light)' }}>March 1{i}, 2026 • 2 Items</span>
                            </div>
                            <span style={{ fontWeight: 700, color: 'var(--color-accent)' }}>$16.50</span>
                        </div>
                    ))}
                </section>
            </>
        )}

        <div style={{ marginTop: 'auto', paddingTop: '32px' }}>
            <button 
                className="btn-outline-full" 
                onClick={onLogout}
                style={{ color: 'var(--color-error)', borderColor: 'var(--color-error)' }}
            >
                Log Out
            </button>
        </div>
    </div>
  );
};

export default Profile;
