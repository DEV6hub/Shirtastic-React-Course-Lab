import React from 'react';
import './shirt-preview.css';
import { MEN } from '../../../constants/shirtStyles';
// import ShirtSVGGraphic from '../ShirtSVGGraphic/ShirtSVGGraphic';

const ShirtPreview = () => {
  // TODO: AK: Replace dummy shirt with prop.

  const shirt = {
    id: 2,
    name: '4 Coders',
    description: 'Mens Fine Jersey Short Sleeve',
    price: 14.99,
    image: 'MensShirt-red',
    gender: 'M',
    quantity: 0,
    subtotal: 0,
    graphic: 'graphic1.svg',
    font: "'Montserrat', sans-serif",
    text: 'KEEP CALM AND CODE ON',
    textColor: {
      name: 'green',
      color: '#44A265',
    },
    shirtStyle: 'MensShirt',
    shirtColor: {
      name: 'red',
      color: '#A7386B',
    },
    graphicColor: {
      name: 'white',
      color: '#FFFFFF',
    },
  };

  const shirtFileName =
    shirt.shirtStyle.id === MEN.id ? shirt.shirtColor.menFile : shirt.shirtColor.womenFile;
  const shirtStylePath = shirt.shirtStyle.id === MEN.id ? 'mens' : 'womens';

  // const shirtFileSrc = require(`../../../images/shirts/${shirtStylePath}/${shirtFileName}`);
  console.log('path', shirtStylePath, shirtFileName);
  // const isGraphicSelected = !!shirt.graphic;

  const hasText = !!shirt.text;

  return (
    <div className="shirt-preview">
      <div className="shirt-assets">
        {/* <img className="shirt-image" src={shirtFileSrc} alt={shirt.shirtStyle.id} /> */}
        <img
          className="shirt-image"
          src={require('../../../images/shirts/mens/MensShirt-black.jpg')}
          alt="dsda"
        />
        <div className="svg-graphic">
          <img
            className="graphic-img"
            src={require('../../../images/shirt-graphics/graphic14.svg')}
            alt="shirt graphic"
          />
        </div>
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

export default ShirtPreview;
