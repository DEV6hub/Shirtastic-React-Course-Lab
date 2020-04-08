import React from "react";
import "./shirt-preview.css";

const ShirtPreview = ({shirtToEdit}) => <div className="shirt-preview">
Shirt Preview
  {console.log("This will be the shirt to edit: ", shirtToEdit)}
</div>;

export default ShirtPreview;
