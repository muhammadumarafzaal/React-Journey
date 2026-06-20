import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Navbar Component - Industrial Standard
 * Clean, floating navigation with active state tracking.
 */
const Navbar = () => {
  return (
    <nav className="navbar glass">
      <div className="logo">
        <span style={{ fontWeight: 700, letterSpacing: '-0.03em', fontSize: '1.25rem' }}>
          Lazy<span style={{ color: 'var(--primary)' }}>Core</span>
        </span>
      </div>
      
      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          About
        </NavLink>
        <NavLink to="/gallery" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Gallery
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
