import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import '@styles/Collapse.scss';

export default function Collapse({ title, children, className = '' }) {
  const [show, setShow] = useState(false);

  return (
    <div className={`collapse ${className} ${show ? 'show' : ''}`}>
      <div className="collapse-header" onClick={() => setShow(!show)}>
        <h3>{title}</h3>
        <FontAwesomeIcon icon={faChevronUp} className={`arrow ${show ? 'open' : ''}`} />
      </div>
      <div className="collapse-content">{children}</div>
    </div>
  );
}
