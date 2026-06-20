import React from 'react';

/**
 * About Component
 * Another lazy-loaded component to demonstrate route-based code splitting.
 */
const About = () => {
  return (
    <div className="container animate-fade-in">
      <div className="page-content">
        <h1>About Lazy Loading</h1>
        <p>
          Lazy loading is a design pattern commonly used in computer programming 
          to defer initialization of an object until the point at which it is needed. 
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '4rem' }}>
          <div className="glass" style={{ padding: '2rem' }}>
            <h4 style={{ color: '#818cf8', marginBottom: '1rem' }}>Performance</h4>
            <p style={{ fontSize: '1rem', textAlign: 'left' }}>
              Reduces the initial load time by loading only the necessary code for the first view.
            </p>
          </div>
          <div className="glass" style={{ padding: '2rem' }}>
            <h4 style={{ color: '#818cf8', marginBottom: '1rem' }}>Efficiency</h4>
            <p style={{ fontSize: '1rem', textAlign: 'left' }}>
              Saves bandwidth for users who might not visit every page of your application.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
