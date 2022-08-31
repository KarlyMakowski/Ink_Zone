import React from "react";

import "../../styles/home.css";

import { Carousel } from "../component/carousel";
import { TattooStyles } from "../component/tattooStyles";

export const Home = () => {
  return (
    <>
      <section className="home-header">
        <Carousel />
      </section>
      <div className="container-fluid">
        <div className="home-tattooStyles">
          <div className="styles-components">
            <h2 className="styles-title">Styles</h2>
          </div>
          <div className="grid">
            <TattooStyles />
          </div>
        </div>
      </div>
    </>
  );
};
