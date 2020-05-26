import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import CartControls from '../CartControls/CartControls';
import PrimaryButton from '../../PrimaryButton/PrimaryButton';
import './Cart.css';
import { useShoppingCartContext } from '../../../state/contexts/shoppingCartContext';
import CartItem from '../CartItem/CartItem';

const Cart = ({ onCartComplete, isCartComplete }) => {
  const { shirtsInCart, removeFromCart, setShirtsInCart } = useShoppingCartContext();

  const calculateTotal = useCallback(() => {
    let total = 0;
    shirtsInCart.forEach((shirt) => {
      total += shirt.subtotal;
    });
    return Math.round(total * 100) / 100;
  }, [shirtsInCart]);

  const updateQuantity = useCallback(
    (shirt) => {
      const cartItems = [...shirtsInCart];

      const index = cartItems.findIndex((item) => {
        return shirt.image === item.image;
      });

      if (index !== -1) {
        cartItems[index].quantity = shirt.quantity;
        cartItems[index].subtotal = cartItems[index].quantity * cartItems[index].price;
      }

      setShirtsInCart(cartItems);
    },
    [setShirtsInCart, shirtsInCart],
  );

  return (
    <div className={`checkout-step cart-container${isCartComplete ? ' complete-step' : ''}`}>
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
      {shirtsInCart.length > 0 ? (
        <div className="subtotal">
          Subtotal: <span>${calculateTotal()}</span>
        </div>
      ) : null}

      <PrimaryButton onClick={onCartComplete} isDisabled={shirtsInCart.length === 0}>
        GO TO SHIPPING -&gt;
      </PrimaryButton>
    </div>
  );
};

Cart.propTypes = {
  onCartComplete: PropTypes.func.isRequired,
  isCartComplete: PropTypes.bool.isRequired,
};

export default Cart;
