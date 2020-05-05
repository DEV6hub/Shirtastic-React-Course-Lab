import React from 'react';
import { render } from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';

render(<App />, document.getElementById('root'));
registerServiceWorker();
