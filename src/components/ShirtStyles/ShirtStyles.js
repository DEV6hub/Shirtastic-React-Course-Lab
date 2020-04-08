import React from "react";
import ShirtTypes from "../../constants/shirtStyles";
import "./shirt-styles.css";
import {SHIRT_WHITE} from "../../constants/shirtColorOptions";
import * as OptionEvents from "../../constants/optionEventTypes";
import CheckmarkIcon from "../CheckmarkIcon/CheckmarkIcon";

const shirtStyles = [
  ShirtTypes.MEN,
  ShirtTypes.WOMEN
];

const ShirtStyles = ({onStyleSelected, selectedStyle, selectedShirtColor}) => <div className="shirt-styles">
  <div className="options-heading">Choose a shirt style</div>
  <div className="style-options">
    {
      shirtStyles.map(style =>
        <ShirtStyleOption
          key={style.id}
          styleOption={style}
          selectedColor={selectedShirtColor}
          isSelected={selectedStyle === style.id}
          onOptionClicked={(styleId) => onStyleSelected({type: OptionEvents.STYLE_EVENT, data: styleId})}
        />
      )
    }
  </div>
</div>;

ShirtStyles.defaultProps = {
  selectedStyle: ShirtTypes.MEN.id,
  selectedShirtColor: SHIRT_WHITE,
  onStyleSelected: data => console.log('Need to implemented this', data)
};


const ShirtStyleOption = ({styleOption, selectedColor, isSelected, onOptionClicked}) => {
  const folder = styleOption.id === ShirtTypes.MEN.id ? "mens" : "womens";
  const fileName = styleOption.id === ShirtTypes.MEN.id ? selectedColor.menFile : selectedColor.womenFile;
  const shirtImage = require(`../../images/shirts/${folder}/${fileName}`);

  return <button onClick={() => onOptionClicked(styleOption.id)} className="shirt-style-option">
    <div className="shirt-image">
      <img src={shirtImage} alt={styleOption.description} />
      {isSelected && <CheckmarkIcon/>}
    </div>
    <div className="description">{styleOption.description}</div>
  </button>;
};

export default ShirtStyles;