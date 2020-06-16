import React from 'react';
import PropTypes from 'prop-types';

import ColorPicker from '../ColorPicker/ColorPicker';
import FormInput from '../../Forms/FormInput/FormInput';
import FormSelect from '../../Forms/FormSelect/FormSelect';

import { COLOR_BLACK } from '../../../constants/colorOptions';
import { FONT_MONTSERRAT, SHIRT_FONTS } from '../../../constants/fontOptions';
import { TEXT_COLOR_EVENT, TEXT_EVENT, TEXT_FONT_EVENT } from '../../../constants/optionEventTypes';

import './shirt-text.css';

const fontOptions = SHIRT_FONTS.map((font) => ({ text: font.name, value: font.font }));

const ShirtText = ({ selectedTextColor, selectedShirtFont, shirtText, onChange }) => (
  <div className="shirt-text-options">
    <FormInput
      id="shirt-text"
      label="Enter Text"
      onChange={(e) => onChange({ type: TEXT_EVENT, data: e.target.value })}
      value={shirtText}
    />
    <hr />
    <FormSelect
      id="text-font"
      label="Change font"
      options={fontOptions}
      value={selectedShirtFont}
      onChange={(e) => {
        onChange({ type: TEXT_FONT_EVENT, data: e.target.value });
      }}
    />
    <hr />
    <ColorPicker
      title="Change text colour"
      selectedColor={selectedTextColor}
      onColorSelected={(color) => onChange({ type: TEXT_COLOR_EVENT, data: color })}
    />
  </div>
);

ShirtText.propTypes = {
  selectedTextColor: PropTypes.shape({
    color: PropTypes.string,
    name: PropTypes.string,
  }),
  selectedShirtFont: PropTypes.string,
  shirtText: PropTypes.string,
  onChange: PropTypes.func,
};

ShirtText.defaultProps = {
  selectedTextColor: COLOR_BLACK,
  shirtText: '',
  selectedShirtFont: FONT_MONTSERRAT.font,
  onChange: ($event) => console.log('Function need to be set to handle this event: ', $event),
};

export default ShirtText;
