import React from "react";
import { Link } from "react-router-dom";

import logo from "../../img/logo.png";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark fixed-top p-0">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand fs-1">
          <img
            src={logo}
            alt="ink logo"
            width="60"
            height="70"
            className="m-2"
          />
          Sphynx Inked
        </Link>
        <Link to="/login" type="button" className="btn btn-outline-light btn-lg ms-auto ">
          Entrar
        </Link>
        <Link to="/signup" type="button" className="btn btn-outline-light btn-lg mx-4 ">
          Crear cuenta
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end text-bg-dark"
          tabIndex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5
              className="offcanvas-title mb-4 fs-1"
              id="offcanvasDarkNavbarLabel"
            >
              ¡CONÓCENOS!
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link
                  to="/tattooers"
                  className="nav-link mb-4 active fs-4"
                  aria-current="page"
                >
                  Pregunta al Experto
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/styles" className="nav-link mb-4 fs-4">
                  Encuentra tu Estilo
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/questionnaire" className="nav-link mb-4 fs-4">
                  Cuestionario
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2 mt-5 fs-3"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-light btn-lg mt-5" type="submit">
                Buscar
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};
