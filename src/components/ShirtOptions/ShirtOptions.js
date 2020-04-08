import React, {useState} from "react";
import Tabs from "../Tabs/Tabs";
import "./shirt-options.css";
import ShirtStyles from "../ShirtStyles/ShirtStyles";
import ColorPicker from "../ColorPicker/ColorPicker";
import {SHIRT_COLOUR_EVENT} from "../../constants/optionEventTypes";
import GraphicPicker from "../GraphicPicker/GraphicPicker";
import ShirtText from "../ShirtText/ShirtText";

const tabOptions = [
  {
    id: "shirt-style",
    text: "Styles"
  },
  {
    id: "shirt-colours",
    text: "Colours"
  },
  {
    id: "shirt-graphics",
    text: "Graphics"
  },
  {
    id: "shirt-text",
    text: "Text"
  },
];

const ShirtOptions = ({shirtToEdit, onOptionSelected}) => {

  const [tab, setTab] = useState(tabOptions[0].id);

  return <div className="shirt-options">
    <div className="shirt-option-tabs">
      <Tabs tabs={tabOptions} active={tab} onTabClick={tabId => setTab(tabId)} />
    </div>
    <div className="options">
      {tab === tabOptions[0].id && <ShirtStyles
        selectedStyle={shirtToEdit.shirtStyle.id}
        selectedShirtColor={shirtToEdit.shirtColor}
        onStyleSelected={data => onOptionSelected(data)}
      />}
      {tab === tabOptions[1].id && <ColorPicker
        title="Choose a shirt color"
        selectedColor={shirtToEdit.shirtColor.colorOption}
        onColorSelected={color => onOptionSelected({type: SHIRT_COLOUR_EVENT, data: color})}
      />}
      {tab === tabOptions[2].id && <GraphicPicker
        selectedGraphic={shirtToEdit.graphic}
        selectedGraphicColor={shirtToEdit.graphicColor}
        onGraphicSelected={event => onOptionSelected(event)}
        onGraphicColorSelected={event => onOptionSelected(event)}
      />}
      {tab === tabOptions[3].id && <ShirtText
        selectedTextColor={shirtToEdit.textColor}
        selectedShirtFont={shirtToEdit.font}
        shirtText={shirtToEdit.text}
        onOptionSelected={event => onOptionSelected(event)}
      />}
    </div>
  </div>;
};

export default ShirtOptions;
