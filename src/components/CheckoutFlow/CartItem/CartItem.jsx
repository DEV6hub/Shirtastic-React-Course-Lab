import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ShirtSVGGraphic from '../../ShirtSVGGraphic/ShirtSVGGraphic';
import { MEN } from '../../../constants/shirtStyles';
import shirtType from '../../../types/shirt';

import './cart-item.css';

const CartItem = ({ shirt, updateQuantity, remove }) => {
  const onQuantityUpdate = useCallback(
    (event) => {
      const newQuantity = parseInt(event.target.value, 10);

      if (!Number.isNaN(newQuantity)) {
        updateQuantity(shirt, newQuantity);
      } else {
        updateQuantity(shirt, 0);
      }
    },
    [shirt, updateQuantity],
  );

  const stylePath = shirt.shirtStyle === MEN.id ? 'mens' : 'womens';
  const fileName = `${shirt.shirtStyle}-${shirt.shirtColor.name}.jpg`;

  return (
    <div className="item-container">
      <div className="item-img">
        {shirt.graphic && (
          <Link to={`/graphic/${shirt.graphic}`}>
            <ShirtSVGGraphic graphic={shirt.graphic} color={shirt.graphicColor.color} />
          </Link>
        )}
        {shirt.text && (
          <div
            className="cart-shirt-text-final"
            style={{ color: shirt.textColor.color, fontFamily: shirt.font }}
          >
            {shirt.text}
          </div>
        )}
        <img
          className="img-fluid shirt-in-cart-img"
          src={require(`../../../images/shirts/${stylePath}/${fileName}`)}
          alt="shirt in cart"
        />
      </div>
      <div className="item-data">
        <button type="submit" className="btn-close" onClick={remove}>
          X
        </button>
        <h3>
          {shirt.name}
          <span className="small">{shirt.description}</span>
        </h3>

        <select className="form-control form-control-sm size-select">
          <option value="">Select</option>
          <option value="S">Small</option>
          <option value="M">Medium</option>
          <option value="L">Large</option>
        </select>

        <div className="quantity-row">
          <input
            type="text"
            maxLength="3"
            className="form-control form-control-sm quantity"
            value={shirt.quantity}
            onChange={onQuantityUpdate}
          />

          <div className="price">@{shirt.price}</div>
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  shirt: shirtType.isRequired,
  updateQuantity: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

export default CartItem;
