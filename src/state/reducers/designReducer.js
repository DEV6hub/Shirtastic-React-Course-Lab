import { STYLE_EVENT, SHIRT_COLOUR_EVENT } from '../../constants/optionEventTypes';

const designReducer = (state, action) => {
  let newState = null;

  switch (action.type) {
    case STYLE_EVENT:
      newState = { ...state };
      newState.shirtStyle = action.data;
      break;
    case SHIRT_COLOUR_EVENT:
      newState = { ...state };
      newState.shirtColor = action.data;
      break;
    default:
      break;
  }

  return newState;
};

export default designReducer;
