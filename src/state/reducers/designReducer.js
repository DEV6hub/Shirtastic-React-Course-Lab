import {
  STYLE_EVENT,
  SHIRT_COLOUR_EVENT,
  GRAPHICS_EVENT,
  GRAPHICS_COLOR_EVENT,
  TEXT_EVENT,
  TEXT_COLOR_EVENT,
  TEXT_FONT_EVENT,
} from '../../constants/optionEventTypes';

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

    case GRAPHICS_EVENT:
      newState = { ...state };
      newState.graphic = action.data;
      break;

    case GRAPHICS_COLOR_EVENT:
      newState = { ...state };
      newState.graphicColor = action.data;
      break;

    case TEXT_EVENT:
      newState = { ...state };
      newState.text = action.data;
      break;

    case TEXT_COLOR_EVENT:
      newState = { ...state };
      newState.textColor = action.data;
      break;

    case TEXT_FONT_EVENT:
      newState = { ...state };
      newState.font = action.data;
      break;

    default:
      break;
  }

  return newState;
};

export default designReducer;
