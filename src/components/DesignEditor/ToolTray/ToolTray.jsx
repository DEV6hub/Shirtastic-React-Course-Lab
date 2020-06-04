import React, { useState } from 'react';

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

const ShirtOptions = ({ shirt, updateShirt }) => {
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

export default ShirtOptions;
