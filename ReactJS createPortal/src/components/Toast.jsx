import React, { useEffect } from 'react';
import Portal from './Portal';
import './Toast.css';

const Toast = ({ message, type = 'info', onClose, duration = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <Portal>
      <div className={`toast toast-${type}`}>
        <div className="toast-content">
          <span>{message}</span>
        </div>
        <button className="toast-close" onClick={onClose}>&times;</button>
      </div>
    </Portal>
  );
};

export default Toast;
