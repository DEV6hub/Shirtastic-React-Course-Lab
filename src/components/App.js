import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import {Home} from "../pages/Home";
import {Catalog} from "../pages/Catalog";
import {CreateShirt} from "../pages/CreateShirt";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/catalog" component={Catalog} />
      <Route path="/create-shirt" component={CreateShirt} />
    </BrowserRouter>
  );
}

export default App;
