import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/index.css";
import "../../styles/login.css";
import { FaInstagram, FaFacebookSquare, FaTwitterSquare, FaUserAlt, FaEye, FaEyeSlash } from "react-icons/fa";

export const Login = () => {

    const [show, setShow] = useState(false);
    
    const toogleBtn = () => {
       setShow(prevState => !prevState)
    }

  return (
    <div className="container">
      <div className="main-div row w-100 d-flex justify-content-center align-items-center">
        <div className="col-12 col-lg-6 col-md-8 col-xxl-5">
          <div className="card py-3 px-2 border border-success">
            <p className="text-center my-3 pb-2 fs-4 text-capitalize">
              <span>connect with</span>
            </p>
            <div className="row mx-auto">
              <div className="col-4">
                <Link to="https://twitter.com/">
                  <FaTwitterSquare className="fa mx-auto twitter" />
                </Link>
              </div>
              <div className="col-4">
                <Link to="https://www.facebook.com/">
                  <FaFacebookSquare className="fa mx-auto fb" />
                </Link>
              </div>
              <div className="col-4">
                <Link to="https://www.instagram.com/">
                  <FaInstagram className="fa mx-auto instagram" />
                </Link>
              </div>
              <div className="division">
                <div className="row">
                  <div className="col-6 mx-auto">
                    <span className="main-heading fs-2 text-capitalize"> login form</span>
                  </div>
                </div>
              </div>
              <form className="form">
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Usuario"
                  />
                </div>
                <div className="mb-3 d-flex">
                  <input
                    type={!show ? "password" : "text"}
                    className="form-control"
                    placeholder="Contraseña"
                  />
                  <span className="form-control icon" onClick={toogleBtn}>
                    {show ? <FaEyeSlash />:
                    <FaEye/>
                    }
                    </span>
                </div>
                <div className="row">
                  <div className="col-md-6 col-12 left">
                    <div className="form-group form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        name=""
                      />
                      <label for="form-check-label"> Recordarme</label>
                    </div>
                  </div>
                  <div className="col-md-6 col-12 right">
                    <Link to="/signup" className="bn">
                      Regístrate
                    </Link>
                  </div>
                </div>

                <div className="my-3 mt-4 d-flex justify-content-center">
                  <button
                    type="button"
                    className="login-btn btn btn-block btn-light"
                  >
                    <small>
                      <FaUserAlt className="pr-2 me-1" /> Entrar
                    </small>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
