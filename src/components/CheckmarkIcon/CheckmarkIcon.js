import React from "react";
import "./checkmark.css";
import PropTypes from "prop-types";


const CheckmarkIcon = ({iconSize}) => {
  const fontRemSize = iconSize/16 + "rem";
  return <div className="checkmark-icon" style={{fontSize: fontRemSize}}>
      &#10003;
  </div>;
};

CheckmarkIcon.defaultProps = {
  iconSize: 16
};

CheckmarkIcon.propTypes = {
  iconSize: PropTypes.number
};

export default CheckmarkIcon;
