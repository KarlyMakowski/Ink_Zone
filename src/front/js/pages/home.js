import React from "react";

import { TattooStyles } from "../component/tattooStyles.js";
import { Searchbar } from "../component/searchbar.js";
import { Carousel } from "../component/carousel";

import "../../styles/home.css";

export const Home = () => {
  return (
    <div className="home-container container-fluid">
      <section className="home-header container-fluid">
        <Carousel />
      </section>
      <section className="home-tattooStyles container-fluid">
        <h2>Tattoo Styles</h2>
        <TattooStyles />
      </section>
    </div>
  );
};
