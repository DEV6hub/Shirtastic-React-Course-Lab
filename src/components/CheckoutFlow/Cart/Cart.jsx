import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import CartControls from '../CartControls/CartControls';
import CartItem from '../CartItem/CartItem';
import PrimaryButton from '../../PrimaryButton/PrimaryButton';
import { useShoppingCartContext } from '../../../state/contexts/shoppingCartContext';
import './Cart.css';

const Cart = ({ onCartComplete }) => {
  const { shirtsInCart, removeFromCart, setShirtsInCart, subTotal } = useShoppingCartContext();

  const updateQuantity = useCallback(
    (shirt, quantity) => {
      const cartItems = [...shirtsInCart];

      const index = cartItems.findIndex((item) => {
        return shirt.id === item.id;
      });

      if (index !== -1) {
        cartItems[index].quantity = quantity;
        cartItems[index].subtotal = cartItems[index].quantity * cartItems[index].price;
      }

      setShirtsInCart(cartItems);
    },
    [setShirtsInCart, shirtsInCart],
  );

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h3 className="cart-title">Shopping Cart</h3>
        <CartControls />
      </div>
      <hr />

      {shirtsInCart.map((shirt) => (
        <div key={shirt.id}>
          <CartItem shirt={shirt} remove={removeFromCart} updateQuantity={updateQuantity} />
          <hr />
        </div>
      ))}
      {shirtsInCart.length > 0 && (
        <div className="subtotal">
          Subtotal: <span>${subTotal}</span>
        </div>
      )}

      <PrimaryButton onClick={onCartComplete} isDisabled={shirtsInCart.length === 0}>
        GO TO SHIPPING -&gt;
      </PrimaryButton>
    </div>
  );
};

Cart.propTypes = {
  onCartComplete: PropTypes.func.isRequired,
};

export default Cart;
