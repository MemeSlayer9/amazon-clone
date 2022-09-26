import React from "react";
import { useStateValue } from "./StateProvide";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct.js";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          className="checkout-ad"
          alt=""
        />
        {basket?.length === 0 ? (
          <div>
            <h2 className>Empty</h2>
          </div>
        ) : (
          <div>
            <h2 className="checkout-title">Shopping</h2>
            {basket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
        ;
      </div>
      {basket.length > 0 && (
        <div className="checkout-right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
