import React from 'react';
import Portal from './Portal';
import './Modal.css';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <Portal>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h2>{title}</h2>
            <button className="close-btn" onClick={onClose}>&times;</button>
          </div>
          <div className="modal-body">
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
