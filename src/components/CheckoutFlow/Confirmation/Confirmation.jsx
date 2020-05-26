import React from 'react';
import PropTypes from 'prop-types';
import PrimaryButton from '../../PrimaryButton/PrimaryButton';

import './Confirmation.css';

import shirtIcon from '../../../images/ShirtIcon.svg';

const Confirmation = ({ onComplete }) => (
  <div className="confirmation-container">
    <div className="confirmation-shirt-icon">
      <img className="img-fluid" src={shirtIcon} alt="Shirt Icon" />
    </div>
    <div className="confirmation-title">Your order is complete.</div>
    <PrimaryButton onClick={onComplete}>SHOP SOME MORE</PrimaryButton>
  </div>
);

Confirmation.protoTypes = {
  onComplete: PropTypes.func.isRequired,
};

export default Confirmation;
