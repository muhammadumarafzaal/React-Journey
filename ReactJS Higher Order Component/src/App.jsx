import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Product from './components/Product';
import CartDrawer from './components/CartDrawer';
import './index.css';

const products = [
  { id: 1, name: 'Aether Sphere', price: 299, type: 'sphere' },
  { id: 2, name: 'Void Prism', price: 450, type: 'box' },
  { id: 3, name: 'Quantum Core', price: 1200, type: 'sphere' },
  { id: 4, name: 'Nebula Box', price: 95, type: 'box' },
  { id: 5, name: 'Titanium Orb', price: 750, type: 'sphere' },
  { id: 6, name: 'Dark Matter Cube', price: 2100, type: 'box' },
];

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <div className="app">
        <Navbar onOpenCart={() => setIsCartOpen(true)} />
        
        <main className="premium-container">
          <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1rem' }} className="text-gradient">
              THE NEXT GENERATION
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
              Experience shopping in three dimensions. Premium artifacts crafted with mathematical precision.
            </p>
          </header>

          <div className="product-grid">
            {products.map((product) => (
              <Product key={product.id} {...product} />
            ))}
          </div>
        </main>

        <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        
        <footer style={{ padding: '4rem 2rem', textAlign: 'center', borderTop: '1px solid var(--glass-border)', marginTop: '4rem' }}>
          <p style={{ color: 'var(--text-secondary)' }}>&copy; 2026 ANTIGRAVITY LABS. ALL RIGHTS RESERVED.</p>
        </footer>
      </div>
    </CartProvider>
  );
}

export default App;
