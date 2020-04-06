import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import Catalog from "./pages/Catalog/Catalog";
import CreateShirt from "./pages/CreateShirt/CreateShirt";
import Checkout from "./components/Checkout/Checkout";
import {CHECKOUT_STATE} from "./constants/checkoutState";

function App() {
  const checkoutState = CHECKOUT_STATE.NONE;
  return (
    <>
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/catalog" component={Catalog} />
        <Route path="/create-shirt" component={CreateShirt} />
      </BrowserRouter>
      {checkoutState !== CHECKOUT_STATE.NONE && <Checkout />}
    </>
  );
}

export default App;
