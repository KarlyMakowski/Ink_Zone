import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";

import "../../styles/experts.css";

import { SelectStyle } from "../component/select";
import { ModalGallery } from "../component/modal-gallery"; 

import skull from "../../img/skull-profile.png";

export const Experts = () => {
  const { store } = useContext(Context);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="pricing-title">
        <h1>Experts</h1>
        <div className="select-style">
          <SelectStyle experts={true} />
        </div>
      </div>
      <div className="experts-grid">
        {store.experts?.map((singleExpert, i) => {
          return (
            <div className="experts-container" key={i}>
              <div className="experts-box">
                <img
                  src={
                    singleExpert?.picture == undefined
                      ? skull
                      : singleExpert?.picture
                  }
                  className="experts-pic"
                />
                <h3>{singleExpert?.username}</h3>
                <div className="experts-social-icons">
                  <a
                    href={`https://www.instagram.com/${singleExpert?.instagram}`}
                    className="experts-social experts-social-instagram"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href={`https://twitter.com/${singleExpert?.twitter}`}
                    className="experts-social experts-social-twitter"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    href={`https://www.facebook.com/${singleExpert?.facebook}`}
                    className="experts-social experts-social-facebook"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </div>
                <button
                  type="button"
                  className="text-bg-light"
                  onClick={handleShow}
                >
                  Gallery
                </button>
                <ModalGallery show={show} handleClose={handleClose} /> 
                <div className="experts-bottom">
                  <p>{singleExpert?.description}</p>
                  <span className="badge rounded-pill text-bg-light">
                    # {singleExpert?.styles}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
