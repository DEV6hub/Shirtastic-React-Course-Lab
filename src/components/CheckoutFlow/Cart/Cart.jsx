import React, { useCallback } from 'react';
import CartControls from '../CartControls/CartControls';
import PrimaryButton from '../../PrimaryButton/PrimaryButton';
import './Cart.css';
import { useShoppingCartContext } from '../../../state/contexts/shoppingCartContext';
import CartItem from '../CartItem/CartItem';

const Cart = () => {
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
    <div>
      <div className="cart-container">
        <div className="cart-header">
          <h3 className="cart-title">Shopping Cart</h3>
          <CartControls />
        </div>
        <hr />

        {shirtsInCart.map((shirt, index) => (
          <div key={index}>
            <CartItem shirt={shirt} remove={removeFromCart} updateQuantity={updateQuantity} />
            <hr />
          </div>
        ))}
        {shirtsInCart.length > 0 ? (
          <div className="subtotal">
            Subtotal: <span>${calculateTotal()}</span>
          </div>
        ) : null}

        <PrimaryButton onClick={console.log('test')}>GO TO SHIPPING -&gt;</PrimaryButton>
      </div>
    </div>
  );
};

export default Cart;
