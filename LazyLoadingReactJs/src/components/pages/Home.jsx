import React from 'react';

/**
 * Home Component
 * Focused on content hierarchy and clean typography.
 */
const Home = () => {
  return (
    <div className="container fade-in">
      <div className="page-content">
        <h1 className="text-gradient">Performance by Default.</h1>
        <p>
          Learn how to build lightning-fast React applications using native 
          code-splitting techniques and asynchronous component loading.
        </p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
          gap: '1.5rem',
          marginTop: '2rem'
        }}>
          <div className="glass" style={{ padding: '2rem', borderRadius: '1.5rem' }}>
            <div style={{ color: 'var(--primary)', fontWeight: 600, marginBottom: '0.5rem' }}>01. Dynamic Imports</div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.9375rem' }}>
              Load chunks of code only when requested by the client.
            </div>
          </div>
          <div className="glass" style={{ padding: '2rem', borderRadius: '1.5rem' }}>
            <div style={{ color: 'var(--primary)', fontWeight: 600, marginBottom: '0.5rem' }}>02. Suspense</div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.9375rem' }}>
              Handle loading states gracefully with fallback UI.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
