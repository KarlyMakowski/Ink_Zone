import React from "react";

import "../../styles/about-us.css";

export const AboutUs = () => {
  return (
    <section className="about-us-container">
      <div className="about-1">
        <h1>ABOUT US</h1>
      </div>
      <div id="about-2">
        <div className="content-box-lg">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="about-item text-center">
                  <i className="fa fa-book"></i>
                  <h3>WHO WE ARE</h3>
                  <hr />
                  <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus optio sectetur minima soluta nulla, alias tenetur doloribus.  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="about-item text-center">
                  <i className="fa fa-globe"></i>
                  <h3>WHAT WE DO</h3>
                  <hr />
                  <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus optio sectetur minima soluta nulla, alias tenetur doloribus.  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="about-item text-center">
                  <i className="fa fa-trophy"></i>
                  <h3>WHAT YOU GET</h3>
                  <hr />
                  <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus optio sectetur minima soluta nulla, alias tenetur doloribus.  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
