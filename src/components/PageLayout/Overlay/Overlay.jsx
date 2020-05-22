import React from 'react';
import PropTypes from 'prop-types';

import './overlay.css';
import { useOverlayContext } from '../../../state/contexts/overlayContext';

const Overlay = ({ children }) => {
  const { isOpen } = useOverlayContext();
  return (
    <>
      <div className={`overlay ${!isOpen ? 'closed' : ''}`}>{children}</div>
    </>
  );
};

Overlay.propTypes = {
  children: PropTypes.node,
};

Overlay.defaultProps = {
  children: null,
};

export default Overlay;
