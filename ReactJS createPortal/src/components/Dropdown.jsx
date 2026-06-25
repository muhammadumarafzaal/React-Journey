import React, { useState, useRef, useEffect } from 'react';
import Portal from './Portal';
import './Dropdown.css';

const Dropdown = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const buttonRef = useRef(null);

  const toggleDropdown = () => {
    if (!isOpen) {
      const rect = buttonRef.current.getBoundingClientRect();
      setCoords({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
      });
    }
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="dropdown-container">
      <button ref={buttonRef} className="dropdown-trigger" onClick={toggleDropdown}>
        {label}
      </button>
      {isOpen && (
        <Portal>
          <div 
            className="dropdown-menu"
            style={{ top: coords.top + 5, left: coords.left }}
          >
            {items.map((item, index) => (
              <div key={index} className="dropdown-item" onClick={() => setIsOpen(false)}>
                {item}
              </div>
            ))}
          </div>
        </Portal>
      )}
    </div>
  );
};

export default Dropdown;
