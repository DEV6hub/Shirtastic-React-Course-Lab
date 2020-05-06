import { CREATE_USER } from '../../constants/ActionTypes';

const userReducer = (state, action) => {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        user: action.response,
      };
    default:
      return state;
  }
};

export default userReducer;
