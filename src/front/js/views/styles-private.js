import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

import "../../styles/tattoo-styles.css";

export const StylesPrivate = () => {
  const { store, actions } = useContext(Context);

  const params = useParams();

  useEffect(() => {
    actions.loadSingleStyle(params.id)
  }, [])

  return (
    <>
      <div className="priv-style-title">
        <h1>learn more...</h1>
      </div>
      <div className="container my-5 my-md-0 vh-md-100 d-flex align-items-center justify-content-center" key={store.privateStyle.id}>
        <article className="card overflow-hidden border-0 rounded-3 flex-md-row align-items-center">
          <div className="order-md-2 flex-md-grow-1 w-100">
            <picture>
              <img
                src={store.privateStyle.image}
                alt="style-img"
                className="card-img"
              />
            </picture>
          </div>
          <section className="order-md-1 flex-md-grow-1 w-100">
            <div className="card-body text-center text-md-start text-white">
              <h3 className="card-title priv-style-intro">
                What makes <span className="text-primary">"{store.privateStyle.style}"</span> style special?
              </h3>
              <p className="text-secondary text-md-start priv-style-info">{store.privateStyle.information}
              </p>
            </div>
          </section>
        </article>
      </div>
    </>
  );
};
