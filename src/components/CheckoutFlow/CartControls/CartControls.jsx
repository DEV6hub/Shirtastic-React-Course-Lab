import React from 'react';
import { useOverlayContext } from '../../../state/contexts/overlayContext';
import shoppingCartIcon from '../../../images/icons/icon-basket.svg';
import './cart-controls.css';

const CartControls = () => {
  const { toggleOverlay } = useOverlayContext();

  return (
    <div className="cart-controls">
      <button type="button" className="cart-items" onClick={() => toggleOverlay()}>
        <img className="cart-icon" src={shoppingCartIcon} alt="Icon of a shopping cart" />
        <div className="total-items">0</div>
      </button>
    </div>
  );
};

export default CartControls;
