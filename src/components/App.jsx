import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AppProvider from '../state/contexts/AppProvider';

const App = () => {
  return (
    <AppProvider>
      <Router></Router>
    </AppProvider>
  );
};

export default App;
