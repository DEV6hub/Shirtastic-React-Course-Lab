import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Home from '../pages/Home/Home';
import Catalog from '../pages/Catalog/Catalog';
import GraphicDisplay from './GraphicDisplay/GraphicDisplay';
import AppProvider from '../state/contexts/AppProvider';
import Design from '../pages/Design/Design';

const App = () => {
  return (
    <AppProvider>
      <Router>
        <div className="App">
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/catalog">
            <Catalog />
          </Route>
          <Route exact path="/design/:shirtId">
            <Design />
          </Route>
          <Route path="/graphic/:graphicLogo">
            <GraphicDisplay />
          </Route>
        </div>
      </Router>
    </AppProvider>
  );
};

export default App;
