import React from 'react';
import { COLOR_OPTIONS, COLOR_WHITE } from '../../../constants/colorOptions';
import './color-picker.css';
import CheckmarkIcon from '../../CheckmarkIcon/CheckmarkIcon';

const ColorPicker = ({ title, selectedColor, onColorSelected }) => (
  <div className="color-options">
    <div className="options-heading">{title}</div>
    <div className="options">
      {COLOR_OPTIONS.map((color) => (
        <ColorOption
          key={color.name}
          color={color}
          isSelected={selectedColor.color === color.color}
          onClick={(colorOption) => onColorSelected(colorOption)}
        />
      ))}
    </div>
  </div>
);

ColorPicker.defaultProps = {
  title: 'Please Set a title for this color picker',
  selectedColor: COLOR_WHITE,
  onColorSelected: (data) => console.log('Shirt Color Option Event needs to be handled: ', data),
};

const ColorOption = ({ color, isSelected, onClick }) => (
  <button onClick={() => onClick(color)} className="color-option">
    <div className="color-swatch" style={{ backgroundColor: color.color }} />
    <div className="color-name">{color.name}</div>
    {isSelected && <CheckmarkIcon />}
  </button>
);

export default ColorPicker;
