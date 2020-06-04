import React, { useState } from 'react';
import Tabs from '../../Tabs/Tabs';
import './tool-tray.css';
import StyleSelector from '../StyleSelector/StyleSelector';
import ColorPicker from '../ColorPicker/ColorPicker';
import {
  STYLE_EVENT,
  SHIRT_COLOUR_EVENT,
  GRAPHICS_EVENT,
  GRAPHICS_COLOR_EVENT,
} from '../../../constants/optionEventTypes';
import GraphicPicker from '../GraphicPicker/GraphicPicker';
import ShirtText from '../ShirtText/ShirtText';
// import { colors } from '../../../constants/colors';

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

// const ShirtOptions = ({ shirtToEdit, onOptionSelected }) => {
const ShirtOptions = ({ shirt, updateShirt }) => {
  const [tab, setTab] = useState(tabOptions[0].id);

  // const onTextSelected = (textData) => {
  //   console.log('text', textData);

  //   switch (textData.type) {
  //     case 'TEXT_EVENT':
  //       setText(textData.data);
  //       break;
  //     case 'TEXT_FONT_EVENT':
  //       setFont(textData.data);
  //       break;
  //     case 'TEXT_COLOR_EVENT':
  //       setTextColor(textData.data);
  //       break;
  //     default:
  //   }
  // };

  // const onOptionSelected = (option) => {
  //   console.log('option', option);
  // };

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
            onOptionSelected={(textData) => updateShirt(textData)}
          />
        )}
      </div>
    </div>
  );
};

export default ShirtOptions;
