import React from 'react';
import PropTypes from 'prop-types';
import './Shirt.css';
import { Link } from 'react-router-dom';
import shirtShape from '../Models/shirtShape';
// import PrimaryButton from '../PrimaryButton/PrimaryButton';
import { useShoppingCartContext } from '../../state/contexts/shoppingCartContext';
// import { useOverlayContext } from '../../state/contexts/overlayContext';

import baskedIcon from '../../images/icons/icon-basket.svg';

const Shirt = ({ shirt }) => {
  const { addToCart } = useShoppingCartContext();

  const genderFolder = shirt.gender === 'M' ? 'mens' : 'womens';

  return (
    <div className="shirt-wrapper">
      {shirt.graphic ? (
        <Link to={`/graphic/${shirt.graphic}`}>
          <img
            className="img-fluid shirt-graphic-img"
            src={shirt.graphic ? require(`../../images/shirt-graphics/${shirt.graphic}`) : ''}
            alt="shirt graphic"
          />
        </Link>
      ) : null}
      {shirt.text ? (
        <div
          className="shirt-text-final"
          style={{ color: shirt.textColor.color, fontFamily: shirt.font }}
        >
          {shirt.text}
        </div>
      ) : null}
      <img
        className="img-fluid"
        src={require(`../../images/shirts/${genderFolder}/${shirt.image}.jpg`)}
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
          <img src={baskedIcon} alt="Add to basket" />
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
