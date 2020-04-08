import React, {useState} from "react";
import Tabs from "../Tabs/Tabs";
import "./shirt-options.css";
import ShirtStyles from "../ShirtStyles/ShirtStyles";
import ColorPicker from "../ColorPicker/ColorPicker";
import {SHIRT_COLOUR_EVENT} from "../../constants/optionEventTypes";
import {COLOR_BLACK, COLOR_BLUE, COLOR_PURPLE, COLOR_WHITE} from "../../constants/colorOptions";
import GraphicPicker from "../GraphicPicker/GraphicPicker";
import {MEN} from "../../constants/shirtStyles";
import {SHIRT_PURPLE, SHIRT_WHITE} from "../../constants/shirtColorOptions";
import ShirtText from "../ShirtText/ShirtText";
import {FONT_PACIFICO} from "../../constants/fontOptions";

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

  const [tab, setTab] = useState(tabOptions[3].id);

  return <div className="shirt-options">
    <div className="shirt-option-tabs">
      <Tabs tabs={tabOptions} active={tab} onTabClick={tabId => setTab(tabId)} />
    </div>
    <div className="options">
      {tab === tabOptions[0].id && <ShirtStyles
        onStyleSelected={data => onOptionSelected(data)}
        selectedStyle={MEN.id}
        selectedShirtColor={SHIRT_PURPLE}
      />}
      {tab === tabOptions[1].id && <ColorPicker
        title="Choose a shirt color"
        selectedColor={COLOR_PURPLE}
        onColorSelected={color => onOptionSelected({type: SHIRT_COLOUR_EVENT, data: color})}
      />}
      {tab === tabOptions[2].id && <GraphicPicker
        selectedGraphic={"graphic4.svg"}
        selectedGraphicColor={COLOR_BLACK}
        onGraphicSelected={event => onOptionSelected(event)}
        onGraphicColorSelected={event => onOptionSelected(event)}
      />}
      {tab === tabOptions[3].id && <ShirtText
        selectedTextColor={COLOR_BLACK}
        selectedShirtFont={FONT_PACIFICO.font}
        shirtText={"Hello"}
        onOptionSelected={event => onOptionSelected(event)}
      />}
    </div>
  </div>;
};


const ShirtStyle = ({onStyleSelected}) => {

};

export default ShirtOptions;
