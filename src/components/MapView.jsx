import React, { useState } from 'react';

const getStatusColor = (status) => {
    switch(status) {
        case 'fresh': return '#2E7D32'; // Green
        case 'baking': return '#F57F17'; // Yellow
        case 'not_baking': return '#D32F2F'; // Red
        default: return 'var(--color-primary)';
    }
};

const mockBakers = [
    {
        id: '1',
        name: 'Honest Mill Bread Company',
        location: 'Grayson, GA (5 miles away)',
        rating: 4,
        reviews: 342,
        isLive: true,
        status: 'fresh',
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=150',
        website: 'https://instagram.com/sourdoughhoe_or_similar',
        availableBakes: [
            { name: 'Classic Boule', price: 8.00, image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=150' },
            { name: 'Jalapeno Bagels', price: 12.00, image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=150' },
            { name: 'Blueberry Muffins', price: 4.50, image: 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?w=150' }
        ]
    },
    {
        id: '2',
        name: 'Gwinnett Sourdough',
        location: 'Lawrenceville, GA (8 miles away)',
        rating: 3,
        reviews: 89,
        isLive: true,
        status: 'baking',
        image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=150',
        website: 'https://facebook.com/sourdough',
        availableBakes: [
            { name: 'Oatmeal Cookies', price: 3.00, image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=150' },
            { name: 'Rosemary Focaccia', price: 9.50, image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=150' }
        ]
    },
    {
        id: '3',
        name: 'The Midnight Baker',
        location: 'Snellville, GA (6 miles away)',
        rating: 2,
        reviews: 156,
        isLive: false,
        status: 'not_baking',
        image: 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?w=150',
        website: 'https://twitter.com/midnightbaker',
        nextDrop: 'Tomorrow, 8AM',
        availableBakes: []
    }
];

const MapView = ({ userRole, onGoHome, onSelectProduct }) => {
  const [bakers] = useState(mockBakers);
  const [activeTab, setActiveTab] = useState('map'); // 'map' or 'list'
  const [selectedBaker, setSelectedBaker] = useState(null);
  const [distance, setDistance] = useState('5');

  return (
    <div id="view-container" style={{ paddingTop: '20px' }}> {/* Added padding to ensure visibility */}
        {/* Header/Search */}
        <header className="app-header" style={{ position: 'sticky', top: 0, margin: '0 -16px 16px -16px', background: 'var(--color-white)', zIndex: 100 }}>
            <div className="header-content" style={{ paddingBottom: '8px' }}>
                <div className="logo-area" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <img src="/logo.png" alt="Onlybuns Logo" style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
                    <h1 style={{ margin: 0 }}>Onlybuns</h1>
                </div>
                <div>
                    <button className="icon-btn" onClick={onGoHome} title="Home">🏠</button>
                    <button className="icon-btn" style={{ marginLeft: '8px' }}>⚙️</button>
                </div>
            </div>
            
            <div className="search-bar" style={{ padding: '0 0 12px 0', borderBottom: 'none' }}>
                <input type="text" placeholder="Find fresh bread around Grayson, GA..." />
                <button id="search-submit">Search</button>
            </div>
        </header>

        {/* View Toggle */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', margin: '24px 0 16px' }}>
            <div style={{ display: 'flex', gap: '8px' }}>
                <button 
                    className={activeTab === 'map' ? 'btn-accent' : 'btn-outline'} 
                    onClick={() => setActiveTab('map')}
                    style={{ flex: 1 }}
                >
                    Map View
                </button>
                <button 
                    className={activeTab === 'list' ? 'btn-accent' : 'btn-outline'} 
                    onClick={() => setActiveTab('list')}
                    style={{ flex: 1 }}
                >
                    List View
                </button>
            </div>
            
            {activeTab === 'map' && (
                <select 
                    value={distance}
                    onChange={(e) => setDistance(e.target.value)}
                    style={{ 
                        padding: '10px 16px', 
                        borderRadius: '8px', 
                        border: 'none', 
                        fontFamily: 'inherit',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        outline: 'none',
                        background: 'var(--color-primary)',
                        color: 'white',
                        cursor: 'pointer',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                    }}
                >
                    <option value="5">Within 5 miles</option>
                    <option value="10">Within 10 miles</option>
                    <option value="20">Within 20 miles</option>
                </select>
            )}
        </div>

        {/* Content Area */}
        {activeTab === 'map' ? (
            <div className="map-placeholder" style={{
                height: '500px', 
                backgroundColor: '#e5e5e5', 
                borderRadius: '16px',
                border: '2px solid #E0E0E0',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106132.8942299884!2d-84.0628373!3d33.914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5be6c5c066f39%3A0xe54df52b66236b2f!2sGwinnett%20County%2C%20GA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
                
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(255,255,255,0.1)' }}></div>
                
                {/* Map Pins */}
                <div 
                    onClick={() => setSelectedBaker(bakers[0])}
                    style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', cursor: 'pointer', textAlign: 'center', zIndex: 10 }}
                >
                    <div style={{ fontSize: '32px', animation: bakers[0].isLive ? 'bounce 2s infinite' : 'none' }}>📍</div>
                    <div style={{ background: 'white', padding: '2px 6px', borderRadius: '4px', fontSize: '10px', fontWeight: 'bold', boxShadow: '0 2px 4px rgba(0,0,0,0.2)', color: getStatusColor(bakers[0].status) }}>Honest Mill</div>
                </div>

                <div 
                    onClick={() => setSelectedBaker(bakers[1])}
                    style={{ position: 'absolute', top: '25%', left: '20%', transform: 'translate(-50%, -50%)', cursor: 'pointer', textAlign: 'center', zIndex: 10 }}
                >
                    <div style={{ fontSize: '32px', animation: bakers[1].isLive ? 'bounce 2s infinite' : 'none' }}>📍</div>
                    <div style={{ background: 'white', padding: '2px 6px', borderRadius: '4px', fontSize: '10px', fontWeight: 'bold', boxShadow: '0 2px 4px rgba(0,0,0,0.2)', color: getStatusColor(bakers[1].status) }}>Gwinnett</div>
                </div>

                <div 
                    onClick={() => setSelectedBaker(bakers[2])}
                    style={{ position: 'absolute', top: '65%', left: '70%', transform: 'translate(-50%, -50%)', cursor: 'pointer', textAlign: 'center', zIndex: 10 }}
                >
                    <div style={{ fontSize: '32px', filter: 'grayscale(100%)' }}>📍</div>
                    <div style={{ background: 'white', padding: '2px 6px', borderRadius: '4px', fontSize: '10px', fontWeight: 'bold', boxShadow: '0 2px 4px rgba(0,0,0,0.2)', color: getStatusColor(bakers[2].status) }}>Midnight</div>
                </div>

                {/* Selected Baker Overlay popup */}
                {selectedBaker && (
                    <div style={{ 
                        position: 'absolute', bottom: '16px', left: '16px', right: '16px', 
                        background: 'white', borderRadius: '12px', padding: '16px',
                        boxShadow: '0 10px 25px rgba(0,0,0,0.2)', zIndex: 20,
                        animation: 'slideUp 0.3s ease-out'
                    }}>
                        <button 
                            onClick={(e) => { e.stopPropagation(); setSelectedBaker(null); }}
                            style={{ position: 'absolute', top: '12px', right: '12px', background: 'transparent', border: 'none', fontSize: '16px', cursor: 'pointer' }}
                        >
                            ✕
                        </button>
                        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '12px' }}>
                            <img src={selectedBaker.image} alt={selectedBaker.name} style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }} />
                            <div style={{ flex: 1 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <h3 style={{ margin: 0, fontSize: '16px', fontFamily: 'var(--font-heading)', color: getStatusColor(selectedBaker.status) }}>{selectedBaker.name}</h3>
                                    <button 
                                        className="icon-btn" 
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            if (userRole === 'GUEST') alert('Please log in to save your favorite bakers!');
                                            else alert(`${selectedBaker.name} saved to favorites!`);
                                        }}
                                        style={{ background: 'transparent', padding: '4px', border: '1px solid #ccc', borderRadius: '50%', transform: 'scale(0.8)' }}
                                    >
                                        🤍
                                    </button>
                                </div>
                                <div style={{ fontSize: '12px', color: 'var(--color-text-light)', marginTop: '2px' }}>📍 {selectedBaker.location}</div>
                                <div style={{ fontSize: '12px', color: 'var(--color-primary)', marginTop: '2px' }}>
                                    {'🍞'.repeat(selectedBaker.rating)} <span style={{ color: '#666', fontSize: '10px' }}>({selectedBaker.reviews})</span>
                                </div>
                            </div>
                        </div>

                        {selectedBaker.isLive ? (
                            <div style={{ background: '#F1F8E9', padding: '12px', borderRadius: '8px', border: '1px solid #C5E1A5' }}>
                                <div style={{ fontSize: '11px', fontWeight: 'bold', color: '#2E7D32', marginBottom: '4px', textTransform: 'uppercase' }}>🟢 Available Now</div>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '8px', marginTop: '8px' }}>
                                    {selectedBaker.availableBakes.map((item, i) => (
                                        <div 
                                            key={i} 
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                if (onSelectProduct) {
                                                    onSelectProduct({ ...item, baker: selectedBaker.name, location: selectedBaker.location });
                                                }
                                            }}
                                            style={{ 
                                                background: 'white', 
                                                border: '1px solid #C5E1A5', 
                                                borderRadius: '8px', 
                                                padding: '8px', 
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                textAlign: 'center',
                                                cursor: 'pointer',
                                                boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
                                            }}>
                                            <img src={item.image} alt={item.name} style={{ width: '40px', height: '40px', borderRadius: '4px', objectFit: 'cover', marginBottom: '4px' }} />
                                            <div style={{ fontSize: '11px', fontWeight: 600, color: '#2E7D32', lineHeight: '1.2', marginBottom: '2px' }}>{item.name}</div>
                                            <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-text)' }}>${item.price.toFixed(2)}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div style={{ background: '#F5F5F5', padding: '12px', borderRadius: '8px' }}>
                                <div style={{ fontSize: '12px', color: '#666', fontWeight: 'bold' }}>Next Drop: {selectedBaker.nextDrop}</div>
                            </div>
                        )}
                        
                        <button 
                            className="btn-accent-full" 
                            style={{ padding: '12px', marginTop: '16px', fontSize: '14px' }}
                            onClick={() => window.open(selectedBaker.website, '_blank')}
                        >
                            Visit Social / Website
                        </button>
                    </div>
                )}
            </div>
        ) : (
            <div className="baker-list">
                {bakers.map(baker => (
                    <div className="baker-list-card" key={baker.id} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <div style={{ display: 'flex', gap: '16px' }}>
                            <img src={baker.image} alt={baker.name} className="baker-img" />
                            <div style={{ flex: 1 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                    <h3 className="baker-name" style={{ color: getStatusColor(baker.status) }}>{baker.name}</h3>
                                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                        {baker.isLive && (
                                            <span className="btn-tiny" style={{ background: '#E53935', animation: 'pulse 2s infinite' }}>
                                                LIVE
                                            </span>
                                        )}
                                        <button 
                                            className="icon-btn" 
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                if (userRole === 'GUEST') alert('Please log in to save your favorite bakers!');
                                                else alert(`${baker.name} saved to favorites!`);
                                            }}
                                            style={{ background: 'transparent', padding: '4px', border: '1px solid #ccc', borderRadius: '50%', transform: 'scale(0.8)' }}
                                        >
                                            🤍
                                        </button>
                                    </div>
                                </div>
                                <p className="baker-meta" style={{ marginBottom: '4px' }}>📍 {baker.location}</p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', marginBottom: '8px' }}>
                                    <span style={{ color: 'var(--color-primary)' }}>{'🍞'.repeat(baker.rating)}</span>
                                    <span className="baker-meta" style={{ margin: 0 }}>({baker.reviews} reviews)</span>
                                </div>
                                
                                {baker.isLive ? (
                                    <p className="baker-schedule" style={{ color: '#43A047' }}>
                                        Available: {baker.availableBakes.map(b => b.name).join(', ')}
                                    </p>
                                ) : (
                                    <p className="baker-schedule">Next Drop: {baker.nextDrop}</p>
                                )}
                            </div>
                        </div>

                        <button 
                            className="btn-accent-full" 
                            style={{ padding: '10px', fontSize: '14px', borderRadius: '8px', background: 'var(--color-primary)' }}
                            onClick={() => window.open(baker.website, '_blank')}
                        >
                            Order Now (External Site)
                        </button>
                    </div>
                ))}
            </div>
        )}
    </div>
  );
};

export default MapView;
