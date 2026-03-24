import React, { useState } from 'react';

const ProductDetail = ({ product, onBack, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [isSubscribing, setIsSubscribing] = useState(false);

  // Fallback if accessed via weird state
  const displayProduct = product || {
      name: "Classic Sourdough Boule",
      price: 8.00,
      image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400",
      baker: "Sarah's Sourdough",
      location: "Local"
  };

  const currentPrice = displayProduct.price || 8.00;

  const handleDirectPayment = (method) => {
      alert(`Redirecting to ${method} to pay $${(currentPrice * quantity).toFixed(2)} to ${displayProduct.baker}.`);
      onBack();
  };

  return (
    <div id="view-container" style={{ paddingBottom: '90px' }}>
        <button className="icon-btn" onClick={onBack} style={{ position: 'absolute', top: '16px', left: '16px', zIndex: 10, background: 'rgba(255,255,255,0.8)', padding: '8px 12px', borderRadius: '50%' }}>
            &larr; Back
        </button>

        <img src={displayProduct.image} alt={displayProduct.name} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
        
        <div style={{ padding: '24px 16px', background: 'var(--color-white)', marginTop: '-20px', borderRadius: '24px 24px 0 0', position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                <h1 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)', margin: 0, fontSize: '24px' }}>
                    {displayProduct.name}
                </h1>
                <span style={{ fontSize: '24px', fontWeight: 600, color: '#2E7D32' }}>${currentPrice.toFixed(2)}</span>
            </div>
            
            <p style={{ margin: '0 0 16px 0', color: '#666', fontWeight: 600 }}>From {displayProduct.baker} • 📍 {displayProduct.location}</p>
            
            <p style={{ lineHeight: 1.6, color: '#444' }}>
                Freshly baked {displayProduct.name.toLowerCase()} handmade with organic local ingredients. Perfect for any meal or snack.
            </p>

            {/* Quantity Selector */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', margin: '24px 0' }}>
                <span style={{ fontWeight: 600 }}>Quantity</span>
                <div style={{ display: 'flex', alignItems: 'center', background: '#F5F5F5', borderRadius: '24px', padding: '4px' }}>
                    <button className="icon-btn" style={{ padding: '8px 16px' }} onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                    <span style={{ margin: '0 16px', fontWeight: 600, fontSize: '18px' }}>{quantity}</span>
                    <button className="icon-btn" style={{ padding: '8px 16px' }} onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
            </div>

            {/* Direct Checkout Integrations */}
            <div style={{ marginTop: '32px' }}>
                <h3 style={{ fontSize: '14px', marginBottom: '12px', color: '#666', borderBottom: '1px solid #EEE', paddingBottom: '8px' }}>Direct Checkout</h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <button 
                        onClick={() => handleDirectPayment('Cash App')}
                        style={{ background: '#00D632', color: 'white', padding: '14px', borderRadius: '12px', fontWeight: 'bold', fontSize: '16px', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}
                    >
                        <span>$</span> Pay ${ (currentPrice * quantity).toFixed(2) } with Cash App
                    </button>
                    
                    <button 
                        onClick={() => handleDirectPayment('Venmo')}
                        style={{ background: '#008CFF', color: 'white', padding: '14px', borderRadius: '12px', fontWeight: 'bold', fontSize: '16px', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}
                    >
                        <span>V</span> Pay ${ (currentPrice * quantity).toFixed(2) } with Venmo
                    </button>

                    <button 
                        onClick={() => handleDirectPayment('PayPal')}
                        style={{ background: '#FFC439', color: '#003087', padding: '14px', borderRadius: '12px', fontWeight: 'bold', fontSize: '16px', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}
                    >
                        <span>P</span> Pay ${ (currentPrice * quantity).toFixed(2) } with PayPal
                    </button>
                </div>
                
                <div style={{ textAlign: 'center', margin: '16px 0', color: '#888', fontSize: '14px', fontStyle: 'italic' }}>
                    — or —
                </div>

                <button 
                    className="btn-accent-full" 
                    onClick={() => {
                        onAddToCart({ ...displayProduct, quantity, id: Date.now() });
                        onBack();
                    }}
                    style={{ background: 'var(--color-primary)' }}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    </div>
  );
};

export default ProductDetail;
