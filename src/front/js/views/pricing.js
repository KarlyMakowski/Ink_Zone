import React from "react";

import "../../styles/pricing.css";

import { Prices } from "../component/prices";

export const Pricing = () => {
  return (

    <div className="pricing-view">
      <div className="pricing-title">
        <h1>Tattoo pricing</h1>
      </div>
      <div className="price-grid">
        <Prices />
      </div>
    </div>

  );
};