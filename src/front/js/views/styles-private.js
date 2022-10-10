import React, { useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/tattoo-styles-priv.css";

import { HiHeart, HiOutlineHeart } from "react-icons/hi";

export const StylesPrivate = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const params = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (store.currentUser === null) {
      navigate("/sign-in");
    } else {
      actions.loadSingleStyle(params.id);
      actions.handleCount(params.id);
    }
  }, []);

  return (
    <>
      <div className="pricing-title">
        <h1>style details</h1>
      </div>
      <div className="private-container">
        <div className="private-card" key={store.privateStyle.id}>
          <div className="private-img">
            <img src={store.privateStyle.image} alt="style-img" />
          </div>
          <div className="private-info">
            <h3 className="private-style-intro">
              What makes{" "}
              <span>"{store.privateStyle.style}"</span>{" "}
              style special?
            </h3>
            <p className="private-style-info">
              {store.privateStyle.information}
            </p>
            <div className="like-dislike">
              {store.addFav === false ? (
                <button
                  className="no-fav"
                  onClick={() => actions.handleFav(params.id)}
                >
                  <HiOutlineHeart className="fav-icon" />
                  LOVE {store.favCount}
                </button>
              ) : (
                <button
                  className="fav"
                  onClick={() => actions.handleFav(params.id)}
                >
                  <HiHeart className="fav-icon" />
                  LOVE {store.favCount}
                </button>
              )}
            </div>
            <div className="go-back">
              <button onClick={() => navigate("/styles")}> ← GO BACK </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
