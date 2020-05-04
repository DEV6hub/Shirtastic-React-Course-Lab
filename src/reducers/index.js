import { combineReducers } from 'redux';
import shirts from './shirts';
import user from './user';

const rootReducer = combineReducers({
  shirts,
  user,
});

export default rootReducer;
