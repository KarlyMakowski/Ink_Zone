import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/experts.css";

export const Experts = () => {
  const { store } = useContext(Context);

    return (
      <>
        <div className="pricing-title">
          <h1>Experts</h1>
        </div>
        {store.experts.map((singleExpert, i) => {
          return (
            <div className="experts-container" key={i}>
            <div className="experts-box">
              <img
                src={singleExpert.picture}
                className="experts-pic"
              />
              <h3>{singleExpert.username}</h3>
              <p>Tattooer at Ink Zone, Madrid</p>
  
              <div className="experts-social-icons">
                <a href="#" className="experts-social experts-social-instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="experts-social experts-social-twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="experts-social experts-social-facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </div>
  
              <button
                type="button"
                className="text-bg-light"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Gallery
              </button>
  
              {/*           <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      ...
                    </div>
                  </div>
                </div>
              </div> */}
  
              <div className="experts-bottom">
                <p>
                {singleExpert.description}
                </p>
                <span className="badge rounded-pill text-bg-light">
                {singleExpert.styles}
                </span>
              </div>
            </div>
          </div>
          )

        })}
      </>
    );
};
