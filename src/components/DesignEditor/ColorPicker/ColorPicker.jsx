import React from 'react';
import PropTypes from 'prop-types';
import CheckmarkIcon from '../../CheckmarkIcon/CheckmarkIcon';
import { COLOR_OPTIONS, COLOR_WHITE } from '../../../constants/colorOptions';
import './color-picker.css';

const ColorPicker = ({ title, selectedColor, onColorSelected }) => (
  <div className="color-options">
    <div className="options-heading">{title}</div>
    <div className="options">
      {COLOR_OPTIONS.map((color) => {
        return (
          <ColorOption
            key={color.name}
            color={color}
            isSelected={selectedColor.color.toUpperCase() === color.color.toUpperCase()}
            onClick={(colorOption) => onColorSelected(colorOption)}
          />
        );
      })}
    </div>
  </div>
);

ColorPicker.propTypes = {
  title: PropTypes.string,
  selectedColor: PropTypes.shape({
    color: PropTypes.string,
    name: PropTypes.string,
  }),
  onColorSelected: PropTypes.func,
};

ColorPicker.defaultProps = {
  title: 'Please Set a title for this color picker',
  selectedColor: COLOR_WHITE,
  onColorSelected: (event) => console.log('Shirt Color Option Event needs to be handled: ', event),
};

const ColorOption = ({ color, isSelected, onClick }) => (
  <button type="button" onClick={() => onClick(color)} className="color-option">
    <div className="color-swatch" style={{ backgroundColor: color.color }} />
    <div className="color-name">{color.name}</div>
    {isSelected && <CheckmarkIcon />}
  </button>
);

ColorOption.propTypes = {
  color: PropTypes.shape({
    color: PropTypes.string,
    name: PropTypes.string,
  }),
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
};

ColorOption.defaultProps = {
  color: {
    color: '',
    name: '',
  },
  isSelected: false,
  onClick: (event) => console.log('Not implemented', event),
};

export default ColorPicker;
