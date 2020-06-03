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

// const shirtToEdit = {
//   id: 2,
//   name: '4 Coders',
//   description: 'Mens Fine Jersey Short Sleeve',
//   price: 14.99,
//   image: 'MensShirt-red',
//   gender: 'M',
//   quantity: 0,
//   subtotal: 0,
//   graphic: 'graphic1.svg',
//   font: "'Montserrat', sans-serif",
//   text: 'KEEP CALM AND CODE ON',
//   textColor: {
//     name: 'green',
//     color: '#44A265',
//   },
//   shirtStyle: 'MensShirt',
//   shirtColor: {
//     name: 'red',
//     color: '#A7386B',
//   },
//   graphicColor: {
//     name: 'white',
//     color: '#FFFFFF',
//   },
// };

// const ShirtOptions = ({ shirtToEdit, onOptionSelected }) => {
const ShirtOptions = ({ shirt, updateShirt }) => {
  // TODO: AK: Convert to useReducer
  const [tab, setTab] = useState(tabOptions[0].id);

  // const [color, setColor] = useState(shirt.shirtColor);
  // const [graphic, setGraphic] = useState(shirt.graphic);
  // const [graphicColor, setGraphicColor] = useState(shirt.graphicColor);
  // const [text, setText] = useState(shirt.text);
  // const [font, setFont] = useState(shirt.font);
  // const [textColor, setTextColor] = useState(shirt.textColor);

  // const onStyleSelected = (newStyle) => {
  //   updateShirt(newStyle);
  // };

  // const onColorSelected = (newColor) => {
  //   setColor(newColor);
  // };

  // const onGraphicSelected = (newGraphic) => {
  //   console.log(newGraphic.data);
  //   setGraphic(newGraphic.data);
  // };

  // const onGraphicColorSelected = (newGraphicColor) => {
  //   console.log(newGraphicColor);
  //   setGraphicColor(newGraphicColor.data);
  // };

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
            onStyleSelected={(data) => updateShirt(data)}
          />
        )}
        {tab === tabOptions[1].id && (
          <ColorPicker
            title="Choose a shirt color"
            selectedColor={shirt.shirtColor}
            onColorSelected={(data) => {
              console.log(data);
              updateShirt(data);
            }}
          />
        )}
        {tab === tabOptions[2].id && (
          <div>graphic</div>
          // <GraphicPicker
          //   selectedGraphic={graphic}
          //   selectedGraphicColor={graphicColor}
          //   onGraphicSelected={onGraphicSelected}
          //   onGraphicColorSelected={onGraphicColorSelected}
          // />
        )}
        {tab === tabOptions[3].id && (
          <div>text</div>
          // <ShirtText
          //   selectedTextColor={textColor}
          //   selectedShirtFont={font}
          //   shirtText={text}
          //   onOptionSelected={(data) => onTextSelected(data)}
          // />
        )}
      </div>
    </div>
  );
};

export default ShirtOptions;
