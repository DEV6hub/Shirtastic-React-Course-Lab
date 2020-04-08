import React, {useState} from "react";
import Tabs from "../Tabs/Tabs";
import "./shirt-options.css";
import ShirtStyles from "../ShirtStyles/ShirtStyles";
import ColorPicker from "../ColorPicker/ColorPicker";
import {SHIRT_COLOUR_EVENT} from "../../constants/optionEventTypes";
import {COLOR_BLACK, COLOR_WHITE} from "../../constants/colorOptions";
import GraphicPicker from "../GraphicPicker/GraphicPicker";

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

const ShirtOptions = ({onOptionSelected}) => {

  const [tab, setTab] = useState(tabOptions[2].id);

  return <div className="shirt-options">
    <div className="shirt-option-tabs">
      <Tabs tabs={tabOptions} active={tab} onTabClick={tabId => setTab(tabId)} />
    </div>
    <div className="options">
      {tab === tabOptions[0].id && <ShirtStyles onStyleSelected={data => onOptionSelected(data)} />}
      {tab === tabOptions[1].id && <ColorPicker
        title="Choose a shirt color"
        selectedColor={COLOR_WHITE}
        onColorSelected={color => onOptionSelected({type: SHIRT_COLOUR_EVENT, data: color})}
      />}
      {tab === tabOptions[2].id && <GraphicPicker
        selectedGraphic={"graphic1.svg"}
        selectedGraphicColor={COLOR_BLACK}
        onGraphicSelected={event => onOptionSelected(event)}
        onGraphicColorSelected={event => onOptionSelected(event)}
      />}
    </div>
  </div>;
};


const ShirtStyle = ({onStyleSelected}) => {

};

export default ShirtOptions;
