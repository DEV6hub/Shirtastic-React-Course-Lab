import React, { useState, useEffect, useCallback, useRef } from 'react';
import './Catalog.css';
import { Row, Navbar, NavbarToggler } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import Cart from '../../components/Cart/Cart';
import SidenavShipping from '../../components/SidenavShipping/SidenavShipping';
import Payment from '../../components/Payment/Payment';
import Confirmation from '../../components/Confirmation/Confirmation';
import Design from '../../components/Design/Design';
import CatalogTabs from '../../components/CatalogTabs/CatalogTabs';
import {
  REQUEST_SHIRTS,
  REQUEST_SHIRTS_SUCCESS,
  REQUEST_SHIRTS_FAILURE,
  CREATE_SHIRT,
  UPDATE_SHIRT,
} from '../../constants/ActionTypes';
import navLogo from '../../images/navlogo.png';
import { useShirtsContext } from '../../state/contexts/shirts';

const Catalog = () => {
  const history = useHistory();
  const [shirtsState, shirtsDispatch] = useShirtsContext();
  // This can be combined with the line above - separated here for clarity
  const { shirtList, isFetchingShirts } = shirtsState;

  const cart = useRef(null);
  const cartOverlay = useRef(null);
  const shipping = useRef(null);
  const shippingOverlay = useRef(null);
  const payment = useRef(null);
  const overlay = useRef(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [shirtsInCart, setShirtsInCart] = useState([]);
  const [openDesign, setOpenDesign] = useState(false);
  const initialShirt = {
    name: 'untitled_design',
    price: 18.99,
    quantity: 0,
    subtotal: 0,
    shirtStyle: 'MensShirt',
    shirtColor: { name: 'white', color: '#FFFFFF' },
    text: '',
    textColor: { name: 'white', color: '#FFFFFF' },
    font: "'Montserrat', sans-serif",
    graphic: '',
    graphicColor: { name: 'white', color: '#FFFFFF' },
  };
  const [shirtToEdit, setShirtToEdit] = useState(initialShirt);
  const [action, setAction] = useState('');

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
    setShirtsInCart([]);
    payment.current.style.width = '100%';
    cart.current.style.width = '0';
    shipping.current.style.width = '0';
    shippingOverlay.current.style.display = 'none';
    cartOverlay.current.style.display = 'none';
  }, [shirtList]);

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

  const addToCart = useCallback(
    (shirt) => {
      console.log('Add to Cart');
      const cartItems = [...shirtsInCart];
      const index = cartItems.findIndex((item) => {
        return shirt.image === item.image;
      });
      if (index !== -1) {
        // If shirt exists in cart, update its quantity in cart
        cartItems[index].quantity += 1;
        cartItems[index].subtotal = cartItems[index].quantity * cartItems[index].price;
      } else {
        // Update the shirt quantity and add it to cart
        shirt.quantity += 1;
        shirt.subtotal = shirt.quantity * shirt.price;
        cartItems.push(shirt);
      }
      // Update the state with new list
      setShirtsInCart(cartItems);
    },
    [shirtsInCart],
  );

  const editShirt = useCallback((shirt) => {
    console.log('Edit Shirt');
    setOpenDesign(true);
    setShirtToEdit(shirt);
    setAction('edit');
  }, []);

  const removeFromCart = useCallback(
    (shirt) => {
      console.log('Remove');
      shirt.quantity = 0;
      const cartItems = [...shirtsInCart];
      const index = cartItems.findIndex((item) => {
        return shirt.image === item.image;
      });
      cartItems.splice(index, 1);
      setShirtsInCart(cartItems);
    },
    [shirtsInCart],
  );

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
    [shirtsInCart],
  );

  const newShirtDesign = useCallback(() => {
    setOpenDesign(true);
    setAction('new');
  }, []);

  const setShirtTitle = useCallback(
    (event) => {
      const shirt = { ...shirtToEdit };
      shirt.name = event.target.value;
      setShirtToEdit(shirt);
    },
    [shirtToEdit],
  );

  const saveShirtDesign = useCallback(() => {
    // Make a copy of the edited shirt object - to assert that we are not changing state data directly
    const newShirt = { ...shirtToEdit };
    console.log('Shirt Save');

    // Some derived shirt attributes
    newShirt.image = `${newShirt.shirtStyle}-${newShirt.shirtColor.name.toLowerCase()}`;
    [newShirt.gender] = newShirt.shirtStyle;

    if (action === 'new') {
      shirtsDispatch({ type: CREATE_SHIRT, shirt: newShirt });
    } else {
      shirtsDispatch({ type: UPDATE_SHIRT, shirt: newShirt });
    }

    const blankShirt = {
      name: 'untitled_design',
      price: 18.99,
      quantity: 0,
      subtotal: 0,
      shirtStyle: 'MensShirt',
      shirtColor: { name: 'white', color: '#FFFFFF' },
      text: '',
      textColor: { name: 'white', color: '#FFFFFF' },
      font: "'Montserrat', sans-serif",
      graphic: '',
      graphicColor: { name: 'white', color: '#FFFFFF' },
    };

    setOpenDesign(false);
    setAction('');
    setShirtToEdit(blankShirt);
  }, [action, shirtToEdit, shirtsDispatch]);

  const selectStyle = useCallback(
    (style) => {
      const shirt = { ...shirtToEdit };
      shirt.shirtStyle = style;
      setShirtToEdit(shirt);
    },
    [shirtToEdit],
  );

  // TODO AH Consider changing to reducer - this is a reducer-like code
  const selectColor = useCallback(
    (color, attribute) => {
      const shirt = { ...shirtToEdit };
      switch (attribute) {
        case 'shirt':
          shirt.shirtColor = color;
          break;
        case 'text':
          shirt.textColor = color;
          break;
        case 'graphic':
          shirt.graphicColor = color;
          break;
        default:
          break;
      }
      setShirtToEdit(shirt);
    },
    [shirtToEdit],
  );

  const selectGraphic = useCallback(
    (graphic) => {
      const shirt = { ...shirtToEdit };
      shirt.graphic = graphic;
      setShirtToEdit(shirt);
    },
    [shirtToEdit],
  );

  const addShirtText = useCallback(
    (text) => {
      const shirt = { ...shirtToEdit };
      shirt.text = text;
      setShirtToEdit(shirt);
    },
    [shirtToEdit],
  );

  const changeTextFont = useCallback(
    (font) => {
      const shirt = { ...shirtToEdit };
      shirt.font = font;
      setShirtToEdit(shirt);
    },
    [shirtToEdit],
  );

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick, false);
    shirtsDispatch({
      type: REQUEST_SHIRTS,
    });

    fetch('http://localhost:9001/shirts')
      .then((response) => response.json())
      .then(
        (json) =>
          shirtsDispatch({
            type: REQUEST_SHIRTS_SUCCESS,
            response: json,
          }),
        (error) =>
          shirtsDispatch({
            type: REQUEST_SHIRTS_FAILURE,
            error,
          }),
      );
  }, [handleOutsideClick, shirtsDispatch]);

  return (
    <div>
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
      <div className={!showConfirmation ? 'sidenav-payment' : 'sidenav-confirmation'} ref={payment}>
        {!showConfirmation ? (
          <Payment checkout={checkout} />
        ) : (
          <Confirmation goToCatalog={goToCatalog} />
        )}
      </div>
      <Navbar color="faded" light>
        <Row className="nav-toggle-btn">
          <NavbarToggler className="mr-2" onClick={() => history.push('/')} />
          <div className="vr" />
          <img className="nav-logo" src={navLogo} alt="logo" />
        </Row>
        <Row className="cart-btn-container">
          {openDesign ? (
            <div>
              <input
                className="input-shirt-title"
                type="text"
                value={shirtToEdit.name}
                onChange={setShirtTitle}
              />
              <button type="button" className="primary-btn nav-btn" onClick={saveShirtDesign}>
                SAVE DESIGN
              </button>
            </div>
          ) : (
            <button type="button" className="primary-btn nav-btn" onClick={newShirtDesign}>
              NEW DESIGN
            </button>
          )}
          <div className="vr" />
          <Row className="cart-btn" onClick={openCart}>
            <div className="nav-icon-basket" />
            <div className="cart-count">{shirtsInCart.length}</div>
          </Row>
        </Row>
      </Navbar>
      <div>
        <div className="overlay" ref={overlay} />
        {openDesign ? (
          <Design
            shirtToEdit={shirtToEdit}
            selectStyle={selectStyle}
            selectColor={selectColor}
            selectGraphic={selectGraphic}
            addShirtText={addShirtText}
            changeTextFont={changeTextFont}
          />
        ) : (
          <div>
            {isFetchingShirts ? <h1 style={{ color: 'red' }}>FETCHING SHIRTS</h1> : ''}
            <CatalogTabs shirtList={shirtList} addToCart={addToCart} editShirt={editShirt} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalog;
