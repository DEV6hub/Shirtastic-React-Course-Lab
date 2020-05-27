import React, { useState } from 'react';
import Cart from './Cart/Cart';
import Shipping from './Shipping/Shipping';
import Payment from './Payment/Payment';
import CheckoutTab from './CheckoutTab/CheckoutTab';
import Confirmation from './Confirmation/Confirmation';
import { useOverlayContext } from '../../state/contexts/overlayContext';
import { useShoppingCartContext } from '../../state/contexts/shoppingCartContext';
import './checkout-flow.css';

const CheckoutFlow = () => {
  const { closeOverlay } = useOverlayContext();
  const { emptyCart } = useShoppingCartContext();

  const [isCartComplete, setCartComplete] = useState(false);
  const [isCartVisible, setCartVisible] = useState(true);

  const [isShippingComplete, setShippingComplete] = useState(false);
  const [isShippingVisible, setShippingVisible] = useState(false);

  const [isPaymentComplete, setPaymentComplete] = useState(false);
  const [isPaymentVisible, setPaymentVisible] = useState(false);

  const onCartComplete = () => {
    setCartComplete(true);
    setShippingVisible(true);
  };

  const onShippingComplete = () => {
    setShippingComplete(true);
    setPaymentVisible(true);
  };

  const onPaymentComplete = () => {
    setPaymentComplete(true);
    setCartVisible(false);
    setShippingVisible(false);
    setPaymentVisible(false);
  };

  const resetCart = () => {
    setCartVisible(true);
    setShippingVisible(false);
    setPaymentVisible(false);
    setCartComplete(false);
    setShippingComplete(false);
    setPaymentComplete(false);
    emptyCart();
    closeOverlay();
  };

  return (
    <div className="checkout-flow">
      {isCartVisible ? (
        <CheckoutTab isDisabled={isCartComplete}>
          <Cart onCartComplete={onCartComplete} />
        </CheckoutTab>
      ) : null}
      {isShippingVisible ? (
        <CheckoutTab isDisabled={isShippingComplete}>
          <Shipping onShippingComplete={onShippingComplete} />
        </CheckoutTab>
      ) : null}
      {isPaymentVisible ? (
        <CheckoutTab isDisabled={isPaymentComplete}>
          <Payment onPaymentComplete={onPaymentComplete} />
        </CheckoutTab>
      ) : null}
      {isCartComplete && isShippingComplete && isPaymentComplete ? (
        <CheckoutTab isWide>
          <Confirmation onComplete={resetCart} />
        </CheckoutTab>
      ) : null}
    </div>
  );
};

export default CheckoutFlow;
