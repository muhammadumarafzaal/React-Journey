import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Loader from './components/common/Loader';

/**
 * PRODUCTION-READY LAZY LOADING
 * 
 * We use React.lazy to split our application bundle into smaller pieces.
 * This ensures users only download the code for the page they are viewing.
 */

// Define lazy components with clear naming
const Home = lazy(() => import('./components/pages/Home'));
const About = lazy(() => import('./components/pages/About'));
const Gallery = lazy(() => import('./components/pages/Gallery'));

function App() {
  return (
    <Router>
      {/* Global Navigation - Persistent across route changes */}
      <Navbar />

      {/* 
        Suspense Boundary
        Wraps the route definitions to manage the 'loading' lifecycle 
        of all lazy-loaded element chunks.
      */}
      <Suspense fallback={<Loader />}>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>
      </Suspense>

      {/* Subtle architectural grid or background noise could be added here for 'industrial' feel */}
      <div style={{
        position: 'fixed',
        inset: 0,
        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.02) 1px, transparent 0)',
        backgroundSize: '40px 40px',
        zIndex: -1,
        pointerEvents: 'none'
      }}></div>
    </Router>
  );
}

export default App;
