import React from 'react';
import { useOverlayContext } from '../../../state/contexts/overlayContext';
import { useShoppingCartContext } from '../../../state/contexts/shoppingCartContext';
import shoppingCartIcon from '../../../images/icons/icon-basket.svg';
import './cart-controls.css';

const CartControls = () => {
  const { toggleOverlay } = useOverlayContext();
  const { shirtsInCart } = useShoppingCartContext();

  return (
    <div className="cart-controls">
      <button type="button" className="cart-items" onClick={() => toggleOverlay()}>
        <img className="cart-icon" src={shoppingCartIcon} alt="Icon of a shopping cart" />
        <div className="total-items">{shirtsInCart.length}</div>
      </button>
    </div>
  );
};

export default CartControls;
