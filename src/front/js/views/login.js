import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../../styles/index.css";
import "../../styles/login.css";
import image from "../../img/login.jpg"
import {
  FaInstagram,
  FaFacebookSquare,
  FaTwitterSquare,
  FaUserAlt,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

export const Login = () => {
  const [info, setInfo] = useState({ email: "", password: "" });
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = e => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value
    })
  }
  const toogleBtn = () => {
    setShow((prevState) => !prevState);
  };

  return (
    <div className="login-body" style={{ backgroundImage: `url(${image})` }}>
      <div className="container">
        <div className="main-div row w-100 m-auto d-flex justify-content-center align-items-center">
          <div className="col-12 col-lg-6 col-md-8 col-xxl-5">
            <div className="card py-3 px-2 border border-success">
              <p className="text-center my-3 pb-2 fs-2 text-uppercase">
                <span>conéctate desde</span>
              </p>
              <div className="row mx-auto">
                <div className="col-4">
                  <a href="https://twitter.com/">
                    <FaTwitterSquare className="fa mx-auto twitter" />
                  </a>
                </div>
                <div className="col-4">
                  <a href="https://www.facebook.com/">
                    <FaFacebookSquare className="fa mx-auto fb" />
                  </a>
                </div>
                <div className="col-4">
                  <a href="https://www.instagram.com/">
                    <FaInstagram className="fa mx-auto instagram" />
                  </a>
                </div>
                <div className="division">
                  <div className="row">
                    <div className="col-6 mx-auto pt-1 pb-1">
                      <span className="main-heading fs-4 text-uppercase">
                        o entra con
                      </span>
                    </div>
                  </div>
                </div>
                <form className="form mt-1" onSubmit={handleSubmit}>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Usuario"
                      id="floatingInput"
                      autoComplete="off"
                      value={info.email}
                      onChange={handleChange}
                    />
                    <label className="floatingInput">Usuario</label>
                  </div>
                  <div className="form-floating mb-3 d-flex">
                    <input
                      type={!show ? "password" : "text"}
                      className="form-control"
                      name="password"
                      id="floatingInput"
                      placeholder="Contraseña"
                      value={info.password}
                      onChange={handleChange}
                    />
                    <label
                      className="floatingPassword"
                    >
                      Contraseña
                    </label>
                    <div className="form-control icon" onClick={toogleBtn}>
                      {show ? (
                        <FaEyeSlash className="fa-2x svg" />
                      ) : (
                        <FaEye className="fa-2x svg" />
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-12 left">
                      <div className="form-group form-check mt-2">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name=""
                        />
                        <label className="form-check-label"> Recordarme</label>
                      </div>
                    </div>
                    <div className="col-md-6 col-12 mt-2 right">
                      <Link to="/signup" className="bn">
                        Regístrate
                      </Link>
                    </div>
                  </div>
                  <div className="text-center mt-4 pb-2">
                    <Link to="/forgot-password" className="forgot">
                      ¿Olvidaste la contraseña?
                    </Link>
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
    </div>
  );
};
