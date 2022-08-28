import React from "react";

import "../../styles/home.css";

import { TattooStyles } from "../component/tattooStyles.js";
import { Searchbar } from "../component/searchbar.js";
import { Carousel } from "../component/carousel";

export const Home = () => {
  return (
    <>
      <section className="home-header">
        <Carousel />
      </section>
      <div className="home-tattooStyles">
        <div className="container-styles">
          <div className="styles-components">
            <p className="search-style-expert">
              <Searchbar />
            </p>
            <h2 className="styles-title">Styles</h2>
          </div>
          <TattooStyles />
        </div>
      </div>
    </>
  );
};
