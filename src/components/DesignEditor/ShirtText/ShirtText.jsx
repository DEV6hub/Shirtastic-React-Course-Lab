import React from 'react';
import ColorPicker from '../ColorPicker/ColorPicker';
import { COLOR_BLACK } from '../../../constants/colorOptions';
import { FONT_MONTSERRAT, SHIRT_FONTS } from '../../../constants/fontOptions';
import './shirt-text.css';
import { TEXT_COLOR_EVENT, TEXT_EVENT, TEXT_FONT_EVENT } from '../../../constants/optionEventTypes';
import FormInput from '../../Forms/FormInput/FormInput';
import FormSelect from '../../Forms/FormSelect/FormSelect';

const fontOptions = SHIRT_FONTS.map((font) => ({ text: font.name, value: font.font }));

const ShirtText = ({ selectedTextColor, selectedShirtFont, shirtText, onOptionSelected }) => (
  <div className="shirt-text-options">
    <FormInput
      id="shirt-text"
      label="Enter Text"
      onChangeFn={(e) => onOptionSelected({ type: TEXT_EVENT, data: e.target.value })}
      inputValue={shirtText}
    />
    <hr />
    <FormSelect
      id="text-font"
      label="Change font"
      options={fontOptions}
      value={selectedShirtFont}
      onChangeFn={(e) => onOptionSelected({ type: TEXT_FONT_EVENT, data: e.target.value })}
    />
    <hr />
    <ColorPicker
      title="Change text colour"
      selectedColor={selectedTextColor}
      onColorSelected={(color) => onOptionSelected({ type: TEXT_COLOR_EVENT, data: color })}
    />
  </div>
);

ShirtText.defaultProps = {
  selectedTextColor: COLOR_BLACK,
  onOptionSelected: (event) => console.log('Function need to be set to handle this event: ', event),
  shirtText: '',
  selectedShirtFont: FONT_MONTSERRAT.font,
};

export default ShirtText;
