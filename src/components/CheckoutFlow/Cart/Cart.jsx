import React, { useCallback } from 'react';
import CartControls from '../CartControls/CartControls';
import './Cart.css';

// import ShirtInCart from '../ShirtInCart/ShirtInCart';

// const Cart = ({ openShipping, closeCart, shirtsInCart, removeFromCart, updateQuantity }) => {

const Cart = () => {
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
          <div className="cart-title">Shopping Cart</div>
          {/* <Col className="cart-btn" xs="3" onClick={closeCart}> */}
          <CartControls />
        </div>
        <hr />

        {/* {shirtsInCart.map((shirt, index) => (
          <div key={index}>
            <ShirtInCart
              shirt={shirt}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
            />
            <hr />
          </div>
        ))} */}
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
