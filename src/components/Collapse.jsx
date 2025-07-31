// src/components/Collapse.jsx
import { useState } from 'react';
import '../styles/Collapse.scss';

export default function Collapse({ title, children, className = '' }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`collapse ${className}`}>
      <div className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        <span className={`arrow ${isOpen ? 'open' : ''}`}>⌃</span>
      </div>
      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  );
}

