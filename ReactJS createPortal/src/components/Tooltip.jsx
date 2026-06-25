import React, { useState, useRef } from 'react';
import Portal from './Portal';
import './Tooltip.css';

const Tooltip = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const targetRef = useRef(null);

  const showTooltip = () => {
    const rect = targetRef.current.getBoundingClientRect();
    setCoords({
      top: rect.top + window.scrollY,
      left: rect.left + rect.width / 2 + window.scrollX,
    });
    setIsVisible(true);
  };

  return (
    <div 
      className="tooltip-wrapper"
      onMouseEnter={showTooltip}
      onMouseLeave={() => setIsVisible(false)}
      ref={targetRef}
    >
      {children}
      {isVisible && (
        <Portal>
          <div 
            className="tooltip-box"
            style={{ 
              top: coords.top - 10, 
              left: coords.left 
            }}
          >
            {text}
            <div className="tooltip-arrow" />
          </div>
        </Portal>
      )}
    </div>
  );
};

export default Tooltip;
