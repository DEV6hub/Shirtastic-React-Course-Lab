import {
  CREATE_SHIRT,
  UPDATE_SHIRT,
  DELETE_SHIRT,
  REQUEST_SHIRTS,
  REQUEST_SHIRTS_SUCCESS,
  REQUEST_SHIRTS_FAILURE,
} from '../../constants/ActionTypes';

const shirtsReducer = (state, action) => {
  console.log('Shirts Reducer state:', state);
  console.log('Shirts Reducer action:', action);
  switch (action.type) {
    case CREATE_SHIRT:
      return {
        ...state,
        shirtList: [
          ...state.shirtList,
          { ...action.shirt, id: state.shirtList.length + 1, description: 'Custom Shirt Design' },
        ],
      };

    case UPDATE_SHIRT:
      return {
        ...state,
        shirtList: state.shirtList.map((shirt) =>
          shirt.id === action.shirt.id ? action.shirt : shirt,
        ),
      };
    case DELETE_SHIRT:
      return state.filter((shirt) => shirt.id !== action.id);

    case REQUEST_SHIRTS:
      return { ...state, shirtList: [], isFetchingShirts: true };

    case REQUEST_SHIRTS_SUCCESS:
      return { ...state, shirtList: action.response, isFetchingShirts: false };

    case REQUEST_SHIRTS_FAILURE:
      return { ...state, shirtList: [], isFetchingShirts: false };

    default:
      return state;
  }
};

export default shirtsReducer;
