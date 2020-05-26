import React from 'react';
import './Payment.css';
import FormInput from '../../Forms/FormInput/FormInput';

const Payment = ({ checkout }) => (
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
        <div className="amount">$61.94</div>
      </div>
      <div className="price">
        <div className="sub-title">Tax:</div>
        <div className="amount">$61.94</div>
      </div>
      <div className="price">
        <div className="sub-title">Shipping:</div>
        <div className="amount">$61.94</div>
      </div>
    </div>
    <hr />
    <div className="price">
      <div className="total-title">Total:</div>
      <div className="total-price">$61.94</div>
    </div>
    <div>
      <button type="button" className="primary-btn float-right" onClick={checkout}>
        CHECKOUT
      </button>
    </div>
  </div>
);

export default Payment;
