import { createStore } from 'redux';
import designReducer from '../reducers/design'

// export default createStore(designReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


/* eslint-disable no-underscore-dangle */
  export default createStore(
    designReducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
/* eslint-enable */
