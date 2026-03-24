import React from 'react';

const BottomNav = ({ userRole, currentView, onNavigate }) => {
  return (
    <nav className="bottom-nav">
        <button 
            className={`nav-item ${currentView === 'map' ? 'active' : ''}`}
            onClick={() => onNavigate('map')}
        >
            <span className="nav-icon">📍</span>
            <span className="nav-label">Map</span>
        </button>
        
        {/* Render specific buttons based on Role */}
        {userRole === 'BAKER' ? (
            <button 
                className={`nav-item ${currentView === 'dashboard' ? 'active' : ''}`}
                onClick={() => onNavigate('dashboard')}
            >
                <span className="nav-icon">👩🍳</span>
                <span className="nav-label">Dashboard</span>
            </button>
        ) : (
            <button 
                className={`nav-item ${currentView === 'cart' ? 'active' : ''}`}
                onClick={() => onNavigate('cart')}
            >
                <span className="nav-icon">🛒</span>
                <span className="nav-label">Cart</span>
            </button>
        )}
        
        <button 
            className={`nav-item ${currentView === 'profile' ? 'active' : ''}`}
            onClick={() => onNavigate('profile')}
        >
            <span className="nav-icon">👤</span>
            <span className="nav-label">Profile</span>
        </button>
    </nav>
  );
};

export default BottomNav;
