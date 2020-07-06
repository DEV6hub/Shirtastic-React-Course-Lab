import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AppProvider from '../state/contexts/AppProvider';
import Home from '../pages/Home/Home';
import Catalog from '../pages/Catalog/Catalog';
import Design from '../pages/Design/Design';
import Graphic from '../pages/Graphic/Graphic';

const App = () => {
  return (
    <AppProvider>
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/catalog">
          <Catalog />
        </Route>
        <Route exact path="/design/:shirtId?">
          <Design />
        </Route>
        <Route path="/graphic/:graphicLogo">
          <Graphic />
        </Route>
      </Router>
    </AppProvider>
  );
};

export default App;
