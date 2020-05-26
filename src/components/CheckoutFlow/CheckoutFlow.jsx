import React from 'react';
import Cart from './Cart/Cart';
import Shipping from './Shipping/Shipping';
import Payment from './Payment/Payment';
import './checkout-flow.css';

const CheckoutFlow = () => {
  return (
    <div className="checkout-flow">
      <Cart />
      <Shipping />
      <Payment />
    </div>
  );
};

export default CheckoutFlow;
