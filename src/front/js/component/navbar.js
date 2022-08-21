import React from "react";
import { Link } from "react-router-dom";

import logo from "../../img/logo.png";
import { FaHome } from "react-icons/fa";
import { RiSearch2Line } from "react-icons/ri";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark sticky-top p-0">
      <div className="container-fluid justify-content-around">
        <Link to="/" className="navbar-brand fs-1">
          <img
            src={logo}
            alt="ink logo"
            width="60"
            height="70"
            className="m-2"
          />
          Inked Zone
        </Link>
        <form className="search">
          <input className="search-input" type="text" placeholder="Search" />
          <button className="search-btn" type="button">
            <RiSearch2Line />
          </button>
        </form>
        <Link
          to="/login"
          className="btn btn-outline-light btn-lg text-uppercase"
        >
          Zona cliente
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
          <div className="offcanvas-header d-flex align-items-center">
            <FaHome className="fa-2x" />
            <h5 className="offcanvas-title fs-1" id="offcanvasDarkNavbarLabel">
              Home
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body mt-4">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link
                  to="/tattooers"
                  className="nav-link mb-3 active fs-4 float-end text-uppercase"
                  aria-current="page"
                >
                  Conoce a nuestros expertos
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/styles"
                  className="nav-link mb-3 fs-4 float-end text-uppercase"
                >
                  Encuentra tu estilo
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/faq"
                  className="nav-link mb-3 fs-4 float-end text-uppercase"
                >
                  Preguntas frecuentes
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact-us"
                  className="nav-link mb-3 fs-4 float-end text-uppercase"
                >
                  Contacta con nosotros
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/questionnaire"
                  className="nav-link mb-3 fs-4 float-end text-uppercase"
                >
                  Cuestionario
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/signup"
                  className="nav-link mb-3 fs-4 float-end text-uppercase"
                >
                  Regístrate
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
