import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Favs } from "../component/favs";

import "../../styles/tattooStyles.css";

export const TattooStyles = () => {
  const { store, actions } = useContext(Context);

  return store.styles.map((singleStyle, i) => {
    return (
      <div className="styles-card-container" key={i}>
        <div className="fav-btn">
          <Favs />
        </div>
        <div className="styles-card">
          <div className="styles-img-box">
            <img src={singleStyle.image} alt="Tattoo Style" />
          </div>
          <div className="styles-card-content">
            <h1 className="styles-card-heading">{singleStyle.style}</h1>
            <p className="styles-card-text">{singleStyle.information}</p>
          </div>
        </div>
      </div>
    );
  });
};
