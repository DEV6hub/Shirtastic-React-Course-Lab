import React, { useRef, useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Row, Navbar, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import Cart from '../CheckoutFlow/Cart/Cart';
// import SidenavShipping from '../CheckoutFlow/SidenavShipping/SidenavShipping';
// import Payment from '../CheckoutFlow/Payment/Payment';
// import Confirmation from '../Confirmation/Confirmation';

import navLogo from '../../images/navlogo.png';
import { useShirtsContext } from '../../state/contexts/shirtsContext';
import { useShoppingCartContext } from '../../state/contexts/shoppingCartContext';

import PrimaryButton from '../PrimaryButton/PrimaryButton';

const Navigation = ({ isDesign, shirtTitle, setShirtTitle, handleSaveShirt }) => {
  const { shirtList } = useShirtsContext();
  const { shirtsInCart, removeFromCart, emptyCart, setShirtsInCart } = useShoppingCartContext();

  const cart = useRef(null);
  const cartOverlay = useRef(null);
  const shipping = useRef(null);
  const shippingOverlay = useRef(null);
  const payment = useRef(null);
  const overlay = useRef(null);

  const [showConfirmation, setShowConfirmation] = useState(false);

  const closeCart = useCallback(() => {
    console.log('Cart Closed');
    cart.current.style.width = '0';
    overlay.current.style.display = 'none';
    shipping.current.style.width = '0';
    cart.current.style.right = '0';
    shipping.current.style.right = '0';
    shippingOverlay.current.style.display = 'none';
    cartOverlay.current.style.display = 'none';
    payment.current.style.width = '0';
    setShowConfirmation(false);
  }, []);

  const handleOutsideClick = useCallback(
    (e) => {
      // ignore clicks on the component itself
      if (e.target.className !== 'overlay') {
        return;
      }
      closeCart();
    },
    [closeCart],
  );

  const openCart = useCallback(() => {
    console.log('Cart Open');
    cart.current.style.width = '100%';
    overlay.current.style.display = 'block';
  }, []);

  const openShipping = useCallback(() => {
    console.log('Go To Shipping');
    cart.current.style.right = '385px';
    shipping.current.style.width = '100%';
    cartOverlay.current.style.display = 'block';
    cartOverlay.current.style.right = '385px';
  }, []);

  const openPayment = useCallback(() => {
    console.log('Go To Payment');
    cart.current.style.right = '770px';
    cartOverlay.current.style.right = '770px';
    payment.current.style.width = '100%';
    shipping.current.style.right = '385px';
    shippingOverlay.current.style.display = 'block';
  }, []);

  const checkout = useCallback(() => {
    console.log('Go To Checkout');
    shirtList.forEach((shirt) => {
      shirt.quantity = 0;
    });
    setShowConfirmation(true);
    emptyCart();
    payment.current.style.width = '100%';
    cart.current.style.width = '0';
    shipping.current.style.width = '0';
    shippingOverlay.current.style.display = 'none';
    cartOverlay.current.style.display = 'none';
  }, [emptyCart, shirtList]);

  const goToCatalog = useCallback(() => {
    console.log('Go Back To Catalog');
    // Reset fixed positioning for all 3 side nav components and set showConfirmation to false
    payment.current.style.width = '0';
    overlay.current.style.display = 'none';
    cart.current.style.width = '0';
    cart.current.style.right = '0';
    shipping.current.style.width = '0';
    shipping.current.style.right = '0';
    setShowConfirmation(false);
  }, []);

  const updateQuantity = useCallback(
    (shirt) => {
      // Update the quantity from the input text box
      console.log('Update');
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

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick, false);
  }, [handleOutsideClick]);

  return (
    <>
      {/* <div className="overlay" ref={overlay} />

      <div className="">
        <div id="cart" className="sidenav-cart" ref={cart}>
          <div className="cart-overlay" ref={cartOverlay} />
          <Cart
            openShipping={openShipping}
            closeCart={closeCart}
            shirtsInCart={shirtsInCart}
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
          />
        </div>
        <div className="sidenav-shipping" ref={shipping}>
          <div className="shipping-overlay" ref={shippingOverlay} />
          <SidenavShipping openPayment={openPayment} />
        </div>
        <div
          className={!showConfirmation ? 'sidenav-payment' : 'sidenav-confirmation'}
          ref={payment}
        >
          {!showConfirmation ? (
            <Payment checkout={checkout} />
          ) : (
            <Confirmation goToCatalog={goToCatalog} />
          )}
        </div>
      </div> */}
      Nav
      <Navbar color="faded" light>
        <Row className="nav-toggle-btn">
          <Col className="mr-2">
            <Link to="/" className="navbar-toggler-icon" />
          </Col>
          <div className="vr" />
          <img className="nav-logo" src={navLogo} alt="logo" />
        </Row>
        <Row className="cart-btn-container">
          {isDesign ? (
            <div>
              <input
                className="input-shirt-title"
                type="text"
                value={shirtTitle}
                // value={shirtToEdit.name}
                onChange={(event) => {
                  setShirtTitle(event.target.value);
                }}
              />
              <button type="button" className="btn primary-btn nav-btn" onClick={handleSaveShirt}>
                SAVE DESIGN
              </button>
            </div>
          ) : (
            <Link to="/design/0?action=new" className="btn primary-btn nav-btn">
              NEW DESIGN
            </Link>
          )}
          {/* <div className="vr" />
          <Row className="cart-btn" onClick={openCart}>
            <div className="nav-icon-basket" />
            <div className="cart-count">{shirtsInCart.length}</div>
          </Row> */}
        </Row>
      </Navbar>
    </>
  );
};

Navigation.propTypes = {
  isDesign: PropTypes.bool.isRequired,
  shirtTitle: PropTypes.string,
  setShirtTitle: PropTypes.func,
  handleSaveShirt: PropTypes.func,
};

Navigation.defaultProps = {
  shirtTitle: null,
  setShirtTitle: null,
  handleSaveShirt: null,
};

export default Navigation;
