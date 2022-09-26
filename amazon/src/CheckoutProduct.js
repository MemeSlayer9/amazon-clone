import React from "react";
import "./CheckoutProduct.css";
import { Star } from "@material-ui/icons";
import { useStateValue } from "./StateProvide";

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();

  console.log(id, image, title, price, rating);

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct-image" />
      <div className="checkoutProduct-info">
        <p className="checkoutProduct-title">{title}</p>
        <p className="checkoutProduct-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct-rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <Star className="star" />
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove Basket</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
