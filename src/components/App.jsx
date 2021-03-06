import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

import Home from '../pages/Home/Home';
import Catalog from '../pages/Catalog/Catalog';
import Design from '../pages/Design/Design';
import Graphic from '../pages/Graphic/Graphic';
import AppProvider from '../state/contexts/AppProvider';
import store from '../state/redux/store/store';

const App = () => (
  <ReduxProvider store={store}>
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
  </ReduxProvider>
);

export default App;
