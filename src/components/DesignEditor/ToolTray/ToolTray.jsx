import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Tabs from '../../Tabs/Tabs';
import StyleSelector from '../StyleSelector/StyleSelector';
import ColorPicker from '../ColorPicker/ColorPicker';
import GraphicPicker from '../GraphicPicker/GraphicPicker';
import ShirtText from '../ShirtText/ShirtText';

import {
  STYLE_EVENT,
  SHIRT_COLOUR_EVENT,
  GRAPHICS_EVENT,
  GRAPHICS_COLOR_EVENT,
} from '../../../constants/optionEventTypes';

import './tool-tray.css';

const tabOptions = [
  {
    id: 'shirt-style',
    label: 'Styles',
  },
  {
    id: 'shirt-colours',
    label: 'Colours',
  },
  {
    id: 'shirt-graphics',
    label: 'Graphics',
  },
  {
    id: 'shirt-text',
    label: 'Text',
  },
];

const ToolTray = ({ shirt, updateShirt }) => {
  const [tab, setTab] = useState(tabOptions[0].id);

  return (
    <div className="shirt-options">
      <div className="shirt-option-tabs">
        <Tabs
          tabs={tabOptions}
          activeTab={tab}
          activeClassName="active"
          onTabClick={(tabId) => setTab(tabId)}
        />
      </div>
      <div className="options">
        {tab === tabOptions[0].id && (
          <StyleSelector
            selectedStyle={shirt.shirtStyle}
            selectedShirtColor={shirt.shirtColor}
            onStyleSelected={(style) => updateShirt({ type: STYLE_EVENT, data: style })}
          />
        )}
        {tab === tabOptions[1].id && (
          <ColorPicker
            title="Choose a shirt color"
            selectedColor={shirt.shirtColor}
            onColorSelected={(color) => updateShirt({ type: SHIRT_COLOUR_EVENT, data: color })}
          />
        )}
        {tab === tabOptions[2].id && (
          <GraphicPicker
            selectedGraphic={shirt.graphic}
            selectedGraphicColor={shirt.graphicColor}
            onGraphicSelected={(graphic) => {
              updateShirt({ type: GRAPHICS_EVENT, data: graphic });
            }}
            onGraphicColorSelected={(color) =>
              updateShirt({ type: GRAPHICS_COLOR_EVENT, data: color })
            }
          />
        )}
        {tab === tabOptions[3].id && (
          <ShirtText
            selectedTextColor={shirt.textColor}
            selectedShirtFont={shirt.font}
            shirtText={shirt.text}
            onChange={(textData) => updateShirt(textData)}
          />
        )}
      </div>
    </div>
  );
};

ToolTray.propTypes = {
  shirt: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    gender: PropTypes.string,
    quantity: PropTypes.number,
    subtotal: PropTypes.number,
    graphic: PropTypes.string,
    font: PropTypes.string,
    text: PropTypes.string,
    textColor: PropTypes.shape({
      name: PropTypes.string,
      color: PropTypes.string,
    }),
    shirtStyle: PropTypes.string,
    shirtColor: PropTypes.shape({
      name: PropTypes.string,
      color: PropTypes.string,
    }),
    graphicColor: PropTypes.shape({
      name: PropTypes.string,
      color: PropTypes.string,
    }),
  }),
  updateShirt: PropTypes.func,
};

ToolTray.defaultProps = {
  shirt: {
    id: 2,
    name: '4 Coders',
    description: 'Mens Fine Jersey Short Sleeve',
    price: 14.99,
    image: 'MensShirt-red',
    gender: 'M',
    quantity: 0,
    subtotal: 0,
    graphic: 'graphic1.svg',
    font: "'Montserrat', sans-serif",
    text: 'KEEP CALM AND CODE ON',
    textColor: {
      name: 'green',
      color: '#44A265',
    },
    shirtStyle: 'MensShirt',
    shirtColor: {
      name: 'red',
      color: '#A7386A',
    },
    graphicColor: {
      name: 'white',
      color: '#FFFFFF',
    },
  },
  updateShirt: ($event) => console.log('Not implemented', $event),
};

export default ToolTray;
