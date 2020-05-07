import {
  CREATE_SHIRT,
  UPDATE_SHIRT,
  REQUEST_SHIRTS,
  REQUEST_SHIRTS_SUCCESS,
  REQUEST_SHIRTS_FAILURE,
} from '../../constants/ActionTypes';

const shirtsReducer = (prevState, action) => {
  console.log('Shirts Reducer previous state:', prevState);
  console.log('Shirts Reducer action:', action);

  let newState = null;

  switch (action.type) {
    case CREATE_SHIRT:
      newState = {
        ...prevState,
        shirtList: [...prevState.shirtList, action.shirt],
      };
      return newState;

    case UPDATE_SHIRT:
      newState = {
        ...prevState,
        shirtList: prevState.shirtList.map((shirt) =>
          shirt.id === action.shirt.id ? action.shirt : shirt,
        ),
      };
      return newState;

    // Delete is not currently supported by UI
    // case DELETE_SHIRT:
    //   return state.filter((shirt) => shirt.id !== action.id);

    case REQUEST_SHIRTS:
      newState = { ...prevState, shirtList: [], isFetchingShirts: true };
      return newState;

    case REQUEST_SHIRTS_SUCCESS:
      newState = {
        ...prevState,
        shirtList: action.response.filter((item) => !!item.name),
        isFetchingShirts: false,
      };
      return newState;

    case REQUEST_SHIRTS_FAILURE:
      newState = { ...prevState, shirtList: [], isFetchingShirts: false };
      return newState;

    default:
      return prevState;
  }
};

export default shirtsReducer;
