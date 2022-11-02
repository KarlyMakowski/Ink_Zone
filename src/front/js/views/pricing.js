import React, { useEffect } from "react";

import "../../styles/pricing.css";

import { Prices } from "../component/prices";

export const Pricing = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="pricing-view">
        <div className="pricing-title">
          <h1>Tattoo pricing</h1>
        </div>
        <div className="price-grid">
          <Prices />
        </div>
      </div>
      <p className="clarification">
        * These prices may change depending on tattooer rates
      </p>
    </>
  );
};
