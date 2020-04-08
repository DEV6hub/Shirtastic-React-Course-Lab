import React from "react";
import "./design.css";
import ShirtOptions from "../ShirtOptions/ShirtOptions";
import ShirtPreview from "../ShirtPreview/ShirtPreview";
import {SHIRT_PURPLE} from "../../constants/shirtColorOptions";
import {COLOR_BLUE, COLOR_YELLOW} from "../../constants/colorOptions";
import {FONT_PACIFICO} from "../../constants/fontOptions";
import {WOMEN} from "../../constants/shirtStyles";


/*
props = {
 action={this.state.action}
 shirtToEdit={this.state.shirtToEdit}
 saveShirtDesign={this.saveShirtDesign}
 selectStyle={this.selectStyle}
 selectColor={this.selectColor}
 selectGraphic={this.selectGraphic}
 addShirtText={this.addShirtText}
 changeTextFont={this.changeTextFont}
}
*/

/*
shirtToEdit: {
    name: 'untitled_design',
    price: 18.99,
    quantity: 0,
    subtotal: 0,
    shirtStyle: ShirtStyle,
    shirtColor: COLOR_OPTION,
    text: '',
    textColor: COLOR_OPTION,
    font: "'Montserrat', sans-serif",
    graphic: '',
    graphicColor: COLOR_OPTION,
},
 */

// THIS MOCK SHOULD BE CONTROLLING WHAT IS SET IN THE VISUALS
const mockShirtToEdit = {
  name: 'untitled_design',
  price: 18.99,
  quantity: 0,
  subtotal: 0,
  shirtStyle: WOMEN,
  shirtColor: SHIRT_PURPLE,
  graphic: "graphic4.svg",
  graphicColor: COLOR_BLUE,
  text: 'Hello World',
  font: FONT_PACIFICO.font,
  textColor: COLOR_YELLOW,
};

class Design extends React.Component {

  selectStyle = style => this.props.selectStyle(style);

  selectColor = (color, attribute) => this.props.selectColor(color, attribute);

  selectGraphic = (graphic) => {
    this.props.selectGraphic(graphic);
  };

  addShirtText = text => this.props.addShirtText(text);

  changeTextFont = event => this.props.changeTextFont(event.target.value);

  whenOptionUpdated = (optionEvent) => {
    console.log("Option Event Happened: ", optionEvent);
  };

 render() {
   return <div className="design-shirt">
     <ShirtOptions shirtToEdit={this.props.shirtToEdit} onOptionSelected={this.whenOptionUpdated} />
     <ShirtPreview shirtToEdit={this.props.shirtToEdit} />
   </div>;
 }
}

// THIS is just to set the default MOCK value for now
Design.defaultProps = {
  shirtToEdit: mockShirtToEdit
};

export default Design;
