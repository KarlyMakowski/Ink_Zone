import React from "react";
import { Link } from "react-router-dom";

import "../../styles/tattooStyles.css";
import Image1 from "../../img/Neotraditional.jpeg";
import { FaHeart } from "react-icons/fa";

export const TattooStyles = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="image">
          <img src={Image1} alt="Neotraditional Sketch" />
          <div className="details">
            <h2>
              <span>Neo-traditional</span> style
            </h2>
            <p>
              Typically, a Neo-traditional tattoo features bold lines, an
              illustrative look, highly saturated modern colors, and a feeling
              of dimension without being exaggerated or 3D
            </p>
            <div className="like">
              <Link to="/favourites">
                <FaHeart />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={Image1} alt="Neotraditional Sketch" />
        <div className="details">
          <h2>
            <span>Neo-traditional</span> style
          </h2>
          <p>
            Typically, a Neo-traditional tattoo features bold lines, an
            illustrative look, highly saturated modern colors, and a feeling of
            dimension without being exaggerated or 3D
          </p>
          <div className="like">
            <Link to="/favourites">
              <FaHeart />
            </Link>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={Image1} alt="Neotraditional Sketch" />
        <div className="details">
          <h2>
            <span>Neo-traditional</span> style
          </h2>
          <p>
            Typically, a Neo-traditional tattoo features bold lines, an
            illustrative look, highly saturated modern colors, and a feeling of
            dimension without being exaggerated or 3D
          </p>
          <div className="like">
            <Link to="/favourites">
              <FaHeart />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
