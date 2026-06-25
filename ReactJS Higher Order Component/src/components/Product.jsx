import React from 'react';
import withCart from '../hocs/withCart';
import withAnimations from '../hocs/withAnimations';
import Product3D from './Product3D';
import { ShoppingCart } from 'lucide-react';

const ProductBase = ({ id, name, price, type, cart }) => {
  return (
    <div className="product-card">
      <Product3D type={type} />
      <div style={{ marginTop: '1rem' }}>
        <h3 className="text-gradient" style={{ fontSize: '1.5rem', fontWeight: 800 }}>{name}</h3>
        <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Premium Artifact</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem' }}>
          <span style={{ fontSize: '1.2rem', fontWeight: 600 }}>${price}</span>
          <button 
            className="btn-primary" 
            style={{ width: 'auto', display: 'flex', gap: '0.5rem', alignItems: 'center' }}
            onClick={() => cart.addToCart({ id, name, price, type })}
          >
            <ShoppingCart size={18} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

// Combining multiple HOCs
const Product = withAnimations(withCart(ProductBase), 'scaleIn');

export default Product;
