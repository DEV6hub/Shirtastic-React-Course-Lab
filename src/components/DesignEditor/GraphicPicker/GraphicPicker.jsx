import React from 'react';
import PropTypes from 'prop-types';

import ColorPicker from '../ColorPicker/ColorPicker';
import ShirtGraphics from '../../../constants/shirtDesigns';
import CheckmarkIcon from '../../CheckmarkIcon/CheckmarkIcon';

import { COLOR_BLACK } from '../../../constants/colorOptions';

import './graphic-picker.css';

const graphicKeys = Object.keys(ShirtGraphics);

const GraphicPicker = ({
  selectedGraphic,
  selectedGraphicColor,
  onGraphicSelected,
  onGraphicColorSelected,
}) => (
  <div className="graphic-options">
    <div className="options-heading">Choose a graphic</div>
    <div className="graphics">
      {graphicKeys.map((key) => (
        <GraphicOption
          key={ShirtGraphics[key]}
          fileName={ShirtGraphics[key]}
          onGraphicSelected={onGraphicSelected}
          isSelected={selectedGraphic === ShirtGraphics[key]}
        />
      ))}
    </div>
    <hr />
    <ColorPicker
      title="Change graphic colour"
      selectedColor={selectedGraphicColor}
      onColorSelected={(color) => onGraphicColorSelected(color)}
    />
  </div>
);

GraphicPicker.propTypes = {
  selectedGraphic: PropTypes.string,
  selectedGraphicColor: PropTypes.shape({ name: PropTypes.string, color: PropTypes.string }),
  onGraphicSelected: PropTypes.func,
  onGraphicColorSelected: PropTypes.func,
};

GraphicPicker.defaultProps = {
  selectedGraphic: '',
  selectedGraphicColor: COLOR_BLACK,
  onGraphicSelected: (optionEvent) =>
    console.log('Graphic Selected Event needs to be handled: ', optionEvent),
  onGraphicColorSelected: (optionEvent) =>
    console.log('Graphic Color Selected Event needs to be handled: ', optionEvent),
};

const GraphicOption = ({ onGraphicSelected, fileName, isSelected }) => {
  return (
    <button type="button" onClick={() => onGraphicSelected(fileName)} className="graphic-option">
      <img src={require(`../../../images/shirt-graphics/${fileName}`)} alt={fileName} />
      {isSelected && <CheckmarkIcon />}
    </button>
  );
};

GraphicOption.propTypes = {
  fileName: PropTypes.string,
  isSelected: PropTypes.bool,
  onGraphicSelected: PropTypes.func,
};

GraphicOption.defaultProps = {
  fileName: '',
  isSelected: false,
  onGraphicSelected: ($event) => console.log('Not implemented', $event),
};

export default GraphicPicker;
