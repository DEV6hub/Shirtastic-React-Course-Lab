import React from 'react';
import PropTypes from 'prop-types';
import FormInput from '../../Forms/FormInput/FormInput';
import PrimaryButton from '../../PrimaryButton/PrimaryButton';
import { useShoppingCartContext } from '../../../state/contexts/shoppingCartContext';

import './Payment.css';

const Payment = ({ onPaymentComplete }) => {
  const { subTotal, afterTax, shipping, total } = useShoppingCartContext();

  return (
    <div className="checkout-step payment-container">
      <div className="payment-title">Payment Method</div>
      <hr />
      <form>
        <FormInput id="card" label="Credit Card Number" placeholder="**** **** **** 1234" />
        <FormInput id="exp" label="Expiration" placeholder="MM/YY" />
        <FormInput id="ccv" label="CCV" placeholder="123" />
      </form>
      <hr />
      <div>
        <div className="price">
          <div className="sub-title">Subtotal:</div>
          <div className="amount">${subTotal}</div>
        </div>
        <div className="price">
          <div className="sub-title">Tax:</div>
          <div className="amount">${afterTax}</div>
        </div>
        <div className="price">
          <div className="sub-title">Shipping:</div>
          <div className="amount">${shipping}</div>
        </div>
      </div>
      <hr />
      <div className="price">
        <div className="total-title">Total:</div>
        <div className="total-price">${total}</div>
      </div>
      <div>
        <PrimaryButton onClick={onPaymentComplete}>Checkout</PrimaryButton>
      </div>
    </div>
  );
};

Payment.propTypes = {
  onPaymentComplete: PropTypes.func.isRequired,
};

export default Payment;
