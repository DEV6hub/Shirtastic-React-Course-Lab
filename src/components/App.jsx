import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Home from '../pages/Home/Home';
import Catalog from '../pages/Catalog/Catalog';
import GraphicDisplay from './GraphicDisplay/GraphicDisplay';
import { ShirtsProvider } from '../state/contexts/shirts';
import { UserProvider } from '../state/contexts/user';

const App = () => {
  return (
    <UserProvider>
      <ShirtsProvider>
        <Router>
          <div className="App">
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/catalog">
              <Catalog />
            </Route>
            <Route path="/graphic/:graphicLogo">
              <GraphicDisplay />
            </Route>
          </div>
        </Router>
      </ShirtsProvider>
    </UserProvider>
  );
};

export default App;
