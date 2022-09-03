import React from "react";

import "../../styles/home.css";

import { Carousel } from "../component/carousel";

export const Home = () => {
  return (
    <>
      <section className="home-header">
        <Carousel />
      </section>
    </>
  );
};
