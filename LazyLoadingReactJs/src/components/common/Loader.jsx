import React from 'react';

/**
 * Industrial Standard Loader
 * Minimalist progress bar style often seen in modern web apps (like GitHub or Vercel).
 */
const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-bar">
        <div className="loader-progress"></div>
      </div>
      <span style={{ 
        marginTop: '1rem', 
        fontSize: '0.75rem', 
        textTransform: 'uppercase', 
        letterSpacing: '0.1em', 
        color: 'var(--text-dim)' 
      }}>
        Initializing Module
      </span>
    </div>
  );
};

export default Loader;
