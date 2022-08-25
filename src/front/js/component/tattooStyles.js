import React from "react";

import "../../styles/tattooStyles.css";
import Image1 from "../../img/realism.jpg";
import Image2 from "../../img/Neotraditional.jpg";
import Image3 from "../../img/japanese.jpg";
import Image4 from "../../img/oldSchool.jpg";

export const TattooStyles = () => {
  return (
    <div className="container">
      <div className="cards grid">
      <div className="card">
          <div className="img-box">
            <img src={Image1} alt="Neotraditional Sketch" />
          </div>
          <div className="card-content">
            <h1 className="card-heading">Realism</h1>
            <p className="card-text">Realism tattoos are an art style that 
            results in tattoos that are like a photograph or a real-life 3D object. 
            They're great for doing portraits of people or animals, close-ups...</p>
          </div>
        </div>

        <div className="card">
          <div className="img-box">
            <img src={Image2} alt="Neotraditional Sketch" />
          </div>
          <div className="card-content">
            <h1 className="card-heading">Neo traditional</h1>
            <p className="card-text">Its techniques involve deeper dimensions and a 
            variety of line widths and colors. 
            Because of modern techniques, Neo-traditional tattoos also take on a more 
            3-dimensional appearance.</p>
          </div>
        </div>

        <div className="card">
          <div className="img-box">
            <img src={Image3} alt="Neotraditional Sketch" />
          </div>
          <div className="card-content">
            <h1 className="card-heading">Japanese</h1>
            <p className="card-text">The process of Japanese tattooing is known as Irezumi 
            and can be done using non-electrical tools (Tebori technique) 
            or the mainstream tattoo needle.</p>
          </div>
        </div>

        <div className="card">
          <div className="img-box">
            <img src={Image4} alt="Neotraditional Sketch" />
          </div>
          <div className="card-content">
            <h1 className="card-heading">Old School</h1>
            <p className="card-text">A tattoo style featuring bold black outlines 
            and a limited color palette, with common motifs influenced by sailor tattoos.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
