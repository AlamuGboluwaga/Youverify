import React from 'react'

const Samples = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal-close" onClick={onClose}>
          Close
        </button>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};
export default Samples


