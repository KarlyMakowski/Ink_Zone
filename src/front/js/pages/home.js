import React from "react";

import { TattooStyles } from "../component/tattooStyles.js";
import { Searchbar } from "../component/searchbar.js";
import { Carousel } from "../component/carousel";

import "../../styles/home.css";

export const Home = () => {
  return (
    <div className="d-flex home-margin">
      <div className="home">
        <div>
          <Carousel />
        </div>
        <div className="mt-3 d-flex">
          <h2 className="text-start styles-title pt-5">Tattoo Styles</h2>
          <div className="home-searchbar">
            <Searchbar />
          </div>
        </div>
        <TattooStyles />
      </div>
    </div>
  );
};
