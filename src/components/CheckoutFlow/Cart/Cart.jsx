import React, { useCallback } from 'react';
import CartControls from '../CartControls/CartControls';
import './Cart.css';
import { useShoppingCartContext } from '../../../state/contexts/shoppingCartContext';
import CartItem from '../CartItem/CartItem';

// import ShirtInCart from '../ShirtInCart/ShirtInCart';

// const Cart = ({ openShipping, closeCart, shirtsInCart, removeFromCart, updateQuantity }) => {

const Cart = () => {
  const { shirtsInCart, addToCart, removeFromCart } = useShoppingCartContext();
  // const calculateTotal = useCallback(() => {
  //   let total = 0;
  //   shirtsInCart.forEach((shirt) => {
  //     total += shirt.subtotal;
  //   });
  //   return Math.round(total * 100) / 100;
  // }, [shirtsInCart]);

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
            <CartItem shirt={shirt} add={addToCart} remove={removeFromCart} />
            <hr />
          </div>
        ))}
        {/* {shirtsInCart.length > 0 ? (
          <div className="subtotal">
            Subtotal: <span>${calculateTotal()}</span>
          </div>
        ) : null} */}
        <button
          type="button"
          className="primary-btn"
          onClick={
            console.log('test')
            // openShipping
          }
        >
          ewew
        </button>
      </div>
    </div>
  );
};

export default Cart;
