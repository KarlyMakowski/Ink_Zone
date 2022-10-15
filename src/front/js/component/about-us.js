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
                  <i className="fa fa-skull"></i>
                  <h3>WHO WE ARE</h3>
                  <hr />
                  <p>
                    We are a group of junior developers designing and creating a
                    website dedicated to tattoo styles.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="about-item text-center">
                  <i className="fa fa-palette"></i>
                  <h3>WHAT WE DO</h3>
                  <hr />
                  <p>
                    Do you want to get tattoed but you're not sure which style
                    you're looking for? We can help you decide!
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="about-item text-center">
                  <i className="fa fa-hand-holding-heart"></i>
                  <h3>WHAT YOU GET</h3>
                  <hr />
                  <p>
                    Choose your favorite style from our list and get in contact
                    with us to get more information and personal tips.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
