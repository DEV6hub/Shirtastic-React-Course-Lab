import {
  SELECT_SHIRT,
  STYLE_EVENT,
  SHIRT_COLOUR_EVENT,
  GRAPHICS_EVENT,
  GRAPHICS_COLOR_EVENT,
  TEXT_EVENT,
  TEXT_COLOR_EVENT,
  TEXT_FONT_EVENT,
  DESIGN_NAME_EVENT,
} from './actionTypes';

export const selectShirt = (data) => ({
  type: SELECT_SHIRT,
  data,
});

export const styleEvent = (data) => ({
  type: STYLE_EVENT,
  data,
});

export const shirtColourEvent = (data) => ({
  type: SHIRT_COLOUR_EVENT,
  data,
});

export const graphicsEvent = (data) => ({
  type: GRAPHICS_EVENT,
  data,
});

export const graphicsColorEvent = (data) => ({
  type: GRAPHICS_COLOR_EVENT,
  data,
});

export const textEvent = (data) => ({
  type: TEXT_EVENT,
  data,
});

export const textColorEvent = (data) => ({
  type: TEXT_COLOR_EVENT,
  data,
});

export const textFontEvent = (data) => ({
  type: TEXT_FONT_EVENT,
  data,
});

export const designNameEvent = (data) => ({
  type: DESIGN_NAME_EVENT,
  data,
});
