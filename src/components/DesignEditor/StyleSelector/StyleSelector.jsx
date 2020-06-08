import React from 'react';
import PropTypes from 'prop-types';

import CheckmarkIcon from '../../CheckmarkIcon/CheckmarkIcon';

import { MEN, WOMEN } from '../../../constants/shirtStyles';
import { SHIRT_WHITE } from '../../../constants/shirtColorOptions';

import './style-selector.css';

const shirtStyles = [MEN, WOMEN];

const StyleSelector = ({ onStyleSelected, selectedStyle, selectedShirtColor }) => {
  return (
    <div className="shirt-styles">
      <div className="shirt-styles">
        <div className="options-heading">Choose a shirt style</div>
        <div className="style-options">
          {shirtStyles.map((style) => (
            <StyleOption
              key={style.id}
              styleOption={style}
              selectedColor={selectedShirtColor}
              isSelected={selectedStyle === style.id}
              onOptionClicked={(styleId) => onStyleSelected(styleId)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

StyleSelector.propTypes = {
  selectedStyle: PropTypes.string,
  selectedShirtColor: PropTypes.shape({
    name: PropTypes.string,
    color: PropTypes.string,
  }),
  onStyleSelected: PropTypes.func,
};

StyleSelector.defaultProps = {
  selectedStyle: MEN.id,
  selectedShirtColor: SHIRT_WHITE,
  onStyleSelected: (e) => console.log('Need to implemented this', e),
};

const StyleOption = ({ styleOption, selectedColor, isSelected, onOptionClicked }) => {
  const folder = styleOption.id === MEN.id ? 'mens' : 'womens';

  const fileName =
    styleOption.id === MEN.id
      ? `${styleOption.id}-${selectedColor.name}`
      : `${styleOption.id}-${selectedColor.name}`;

  return (
    <button
      type="button"
      onClick={() => onOptionClicked(styleOption.id)}
      className="shirt-style-option"
    >
      <div className="shirt-image">
        <img
          src={require(`../../../images/shirts/${folder}/${fileName}.jpg`)}
          alt={styleOption.description}
        />
        {isSelected && <CheckmarkIcon />}
      </div>
      <div className="description">{styleOption.description}</div>
    </button>
  );
};

StyleOption.propTypes = {
  styleOption: PropTypes.shape({
    id: PropTypes.string,
    description: PropTypes.string,
  }),
  selectedColor: PropTypes.shape({
    name: PropTypes.string,
    color: PropTypes.string,
  }),
  isSelected: PropTypes.bool,
  onOptionClicked: PropTypes.func,
};

StyleOption.defaultProps = {
  styleOption: {
    id: '',
    description: '',
  },
  selectedColor: PropTypes.shape({
    name: '',
    color: '',
  }),
  isSelected: false,
  onOptionClicked: ($event) => console.log('not implemented', $event),
};

export default StyleSelector;
