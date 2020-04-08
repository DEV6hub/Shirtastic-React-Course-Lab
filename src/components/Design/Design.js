import React from "react";
import "./design.css";
import ShirtOptions from "../ShirtOptions/ShirtOptions";
import ShirtPreview from "../ShirtPreview/ShirtPreview";


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


class Design extends React.Component {

  constructor(props) {
    super(props);
  }

  selectStyle = style => this.props.selectStyle(style);

  selectColor = (color, attribute) => this.props.selectColor(color, attribute);

  selectGraphic = (graphic) => {
    this.props.selectGraphic(graphic);
  };

  addShirtText = text => this.props.addShirtText(text);

  changeTextFont = event => this.props.changeTextFont(event.target.value);

  whenOptionUpdated = (optionEvent) => {

  };

 render() {
   return <div className="design-shirt">
     <ShirtOptions onOptionSelected={this.whenOptionUpdated} />
     <ShirtPreview shirtToEdit={this.props.shirtToEdit} />
   </div>;
 }
}

export default Design;
