import React, { useState } from 'react';

const initialMenuItems = [
    { id: 1, name: 'Chocolate Chip Cookies', price: 3.50, image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=150' },
    { id: 2, name: 'Oatmeal Raisin Cookies', price: 3.00, image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=150' },
    { id: 3, name: 'Classic Sourdough Boule', price: 8.00, image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=150' }
];

const mockGroupies = [
    { id: 1, name: 'Jessica R.', contact: '555-0198', preference: 'Text Notification' },
    { id: 2, name: 'Michael B.', contact: 'mike@example.com', preference: 'Email Alert' },
    { id: 3, name: 'Elena V.', contact: '@elena_eats', preference: 'In-App Push' },
    { id: 4, name: 'David S.', contact: '555-0231', preference: 'Text Notification' }
];

const BakerDashboard = ({ onGoHome }) => {
  const [bakingStatus, setBakingStatus] = useState('not_baking'); // 'not_baking', 'baking', 'fresh'
  const [menuItems, setMenuItems] = useState(initialMenuItems);
  const [isAddingItem, setIsAddingItem] = useState(false);
  
  const [showGroupies, setShowGroupies] = useState(false);

  // New Flavor Form State
  const [newName, setNewName] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [newImage, setNewImage] = useState('');

  const handleAddItem = () => {
      if (!newName.trim()) {
          setIsAddingItem(false);
          return;
      }
      
      const newItem = { 
          id: Date.now(),
          name: newName, 
          price: parseFloat(newPrice) || 0.00, 
          image: newImage || 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=150' 
      };

      setMenuItems([...menuItems, newItem]);
      
      setNewName('');
      setNewPrice('');
      setNewImage('');
      setIsAddingItem(false);
  };

  return (
    <div id="view-container" style={{ paddingTop: '20px', background: '#f8f5f0', minHeight: '100vh' }}>
        <header className="app-header" style={{ position: 'sticky', top: 0, margin: '0 -16px 16px -16px', background: '#f8f5f0', zIndex: 100, borderBottom: '1px solid rgba(139, 69, 19, 0.1)' }}>
            <div className="header-content">
                <div className="dash-profile-brief">
                    <span className="dash-logo" style={{ padding: '4px', fontSize: '24px' }}>🍞</span>
                    <div>
                        <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)', margin: 0 }}>Sarah's Sourdough</h2>
                    </div>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                    <button className="icon-btn" onClick={onGoHome} title="Home" style={{ background: 'white' }}>🏠</button>
                    <button className="icon-btn" title="Settings" style={{ background: 'white' }}>⚙️</button>
                </div>
            </div>
        </header>

        {/* Status Area (Oven Widget to the left) */}
        <div style={{ display: 'flex', gap: '20px', marginBottom: '24px', alignItems: 'flex-start' }}>
            <div style={{ 
                background: '#444', 
                padding: '12px', 
                borderRadius: '8px', 
                width: '140px', 
                boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                border: '2px solid #222',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                position: 'relative'
            }}>
                {/* Oven Controls / Buttons */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#222', padding: '6px 8px', borderRadius: '4px' }}>
                    <div style={{ display: 'flex', gap: '8px' }}>
                        <button 
                            onClick={() => setBakingStatus('baking')}
                            style={{ 
                                width: '16px', height: '16px', borderRadius: '50%', border: 'none', cursor: 'pointer',
                                background: '#FFD54F', boxShadow: bakingStatus === 'baking' ? '0 0 8px 2px #FFD54F' : 'inset 0 2px 4px rgba(0,0,0,0.5)',
                                transition: '0.2s'
                            }} title="Baking"
                        />
                        <button 
                            onClick={() => setBakingStatus('fresh')}
                            style={{ 
                                width: '16px', height: '16px', borderRadius: '50%', border: 'none', cursor: 'pointer',
                                background: '#4CAF50', boxShadow: bakingStatus === 'fresh' ? '0 0 8px 2px #4CAF50' : 'inset 0 2px 4px rgba(0,0,0,0.5)',
                                transition: '0.2s'
                            }} title="Hot Fresh Baked"
                        />
                        <button 
                            onClick={() => setBakingStatus('not_baking')}
                            style={{ 
                                width: '16px', height: '16px', borderRadius: '50%', border: 'none', cursor: 'pointer',
                                background: '#F44336', boxShadow: bakingStatus === 'not_baking' ? '0 0 8px 2px #F44336' : 'inset 0 2px 4px rgba(0,0,0,0.5)',
                                transition: '0.2s'
                            }} title="Not Baking Today"
                        />
                    </div>
                    {/* Status Text Indicator */}
                    <div style={{ 
                        fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', color: 
                        bakingStatus === 'baking' ? '#FFD54F' : bakingStatus === 'fresh' ? '#4CAF50' : '#F44336' 
                    }}>
                        {bakingStatus === 'baking' ? 'Baking...' : bakingStatus === 'fresh' ? 'Fresh!' : 'Off'}
                    </div>
                </div>

                {/* Oven Door Area */}
                <div style={{ 
                    position: 'relative', height: '80px', perspective: '500px'
                }}>
                    {/* Smoke Animation (escapes the door) */}
                    {bakingStatus === 'fresh' && (
                        <div style={{ position: 'absolute', width: '100%', height: '100%', top: '-20px', left: 0, zIndex: 10, pointerEvents: 'none' }}>
                            <div className="smoke smoke-1"></div>
                            <div className="smoke smoke-2"></div>
                            <div className="smoke smoke-3"></div>
                        </div>
                    )}

                    {/* Oven Interior (Behind Door) */}
                    <div style={{ 
                        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                        background: '#222', borderRadius: '4px',
                        display: 'flex', alignItems: 'flex-end', justifyContent: 'center', paddingBottom: '8px'
                    }}>
                        {(bakingStatus === 'fresh' || bakingStatus === 'baking') && <span style={{ fontSize: '32px' }}>🍞</span>}
                    </div>

                    {/* The Door itself */}
                    <div style={{ 
                        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                        background: '#555', borderRadius: '4px', display: 'flex', flexDirection: 'column', padding: '6px',
                        border: '1px solid #333', transformOrigin: 'bottom',
                        transition: 'transform 0.5s ease',
                        transform: bakingStatus === 'fresh' ? 'rotateX(80deg)' : 'rotateX(0deg)',
                        boxShadow: bakingStatus === 'fresh' ? '0 -10px 10px rgba(0,0,0,0.5) inset' : 'none'
                    }}>
                        <div style={{ height: '6px', background: '#ccc', borderRadius: '3px', width: '50%', margin: '0 auto 6px auto' }}></div> {/* Handle */}
                        
                        {/* Oven Glass / Glow */}
                        <div style={{ 
                            flex: 1, borderRadius: '4px', border: '2px solid #222',
                            background: bakingStatus === 'not_baking' ? '#111' : bakingStatus === 'baking' ? 'radial-gradient(circle, rgba(255,165,0,0.8) 0%, rgba(200,50,0,0.9) 100%)' : 'rgba(255,200,100,0.4)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.5s'
                        }}>
                            {bakingStatus === 'baking' && <span style={{ fontSize: '24px', animation: 'pulse 1.5s infinite' }}>🔥</span>}
                        </div>
                    </div>
                </div>
            </div>

            {/* Oven Explanations & Broadcast Tools */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
                <div style={{ background: 'white', padding: '12px', borderRadius: '12px', border: '1px solid #E0E0E0', boxShadow: 'var(--shadow-sm)' }}>
                    <h4 style={{ margin: '0 0 8px 0', fontSize: '13px', color: 'var(--color-primary)' }}>Status Legend</h4>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', marginBottom: '4px' }}>
                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#4CAF50', border: '1px solid #388E3C' }}></div>
                        <span style={{ fontWeight: 600 }}>Green:</span> Baked (Oven open)
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', marginBottom: '4px' }}>
                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FFD54F', border: '1px solid #F57F17' }}></div>
                        <span style={{ fontWeight: 600 }}>Yellow:</span> Baking (Oven heating)
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px' }}>
                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#F44336', border: '1px solid #D32F2F' }}></div>
                        <span style={{ fontWeight: 600 }}>Red:</span> No Bake
                    </div>
                </div>

                {bakingStatus === 'fresh' && (
                    <div style={{ background: '#E8F5E9', border: '1px solid #4CAF50', padding: '12px', borderRadius: '12px', animation: 'slideUp 0.3s ease-out' }}>
                        <h4 style={{ margin: '0 0 8px 0', fontSize: '13px', color: '#2E7D32', display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <span className="live-dot" style={{ background: '#F44336', width: '8px', height: '8px', borderRadius: '50%', display: 'inline-block', animation: 'pulse 1s infinite' }}></span>
                            You are LIVE!
                        </h4>
                        <p style={{ fontSize: '11px', color: '#388E3C', margin: '0 0 8px 0' }}>Buyers can now see your location on the map.</p>
                        <button className="btn-accent" onClick={() => alert('Broadcasting location to map!')} style={{ background: '#4CAF50', borderColor: '#4CAF50', width: '100%', fontSize: '12px' }}>
                            📍 Broadcast Location
                        </button>
                    </div>
                )}
            </div>
        </div>

        {/* Analytics & Tools Grid (Home Page Styling) */}
        <div style={{ marginBottom: '32px' }}>
            
            {/* Top Row: Large Primary Widgets */}
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(2, 1fr)', 
                gap: '12px', 
                marginBottom: '12px'
            }}>
                {/* Sales Widget */}
                <div style={{ background: '#D2691E', color: 'white', padding: '16px', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', aspectRatio: '1/1', textAlign: 'center' }}>
                    <span style={{ fontSize: '32px', marginBottom: '8px' }}>📈</span>
                    <span style={{ fontSize: '12px', fontWeight: 600, opacity: 0.9 }}>TODAY'S SALES</span>
                    <span style={{ fontSize: '28px', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>$248</span>
                </div>

                {/* Bread Groupies Widget */}
                <div 
                    onClick={() => setShowGroupies(true)}
                    style={{ background: '#43A047', color: 'white', padding: '16px', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', aspectRatio: '1/1', textAlign: 'center', cursor: 'pointer' }}
                >
                    <span style={{ fontSize: '32px', marginBottom: '8px' }}>💖</span>
                    <span style={{ fontSize: '12px', fontWeight: 600, opacity: 0.9 }}>BREAD GROUPIES</span>
                    <span style={{ fontSize: '28px', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>14</span>
                    <span style={{ fontSize: '10px', marginTop: '4px', background: 'rgba(255,255,255,0.2)', padding: '2px 6px', borderRadius: '4px' }}>View List &rarr;</span>
                </div>
            </div>

            {/* Bottom Row: Smaller Image Widgets */}
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(3, 1fr)', 
                gap: '8px' 
            }}>
                {/* Square Payments Image Widget */}
                <div 
                    onClick={() => alert('Connect your Square account to accept payments!')}
                    style={{ background: 'white', borderRadius: '12px', padding: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', aspectRatio: '1/1', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.05)' }}
                >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Square_Inc._logo.svg/1200px-Square_Inc._logo.svg.png" alt="Square" style={{ width: '40px', height: '40px', objectFit: 'contain', marginBottom: '8px' }} />
                    <span style={{ fontSize: '10px', fontWeight: 700, color: '#333' }}>Payments</span>
                </div>

                {/* Social Media Image Widget */}
                <div 
                    onClick={() => alert('Add Instagram link!')}
                    style={{ background: 'white', borderRadius: '12px', padding: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', aspectRatio: '1/1', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.05)' }}
                >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="Instagram" style={{ width: '40px', height: '40px', objectFit: 'contain', marginBottom: '8px' }} />
                    <span style={{ fontSize: '10px', fontWeight: 700, color: '#333' }}>Socials</span>
                </div>

                {/* Add Custom Link Widget */}
                <div 
                    onClick={() => alert('Add Custom Website!')}
                    style={{ background: 'white', borderRadius: '12px', padding: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', aspectRatio: '1/1', cursor: 'pointer', border: '2px dashed rgba(139, 69, 19, 0.3)' }}
                >
                    <span style={{ fontSize: '24px', color: 'var(--color-primary)' }}>+</span>
                    <span style={{ fontSize: '10px', fontWeight: 700, color: 'var(--color-primary)', textAlign: 'center' }}>Add Link</span>
                </div>
            </div>
        </div>

        {/* Menu Management */}
        <section className="catalog-management" style={{ marginBottom: '32px' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', marginBottom: '16px', color: 'var(--color-primary)' }}>Your Menu</h2>
            
            <div style={{ 
                background: 'white', 
                borderRadius: 'var(--radius-md)', 
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                border: '1px solid rgba(139, 69, 19, 0.1)',
                padding: '16px'
            }}>
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', 
                    gap: '12px'
                }}>
                    
                    {/* Existing Flavors Rendered as Square Widgets */}
                    {menuItems.map((item) => (
                        <div key={item.id} style={{ 
                            background: 'white', 
                            border: '1px solid #C5E1A5', 
                            borderRadius: '8px', 
                            padding: '12px', 
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
                            position: 'relative'
                        }}>
                            <button 
                                className="icon-btn" 
                                style={{ position: 'absolute', top: '4px', right: '4px', fontSize: '12px', background: 'rgba(255,255,255,0.8)', padding: '2px 4px', width: 'auto', height: 'auto' }}
                            >
                                ✏️
                            </button>
                            <img src={item.image} alt={item.name} style={{ width: '64px', height: '64px', borderRadius: '4px', objectFit: 'cover', marginBottom: '8px' }} />
                            <div style={{ fontSize: '13px', fontWeight: 600, color: '#2E7D32', lineHeight: '1.2', marginBottom: '4px' }}>{item.name}</div>
                            <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-text)' }}>${item.price.toFixed(2)}</div>
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px dashed #EEE' }}>
                    {/* Add New Flavor Form */}
                    {isAddingItem ? (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '16px', border: '1px solid #E0E0E0', borderRadius: '8px', background: '#FAFAFA' }}>
                            <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#444' }}>Create New Menu Item</h3>
                            <input 
                                type="text" 
                                value={newName}
                                onChange={(e) => setNewName(e.target.value)}
                                placeholder="Item Name (e.g. Sourdough Loaf)"
                                style={{ padding: '10px', borderRadius: 'var(--radius-sm)', border: '1px solid #ccc' }}
                                autoFocus
                            />
                            <div style={{ display: 'flex', gap: '8px' }}>
                                <input 
                                    type="number" 
                                    value={newPrice}
                                    onChange={(e) => setNewPrice(e.target.value)}
                                    placeholder="Price ($)"
                                    style={{ flex: 1, padding: '10px', borderRadius: 'var(--radius-sm)', border: '1px solid #ccc' }}
                                />
                                <input 
                                    type="text" 
                                    value={newImage}
                                    onChange={(e) => setNewImage(e.target.value)}
                                    placeholder="Image URL (Uses Bread picture if empty)"
                                    style={{ flex: 2, padding: '10px', borderRadius: 'var(--radius-sm)', border: '1px solid #ccc' }}
                                />
                            </div>
                            <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                                <button onClick={() => setIsAddingItem(false)} className="btn-outline" style={{ flex: 1 }}>Cancel</button>
                                <button onClick={handleAddItem} className="btn-accent" style={{ flex: 1, background: '#43A047', borderColor: '#43A047', color: 'white' }}>Save Item</button>
                            </div>
                        </div>
                    ) : (
                        <button 
                            onClick={() => setIsAddingItem(true)}
                            style={{ 
                                width: '100%',
                                padding: '16px', 
                                background: 'transparent', 
                                border: '2px dashed rgba(139, 69, 19, 0.4)',
                                borderRadius: 'var(--radius-md)',
                                color: 'var(--color-primary)',
                                fontWeight: 600,
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px',
                                fontSize: '16px'
                            }}
                        >
                            <span style={{ fontSize: '24px' }}>+</span> Add New Menu Item
                        </button>
                    )}
                </div>
            </div>
        </section>

        {/* Bread Groupies Modal */}
        {showGroupies && (
            <div style={{
                position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
                background: 'rgba(0,0,0,0.6)', zIndex: 1000,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: '16px'
            }}>
                <div style={{
                    background: 'white', borderRadius: '24px', width: '100%', maxWidth: '400px',
                    padding: '24px', boxShadow: '0 24px 48px rgba(0,0,0,0.2)',
                    animation: 'slideUp 0.3s ease-out'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                        <h2 style={{ margin: 0, fontFamily: 'var(--font-heading)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ fontSize: '24px' }}>💖</span> Bread Groupies
                        </h2>
                        <button onClick={() => setShowGroupies(false)} style={{ background: 'transparent', border: 'none', fontSize: '20px', cursor: 'pointer', color: '#999' }}>✕</button>
                    </div>

                    <p style={{ color: '#666', fontSize: '14px', marginBottom: '20px' }}>
                        These 14 local Only Buns fans have favorited your bakery and will be alerted when you go live!
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxHeight: '300px', overflowY: 'auto', paddingRight: '8px' }}>
                        {mockGroupies.map(g => (
                            <div key={g.id} style={{ padding: '12px', border: '1px solid #EEE', borderRadius: '12px', background: '#FAFAFA' }}>
                                <div style={{ fontWeight: 'bold', color: '#333' }}>{g.name}</div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4px', fontSize: '12px' }}>
                                    <span style={{ color: '#666' }}>{g.contact}</span>
                                    <span style={{ color: '#43A047', fontWeight: 600, background: '#E8F5E9', padding: '2px 8px', borderRadius: '12px' }}>{g.preference}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="btn-primary-full" onClick={() => setShowGroupies(false)} style={{ marginTop: '24px', background: 'var(--color-primary)' }}>
                        Close
                    </button>
                </div>
            </div>
        )}

    </div>
  );
};

export default BakerDashboard;
