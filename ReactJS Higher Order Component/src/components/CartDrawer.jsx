import React from 'react';
import { X, Trash2, Plus, Minus } from 'lucide-react';
import withCart from '../hocs/withCart';

const CartDrawerBase = ({ isOpen, onClose, cart }) => {
  return (
    <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 800 }}>Your Cart</h2>
        <X size={24} cursor="pointer" onClick={onClose} />
      </div>

      {cart.cartItems.length === 0 ? (
        <div style={{ textAlign: 'center', marginTop: '4rem', color: 'var(--text-secondary)' }}>
          <p>Your cart is empty.</p>
        </div>
      ) : (
        <>
          <div style={{ maxHeight: 'calc(100vh - 250px)', overflowY: 'auto' }}>
            {cart.cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-img" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '1.2rem' }}>{item.type === 'sphere' ? '⚪' : '⏹️'}</span>
                </div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontWeight: 600 }}>{item.name}</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>${item.price}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginTop: '0.5rem' }}>
                    <Minus size={14} cursor="pointer" onClick={() => cart.updateQuantity(item.id, item.quantity - 1)} />
                    <span>{item.quantity}</span>
                    <Plus size={14} cursor="pointer" onClick={() => cart.updateQuantity(item.id, item.quantity + 1)} />
                  </div>
                </div>
                <Trash2 
                  size={18} 
                  color="#fa5252" 
                  cursor="pointer" 
                  onClick={() => cart.removeFromCart(item.id)} 
                />
              </div>
            ))}
          </div>

          <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', right: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', borderTop: '1px solid var(--glass-border)', paddingTop: '1rem' }}>
              <span style={{ fontWeight: 600 }}>Total</span>
              <span style={{ fontWeight: 800, fontSize: '1.4rem' }}>${cart.cartTotal.toFixed(2)}</span>
            </div>
            <button className="btn-primary">Checkout Now</button>
          </div>
        </>
      )}
    </div>
  );
};

const CartDrawer = withCart(CartDrawerBase);

export default CartDrawer;
