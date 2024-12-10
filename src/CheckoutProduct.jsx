import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

const CheckoutProduct = ({ id, image, title, price, rating }) => {
  const [, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // Dispatch an action to remove the item from the basket
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id, // Use the item's id to identify it in the basket
    });
  };

  return (
    <div className="checkout-product">
      <img src={image} className="checkout-product-image" alt="" />

      <div className="checkout-product-info">
        <p className="checkout-product-title">{title}</p>
        <p className="checkout-product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkout-product-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>

      <button onClick={removeFromBasket} className="checkout-product-btn">
        Remove from Basket
      </button>
    </div>
  );
};

export default CheckoutProduct;
