import React, { useState } from 'react';
import Tabs from '../../Tabs/Tabs';
import './tool-tray.css';
import StyleSelector from '../StyleSelector/StyleSelector';
import ColorPicker from '../ColorPicker/ColorPicker';
import { SHIRT_COLOUR_EVENT } from '../../../constants/optionEventTypes';
import GraphicPicker from '../GraphicPicker/GraphicPicker';
import ShirtText from '../ShirtText/ShirtText';

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

const shirtToEdit = {
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
    color: '#A7386B',
  },
  graphicColor: {
    name: 'white',
    color: '#FFFFFF',
  },
};

// const ShirtOptions = ({ shirtToEdit, onOptionSelected }) => {
const ShirtOptions = () => {
  // TODO: AK: Convert to useReducer
  const [tab, setTab] = useState(tabOptions[0].id);
  const [style, setStyle] = useState(shirtToEdit.shirtStyle);
  const [color, setColor] = useState(shirtToEdit.shirtColor);
  const [graphic, setGraphic] = useState(shirtToEdit.graphic);
  const [graphicColor, setGraphicColor] = useState(shirtToEdit.graphicColor);

  const onStyleSelected = (newStyle) => {
    setStyle(newStyle.data);
  };

  const onColorSelected = (newColor) => {
    setColor(newColor);
  };

  const onGraphicSelected = (newGraphic) => {
    console.log(newGraphic.data);
    setGraphic(newGraphic.data);
  };

  const onGraphicColorSelected = (newGraphicColor) => {
    console.log(newGraphicColor);
    setGraphicColor(newGraphicColor.data);
  };

  const onOptionSelected = (option) => {
    console.log('option', option);
  };

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
            selectedStyle={style}
            selectedShirtColor={shirtToEdit.shirtColor}
            onStyleSelected={(data) => onStyleSelected(data)}
          />
        )}
        {tab === tabOptions[1].id && (
          <ColorPicker
            title="Choose a shirt color"
            selectedColor={color}
            onColorSelected={(data) => onColorSelected(data)}
          />
        )}
        {tab === tabOptions[2].id && (
          <GraphicPicker
            selectedGraphic={graphic}
            selectedGraphicColor={graphicColor}
            onGraphicSelected={onGraphicSelected}
            onGraphicColorSelected={onGraphicColorSelected}
          />
        )}
        {tab === tabOptions[3].id && (
          <ShirtText
            selectedTextColor={shirtToEdit.textColor}
            selectedShirtFont={shirtToEdit.font}
            shirtText={shirtToEdit.text}
            onOptionSelected={(event) => onOptionSelected(event)}
          />
        )}
      </div>
    </div>
  );
};

export default ShirtOptions;
