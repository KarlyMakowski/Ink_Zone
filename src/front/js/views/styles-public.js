import React, { useEffect } from "react";

import "../../styles/tattoo-styles.css";

import { TattooStyles } from "../component/tattoo-styles";

export const StylesPublic = () => {

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
