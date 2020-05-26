import React from 'react';
import Cart from './Cart/Cart';
import Shipping from './Shipping/Shipping';
import Payment from './Payment/Payment';
import Confirmation from './Confirmation/Confirmation';
import './checkout-flow.css';

const CheckoutFlow = () => {
  return (
    <div className="checkout-flow">
      {/* <Cart />
      <Shipping />
      <Payment /> */}
      <Confirmation />
    </div>
  );
};

export default CheckoutFlow;
