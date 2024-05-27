import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ background: 'white', padding: 20, borderRadius: 8, maxWidth: '90%', width: '400px' }}>
        <button onClick={onClose} style={{ float: 'right', cursor: 'pointer' }}>&times;</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
