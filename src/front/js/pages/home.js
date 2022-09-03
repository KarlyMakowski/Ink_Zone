import React from "react";
import { Link } from "react-router-dom";

import "../../styles/home.css";

/* import video from '../../img/tattoo-bg.mp4' */

export const Home = () => {
  return (
    <div className="home-main">
{/*       <video autoPlay loop muted id="video">
        <source src={video} type="video/mp4" />
      </video> */}
      <div className="home-content">
        <h1>Ink Zone.</h1>
        <p>Find the perfect tattoo.</p>
        <div>
          <Link to='/styles' className="home-btn">Styles</Link>
          <Link to='/sign-up' className="home-btn home-btn-light">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};
