import {
  CREATE_SHIRT,
  UPDATE_SHIRT,
  DELETE_SHIRT,
  REQUEST_SHIRTS,
  REQUEST_SHIRTS_SUCCESS,
  REQUEST_SHIRTS_FAILURE,
} from '../constants/ActionTypes';

const shirts = (
  state = {
    fetchingShirts: false,
    shirtList: [],
  },
  action,
) => {
  switch (action.type) {
    case CREATE_SHIRT:
      return [...state, action.shirt];
    case UPDATE_SHIRT:
      return state.map((shirt) => (shirt.id === action.id ? action.shirt : shirt));
    case DELETE_SHIRT:
      return state.filter((shirt) => shirt.id !== action.id);
    case REQUEST_SHIRTS_SUCCESS:
      return { ...state, shirtList: action.response, fetchingShirts: false };
    case REQUEST_SHIRTS:
      return { ...state, fetchingShirts: true };
    case REQUEST_SHIRTS_FAILURE:
    default:
      return state;
  }
};

export default shirts;