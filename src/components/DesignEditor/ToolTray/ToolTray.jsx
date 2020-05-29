import React, { useState } from 'react';
import Tabs from '../../Tabs/Tabs';
import './tool-tray.css';
import StyleSelector from '../StyleSelector/StyleSelector';
import ColorPicker from '../ColorPicker/ColorPicker';
import { SHIRT_COLOUR_EVENT } from '../../../constants/optionEventTypes';
// import GraphicPicker from "../GraphicPicker/GraphicPicker";
// import ShirtText from "../ShirtText/ShirtText";

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
  const [tab, setTab] = useState(tabOptions[0].id);

  const onOptionSelected = (option) => {
    console.log('kra', option);
  };

  return (
    <div className="shirt-options">
      <div className="shirt-option-tabs">
        <Tabs tabs={tabOptions} active={tab} onTabClick={(tabId) => setTab(tabId)} />
      </div>
      <div className="options">
        {tab === tabOptions[0].id && (
          <StyleSelector
            selectedStyle={shirtToEdit.shirtStyle.id}
            selectedShirtColor={shirtToEdit.shirtColor}
            onStyleSelected={(data) => onOptionSelected(data)}
          />
        )}

        {tab === tabOptions[1].id && (
          <ColorPicker
            title="Choose a shirt color"
            selectedColor={shirtToEdit.shirtColor.colorOption}
            onColorSelected={(color) => onOptionSelected({ type: SHIRT_COLOUR_EVENT, data: color })}
          />
        )}

        {/* {tab === tabOptions[2].id && <GraphicPicker
        selectedGraphic={shirtToEdit.graphic}
        selectedGraphicColor={shirtToEdit.graphicColor}
        onGraphicSelected={event => onOptionSelected(event)}
        onGraphicColorSelected={event => onOptionSelected(event)}
      />} */}

        {/* {tab === tabOptions[3].id && <ShirtText
        selectedTextColor={shirtToEdit.textColor}
        selectedShirtFont={shirtToEdit.font}
        shirtText={shirtToEdit.text}
        onOptionSelected={event => onOptionSelected(event)}
      />} */}
      </div>
    </div>
  );
};

export default ShirtOptions;
