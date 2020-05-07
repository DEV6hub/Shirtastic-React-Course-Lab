import React from 'react';
import PropTypes from 'prop-types';
import './ColorPicker.css';
import { Row } from 'reactstrap';
import { colors } from '../../constants/colors';

const ColorPicker = ({ selectColor, attribute, selectedColor, title }) => (
  <div className="color-picker-container">
    <div className="color-picker-title">{title}</div>
    <Row className="color-picker-row">
      {colors.map((color) => (
        <button
          key={color.name}
          type="button"
          className={`color-div ${
            selectedColor.name.toLowerCase() === color.name.toLowerCase() ? 'active' : ''
          }`}
          onClick={() => selectColor(color, attribute)}
          style={{ backgroundColor: color.color }}
        >
          <div className="color-name">{color.name}</div>
        </button>
      ))}
    </Row>
  </div>
);

ColorPicker.propTypes = {
  selectColor: PropTypes.func.isRequired,
  attribute: PropTypes.string.isRequired,
  selectedColor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
};
export default ColorPicker;
