import React from 'react';
import { useHistory } from 'react-router-dom';
import PrimaryButton from '../../PrimaryButton/PrimaryButton';

import './Confirmation.css';

import shirtIcon from '../../../images/ShirtIcon.svg';

const Confirmation = () => {
  const history = useHistory();

  const goToCatalog = ($event) => {
    $event.preventDefault();
    history.push('./catalog');
    console.log('complete');
  };

  return (
    <div className="confirmation-container">
      <div className="confirmation-shirt-icon">
        <img className="img-fluid" src={shirtIcon} alt="Shirt Icon" />
      </div>
      <div className="confirmation-title">Your order is complete.</div>
      <PrimaryButton onClick={goToCatalog}>SHOP SOME MORE</PrimaryButton>
    </div>
  );
};

export default Confirmation;
