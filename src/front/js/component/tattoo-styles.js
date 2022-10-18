import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/tattoo-styles.css";

import { Info } from "./info";

export const TattooStyles = () => {
  const { store } = useContext(Context);

  return store.styles.map((singleStyle, i) => {
    return (
      <div className="styles-card-container" key={i}>
        <div className="styles-card">
          <div className="styles-img-box">
            <img src={singleStyle.image} alt="Tattoo Style" />
          </div>
          <div className="styles-card-content">
            <h1 className="styles-card-heading">{singleStyle.style}</h1>
            <Link to={"/styles/private/" + singleStyle.id}>
              <Info />
            </Link>
          </div>
        </div>
      </div>
    );
  });
};
