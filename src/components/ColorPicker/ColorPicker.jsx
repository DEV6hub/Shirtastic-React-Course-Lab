import React from 'react';
import './ColorPicker.css';
import { Row } from 'reactstrap';
import { colors } from '../../constants/colors';

const ColorPicker = ({ selectColor, attribute, selectedColor, title }) => (
  <div className="color-picker-container">
    <div className="color-picker-title">{title}</div>
    <Row className="color-picker-row">
      {colors.map((color, index) => (
        <div key={index}>
          <div
            className={`color-div ${
              selectedColor.name.toLowerCase() === color.name.toLowerCase() ? 'active' : ''
            }`}
            onClick={() => selectColor(color, attribute)}
            style={{ backgroundColor: color.color }}
          />
          <div className="color-name">{color.name}</div>
        </div>
      ))}
    </Row>
  </div>
);

export default ColorPicker;
