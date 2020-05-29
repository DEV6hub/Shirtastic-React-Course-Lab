import React from 'react';
import './graphic-picker.css';
import ColorPicker from '../ColorPicker/ColorPicker';
import { GRAPHICS_COLOR_EVENT, GRAPHICS_EVENT } from '../../../constants/optionEventTypes';
import { COLOR_BLACK } from '../../../constants/colorOptions';
import ShirtGraphics from '../../../constants/shirtDesigns';
import CheckmarkIcon from '../../CheckmarkIcon/CheckmarkIcon';

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
      onColorSelected={(color) =>
        onGraphicColorSelected({ type: GRAPHICS_COLOR_EVENT, data: color })
      }
    />
  </div>
);

GraphicPicker.defaultProps = {
  selectedGraphicColor: COLOR_BLACK,
  onGraphicSelected: (optionEvent) =>
    console.log('Graphic Selected Event needs to be handled: ', optionEvent),
  onGraphicColorSelected: (optionEvent) =>
    console.log('Graphic Color Selected Event needs to be handled: ', optionEvent),
};

const GraphicOption = ({ onGraphicSelected, fileName, isSelected }) => {
  return (
    <button
      type="button"
      onClick={() => onGraphicSelected({ type: GRAPHICS_EVENT, data: fileName })}
      className="graphic-option"
    >
      <img src={require(`../../../images/shirt-graphics/${fileName}`)} alt={fileName} />
      {isSelected && <CheckmarkIcon />}
    </button>
  );
};

export default GraphicPicker;
