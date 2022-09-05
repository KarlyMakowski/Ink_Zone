import React from "react";

import "../../styles/pricing.css";

import { PriceComp } from "../component/priceComp";

export const Pricing = () => {
    return (
  
        <div className="pricing-view">
          <div className="price-grid">
            <PriceComp />
          </div>
        </div>
  
    );
  };