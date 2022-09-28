import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/tattoo-styles-priv.css";

import { RiHeartFill, RiDislikeFill } from "react-icons/ri";

import { Review } from "../component/user-reviews";

export const StylesPrivate = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const params = useParams();

  const [like, setLike] = useState(0);
  const [likeActive, setLikeActive] = useState(false);

  const likes = () => {
    const userLikes = likeActive;
    setLikeActive(!userLikes);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    actions.loadSingleStyle(params.id);
  }, []);

  useEffect(() => {
    actions.handleFav();
  }, [likeActive]);

  return (
    <>
      <div className="private-title">
        <h1>learn more...</h1>
      </div>
      <div className="private-container">
        <div className="private-card" key={store.privateStyle.id}>
          <div className="private-img">
            <img src={store.privateStyle.image} alt="style-img" />
          </div>
          <div className="private-info">
            <h3 className="private-style-intro">
              What makes{" "}
              <span className="text-primary">"{store.privateStyle.style}"</span>{" "}
              style special?
            </h3>
            <p className="private-style-info">
              {store.privateStyle.information}
            </p>
            <div className="like-dislike">
              <button className="private-fav" onClick={likes}><RiHeartFill className ="fav-icon"/>Love! {like}</button>
            </div>
            <div className="go-back">
              <button onClick={() => navigate("/styles")}> ⇦ GO BACK </button>
            </div>
          </div>
        </div>
      </div>
      {/*       <Review /> */}
    </>
  );
};
