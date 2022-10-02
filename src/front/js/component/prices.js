import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/pricing.css";

export const Prices = () => {
  const { store } = useContext(Context);

  return store.prices.map((singlePrice, i) => {
    return (
      <div className="pricing-container" key={i}>
        <div className="pricing-card">
          <h3 className="pricing-category">{singlePrice.category}</h3>
          <img src={singlePrice.image} alt="Type of tattoo" />
          <span className="divider"></span>
          <h4 className="price">{singlePrice.price} €*</h4>
          <p>{singlePrice.size}</p>
          <p>{singlePrice.what_does_include}</p>
          <p>{singlePrice.type_of_tattoo}</p>
          <Link to="/contact-us" className="pricing-btn">
            Contact us
          </Link>
        </div>
      </div>
    );
  });
};
