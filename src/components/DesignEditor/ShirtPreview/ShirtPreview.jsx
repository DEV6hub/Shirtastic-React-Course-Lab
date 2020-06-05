import React from 'react';

import ShirtSVGGraphic from '../../ShirtSVGGraphic/ShirtSVGGraphic';

import shirtType from '../../../types/shirt';

import { MEN } from '../../../constants/shirtStyles';

import './shirt-preview.css';

const ShirtPreview = ({ shirt }) => {
  const stylePath = shirt.shirtStyle === MEN.id ? 'mens' : 'womens';
  const fileName = `${shirt.shirtStyle}-${shirt.shirtColor.name}.jpg`;

  const isGraphicSelected = !!shirt.graphic;
  const hasText = !!shirt.text;

  return (
    <div className="shirt-preview">
      <div className="shirt-assets">
        <img
          className="shirt-image"
          src={require(`../../../images/shirts/${stylePath}/${fileName}`)}
          alt="Shirt"
        />
        {isGraphicSelected && (
          <ShirtSVGGraphic graphic={shirt.graphic} color={shirt.graphicColor.color} />
        )}
        {hasText && (
          <div
            className="shirt-text"
            style={{ color: shirt.textColor.color, fontFamily: shirt.font }}
          >
            {shirt.text}
          </div>
        )}
      </div>
    </div>
  );
};

ShirtPreview.propTypes = shirtType.isRequired;

export default ShirtPreview;
