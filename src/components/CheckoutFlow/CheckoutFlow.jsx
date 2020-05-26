import React, { useState } from 'react';
import Cart from './Cart/Cart';
import Shipping from './Shipping/Shipping';
import Payment from './Payment/Payment';
import Confirmation from './Confirmation/Confirmation';
import { useOverlayContext } from '../../state/contexts/overlayContext';
import { useShoppingCartContext } from '../../state/contexts/shoppingCartContext';
import './checkout-flow.css';

const CheckoutFlow = () => {
  const [isCartComplete, setCartComplete] = useState(false);
  const [isShippingComplete, setShippingComplete] = useState(false);
  const [isPaymentComplete, setPaymentComplete] = useState(false);
  // TODO: AK: Implement checkout step component which will handle visible/disabled state;

  const onCartComplete = () => {
    setCartComplete(true);
    console.log('cartComplete', isCartComplete);
  };

  const closeCart = () => {
    console.log('close cart');
  };

  return (
    <div className="checkout-flow">
      <Cart onCartComplete={onCartComplete} isCartComplete={isCartComplete} />
      <Shipping onSh />
      <Payment /> */}
      {/* <Confirmation onComplete={closeCart} /> */}
    </div>
  );
};

export default CheckoutFlow;
