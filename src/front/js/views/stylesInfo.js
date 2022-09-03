import React from "react";

import "../../styles/tattooStyles.css";

import { TattooStyles } from "../component/tattooStyles";

export const StylesInfo = () => {
  return (

      <div className="tattooStyles-container">
        <div className="styles-components">
          <h2 className="styles-title">Styles</h2>
        </div>
        <div className="grid">
          <TattooStyles />
        </div>
      </div>

  );
};