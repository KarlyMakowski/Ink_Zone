import React, { useEffect } from "react";

import "../../styles/tattooStyles.css";

import { TattooStyles } from "../component/tattooStyles";

export const StylesInfo = () => {

  useEffect(() => {
    window.scrollTo(0,0);
  })
  
  return (
    <div className="tattooStyles-container">
      <div className="styles-components">
        <h2 className="styles-title">Tattoo styles</h2>
      </div>
      <div className="styles-grid">
        <TattooStyles />
      </div>
    </div>
  );
};
