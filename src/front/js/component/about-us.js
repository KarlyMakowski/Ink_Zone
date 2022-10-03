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
                    {" "}
                    We are a group of junior programmers developing and
                    designing a webpage inspired in tattoo styles.{" "}
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="about-item text-center">
                  <i className="fa fa-palette"></i>
                  <h3>WHAT WE DO</h3>
                  <hr />
                  <p>
                    {" "}
                    If you want to get tattoed but you are not quit sure about
                    the style you are looking for, this is the correct place!{" "}
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="about-item text-center">
                  <i className="fa fa-hand-holding-heart"></i>
                  <h3>WHAT YOU GET</h3>
                  <hr />
                  <p>
                    {" "}
                    Decide which is your perfect style, and get in contact with
                    us in order to amplify the available information.{" "}
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
