import React from 'react';
import Cart from './Cart/Cart';
import SidenavShipping from './SidenavShipping/SidenavShipping';
import Payment from './Payment/Payment';
import './checkout-flow.css';

const CheckoutFlow = () => {
  return (
    <div className="checkout-flow">
      <Cart />
      <SidenavShipping />
      <Payment />
    </div>
  );
};

export default CheckoutFlow;
