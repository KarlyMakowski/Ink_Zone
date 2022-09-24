import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

import "../../styles/tattoo-styles.css";

export const StylesPrivate = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="priv-style-title">
        <h1>learn more...</h1>
      </div>
      <div className="container my-5 my-md-0 vh-md-100 d-flex align-items-center justify-content-center">
        <article className="card overflow-hidden border-0 rounded-3 flex-md-row align-items-center">
          <div className="order-md-2 flex-md-grow-1 w-100">
            <picture>
              <source srcSet="" type="image/jpg" media="(max-width: 599px)" />
              <source srcSet="" type="image/jpg" media="(min-width: 600px)" />
              <img
                src="https://i.pinimg.com/originals/bd/ae/df/bdaedfccaeea092f0b9284033b27dad4.jpg"
                alt="style-img"
                className="card-img"
              />
            </picture>
          </div>
          <section className="order-md-1 flex-md-grow-1 w-100">
            <div className="card-body text-center text-md-start text-white">
              <h3 className="card-title priv-style-intro">
                What makes <span className="text-primary">"neo tradicional"</span> style special?
              </h3>
              <p className="text-secondary text-md-start priv-style-info">
              They are easily recognized by their vibrant colors, degradês, irreverent themes, and intentional disproportions. Generally, a cartoonish look is present, the customization is abundant and the theme is somewhat wild and creative.
              </p>
            </div>
          </section>
        </article>
      </div>
    </>
  );
};
