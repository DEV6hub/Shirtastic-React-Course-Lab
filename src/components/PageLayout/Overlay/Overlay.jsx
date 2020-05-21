import React from 'react';
import './overlay.css';
// import useOverlay from '../../../hooks/useOverlay';
// import { useHistory } from 'react-router-dom';

// import PrimaryButton from '../PrimaryButton/PrimaryButton';
// import FormInput from '../Forms/FormInput/FormInput';
// import facebookIcon from '../../images/logos/facebook.svg';
// import twitterIcon from '../../images/logos/twitter.svg';
import { useOverlayContext } from '../../../state/contexts/overlayContext';

const Overlay = () => {
  const { isOpen } = useOverlayContext();
  return (
    <>
      <div className={`overlay ${!isOpen ? 'closed' : ''}`}>
        <h2>Overlay</h2>
        <p>status: {isOpen.toString()}</p>
      </div>
    </>
  );
};

export default Overlay;
