import React from "react";
import "./shirt-preview.css";
import {MEN} from "../../constants/shirtStyles";
import ShirtSVGGraphic from "../ShirtSVGGraphic/ShirtSVGGraphic";


const ShirtPreview = ({shirtToEdit}) => {

  // I think this logic is used somewhere else. Maybe make a utility file to grab and process this type of information
  const shirtFileName = shirtToEdit.shirtStyle.id === MEN.id ? shirtToEdit.shirtColor.menFile : shirtToEdit.shirtColor.womenFile;
  const shirtStylePath = shirtToEdit.shirtStyle.id === MEN.id ? "mens" : "womens";
  const shirtFileSrc = require(`../../images/shirts/${shirtStylePath}/${shirtFileName}`);

  const isGraphicSelected = !!shirtToEdit.graphic;

  const hasText = !!shirtToEdit.text;


  return <div className="shirt-preview">
    <div className="shirt-assets">
      <img className="shirt-image" src={shirtFileSrc} alt={shirtToEdit.shirtStyle.id} />
      {isGraphicSelected && <ShirtSVGGraphic graphic={shirtToEdit.graphic} color={shirtToEdit.graphicColor.color}/>}
      {hasText && <div className="shirt-text" style={{color: shirtToEdit.textColor.color, fontFamily: shirtToEdit.font}}>{shirtToEdit.text}</div>}
    </div>
 </div>;
};
export default ShirtPreview;
