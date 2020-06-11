import { CREATE_USER } from '../../constants/ActionTypes';

const userReducer = (state, action) => {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...action.response,
      };
    default:
      return state;
  }
};

export default userReducer;
