import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Home from '../pages/Home/Home';
import Catalog from '../pages/Catalog/Catalog';
import GraphicDisplay from './GraphicDisplay/GraphicDisplay';
import { StateProvider } from '../state/state';

const App = () => {
  return (
    <StateProvider>
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
    </StateProvider>
  );
};

export default App;
