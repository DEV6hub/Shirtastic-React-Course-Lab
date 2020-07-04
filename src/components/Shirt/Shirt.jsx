import React from 'react';
import PropTypes from 'prop-types';
import './Shirt.css';
import { Link } from 'react-router-dom';
import shirtShape from '../Models/shirtShape';
import ShirtSVGGraphic from '../ShirtSVGGraphic/ShirtSVGGraphic';
import { useShoppingCartContext } from '../../state/contexts/shoppingCartContext';

import { MEN } from '../../constants/shirtStyles';

import basketIcon from '../../images/icons/icon-basket.svg';

const Shirt = ({ shirt }) => {
  const { addToCart } = useShoppingCartContext();

  const stylePath = shirt.shirtStyle === MEN.id ? 'mens' : 'womens';
  const fileName = `${shirt.shirtStyle}-${shirt.shirtColor.name}.jpg`;

  return (
    <div className="shirt-wrapper">
      {shirt.graphic && (
        <Link to={`/graphic/${shirt.graphic}`}>
          <ShirtSVGGraphic graphic={shirt.graphic} color={shirt.graphicColor.color} />
        </Link>
      )}
      {shirt.text && (
        <div
          className="shirt-text-final"
          style={{ color: shirt.textColor.color, fontFamily: shirt.font }}
        >
          {shirt.text}
        </div>
      )}
      <img
        className="img-fluid"
        src={require(`../../images/shirts/${stylePath}/${fileName}`)}
        alt="Shirt"
      />

      <h4 className="card-title text-center">{shirt.name}</h4>
      <p className="description text-center">{shirt.description}</p>

      <div className="controls-container">
        {
          // TODO AK: Refactor Button to be able to render with various styles.
        }
        <button
          className="button-with-icon"
          type="button"
          onClick={() => {
            addToCart(shirt);
          }}
        >
          <img src={basketIcon} alt="Add to basket" />
        </button>

        <div className="control price">
          <strong>${shirt.price}</strong>
        </div>

        <Link to={`/design/${shirt.id}`} className="control edit" />
      </div>
    </div>
  );
};

Shirt.propTypes = {
  shirt: PropTypes.shape(shirtShape).isRequired,
};

export default Shirt;
