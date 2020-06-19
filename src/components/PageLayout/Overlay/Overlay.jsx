import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './overlay.css';
import { useOverlayContext } from '../../../state/contexts/overlayContext';

const Overlay = ({ children }) => {
  const { isOpen, closeOverlay } = useOverlayContext();

  const handleKeyboard = ({ keyCode }) => {
    if (isOpen) {
      if (keyCode === 27) {
        closeOverlay();
      }
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyboard);

    return () => {
      document.removeEventListener('keydown', handleKeyboard);
    };
  });

  return (
    <div className="overlay-wrapper">
      <div className={`overlay ${!isOpen ? 'closed' : ''}`} role="dialog">
        {children}
      </div>
    </div>
  );
};

Overlay.propTypes = {
  children: PropTypes.node,
};

Overlay.defaultProps = {
  children: null,
};

export default Overlay;
