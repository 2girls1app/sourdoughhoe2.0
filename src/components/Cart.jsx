import React from 'react';

const Cart = ({ cartItems, onCheckout, onBack }) => {
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div id="view-container">
        <header className="app-header" style={{ position: 'sticky', top: 0, margin: '-16px -16px 24px -16px', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
            <div className="header-content">
                <button className="icon-btn" onClick={onBack}>&larr;</button>
                <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', margin: 0 }}>Your Cart</h1>
                <div style={{ width: '36px' }}></div>
            </div>
        </header>

        {cartItems.length === 0 ? (
            <div style={{ textAlign: 'center', marginTop: '60px', color: 'var(--color-text-light)' }}>
                <span style={{ fontSize: '48px', display: 'block', marginBottom: '16px' }}>🛒</span>
                <p>Your cart is empty.</p>
                <button className="btn-outline" style={{ marginTop: '16px' }} onClick={onBack}>Find Bread</button>
            </div>
        ) : (
            <>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                    {cartItems.map((item, index) => (
                        <div key={index} style={{ display: 'flex', gap: '16px', padding: '16px', background: 'var(--color-white)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
                            <img src={item.image} alt={item.name} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: 'var(--radius-sm)' }} />
                            <div style={{ flex: 1 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                    <h3 style={{ margin: '0 0 4px 0', fontSize: '14px' }}>{item.name}</h3>
                                    <span style={{ fontWeight: 700, color: 'var(--color-accent)' }}>${(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                                <p style={{ margin: '0 0 8px 0', fontSize: '12px', color: 'var(--color-text-light)' }}>Qty: {item.quantity}</p>
                                
                                {item.isSubscribing && (
                                    <span style={{ fontSize: '10px', background: 'var(--color-secondary)', color: 'var(--color-primary)', padding: '2px 6px', borderRadius: '4px', fontWeight: 600 }}>
                                        Weekly Drop Set
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ background: 'var(--color-white)', padding: '24px', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', marginBottom: '32px' }}>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', marginBottom: '16px' }}>Pickup Details</h3>
                    
                    <select style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '2px solid var(--color-bg)', marginBottom: '16px', fontFamily: 'inherit' }}>
                        <option>Today, 2:00 PM - 3:00 PM</option>
                        <option>Today, 3:00 PM - 4:00 PM</option>
                        <option>Tomorrow, 8:00 AM - 10:00 AM</option>
                    </select>

                    <div style={{ borderTop: '2px dashed var(--color-bg)', margin: '16px 0', paddingTop: '16px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '14px', color: 'var(--color-text-light)' }}>
                            <span>Subtotal</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', fontSize: '14px', color: 'var(--color-text-light)' }}>
                            <span>Tax & Fees</span>
                            <span>${(total * 0.08).toFixed(2)}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '18px', fontWeight: 700, color: 'var(--color-primary)' }}>
                            <span>Total</span>
                            <span>${(total * 1.08).toFixed(2)}</span>
                        </div>
                    </div>

                    <button className="btn-primary-large" onClick={onCheckout}>
                        Chekout (Mock Apple Pay)
                    </button>
                </div>
            </>
        )}
    </div>
  );
};

export default Cart;
