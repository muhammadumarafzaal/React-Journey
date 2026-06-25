import React from 'react';
import { ShoppingCart, Package } from 'lucide-react';
import withCart from '../hocs/withCart';

const NavbarBase = ({ cart, onOpenCart }) => {
  return (
    <nav className="glass-nav">
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
        <Package size={28} />
        <h1 style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-1px' }}>ANTIGRAVITY <span className="text-secondary">LABS</span></h1>
      </div>
      
      <div 
        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', position: 'relative' }}
        onClick={onOpenCart}
      >
        <ShoppingCart size={24} />
        {cart.cartCount > 0 && (
          <span style={{
            position: 'absolute',
            top: '-8px',
            right: '-8px',
            background: 'white',
            color: 'black',
            borderRadius: '50%',
            width: '18px',
            height: '18px',
            fontSize: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 800
          }}>
            {cart.cartCount}
          </span>
        )}
      </div>
    </nav>
  );
};

const Navbar = withCart(NavbarBase);

export default Navbar;
