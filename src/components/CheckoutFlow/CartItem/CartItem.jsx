import React, { useCallback } from 'react';
import './cart-item.css';

const CartItem = ({ shirt, updateQuantity, remove }) => {
  const onQuantityUpdate = useCallback(
    (event) => {
      const quantity = parseInt(event.target.value, 10);
      shirt.quantity = isNaN(quantity) ? 0 : quantity;

      updateQuantity(shirt);
    },
    [shirt, updateQuantity],
  );

  const genderFolder = shirt.gender === 'M' ? 'mens' : 'womens';

  return (
    <div className="item-container">
      <div className="item-img">
        {shirt.graphic ? (
          <img
            className="img-fluid cart-shirt-graphic-img"
            src={shirt.graphic ? require(`../../../images/shirt-graphics/${shirt.graphic}`) : ''}
            alt="shirt graphic"
          />
        ) : null}
        {shirt.text ? (
          <div
            className="cart-shirt-text-final"
            style={{ color: shirt.textColor.color, fontFamily: shirt.font }}
          >
            {shirt.text}
          </div>
        ) : null}
        <img
          className="img-fluid shirt-in-cart-img"
          src={require(`../../../images/shirts/${genderFolder}/${shirt.image}.jpg`)}
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

export default CartItem;
