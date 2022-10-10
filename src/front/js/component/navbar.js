import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/navbar.css";

import logo from "../../img/ink-zone.png";

import { FaHome } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";
import { HiCurrencyEuro, HiQuestionMarkCircle, HiUserCircle } from "react-icons/hi";
import { RiWechatFill } from "react-icons/ri";
import { GiDeathZone } from "react-icons/gi";
import { FiLogOut, FiLogIn } from "react-icons/fi";

export const Navbar = () => {
  const { actions, store } = useContext(Context);
  const navigate = useNavigate();

  const [expanded, setExpanded] = useState(false);

  const itsExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={
        expanded
          ? "side-nav-container"
          : "side-nav-container side-nav-container-NX"
      }
    >
      <div className="nav-upper">
        <div className="nav-heading">
          {expanded && (
            <div className="nav-brand">
              <img src={logo} alt="Ink Zone Brand Logo" />
            </div>
          )}
          <button
            className={
              expanded
                ? "hamburguer hamburguer-in"
                : "hamburguer hamburguer-out"
            }
            onClick={itsExpanded}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className="nav-menu">
          <Link
            to="/"
            className={expanded ? "menu-item" : "menu-item menu-item-NX"}
          >
            <FaHome
              style={{ height: "57px", width: "35px" }}
              className="nav-icon"
            />
            {expanded && <p className="nav-views">home</p>}
            {!expanded && <div className="tooltip">home</div>}
          </Link>
          <Link
            to="/styles"
            className={expanded ? "menu-item" : "menu-item menu-item-NX"}
          >
            <IoIosColorPalette
              style={{ height: "57px", width: "35px" }}
              className="nav-icon"
            />
            {expanded && <p className="nav-views">find your style</p>}
            {!expanded && <div className="tooltip">styles</div>}
          </Link>
          <Link
            to="/prices"
            className={expanded ? "menu-item" : "menu-item menu-item-NX"}
          >
            <HiCurrencyEuro
              style={{ height: "57px", width: "35px" }}
              className="nav-icon"
            />
            {expanded && <p className="nav-views">prices</p>}
            {!expanded && <div className="tooltip">prices</div>}
          </Link>
          <Link
            to="/faq"
            className={expanded ? "menu-item" : "menu-item menu-item-NX"}
          >
            <HiQuestionMarkCircle
              style={{ height: "57px", width: "35px" }}
              className="nav-icon"
            />
            {expanded && <p className="nav-views">faq</p>}
            {!expanded && <div className="tooltip">faq</div>}
          </Link>
          <Link
            to="/contact-us"
            className={expanded ? "menu-item" : "menu-item menu-item-NX"}
          >
            <RiWechatFill
              style={{ height: "57px", width: "35px" }}
              className="nav-icon"
            />
            {expanded && <p className="nav-views">contact us</p>}
            {!expanded && <div className="tooltip">contact</div>}
          </Link>
          <Link
            to="/profile"
            className={expanded ? "menu-item" : "menu-item menu-item-NX"}
          >
            <GiDeathZone
              style={{ height: "57px", width: "35px" }}
              className="nav-icon"
            />
            {expanded && <p className="nav-views">profile</p>}
            {!expanded && <div className="tooltip">profile</div>}
          </Link>
        </div>
      </div>
      <div className="nav-footer">
        {!store.token ? (
          <Link to="/sign-in" className={expanded ? "menu-item" : "menu-item menu-item-NX"}>
            <HiUserCircle
              style={{ height: "57px", width: "40px" }}
              className="log-in-icon"
            />
            {expanded && <p className="nav-views">Log In</p>}
            {!expanded && <div className="tooltip">Log In</div>}
          </Link>
        ) : (
          <span className={expanded ? "menu-item log-out" : "menu-item menu-item-NX log-out"} onClick={() => actions.logout(navigate)}>
            <FiLogOut
              style={{ height: "57px", width: "30px" }}
              className="log-out-icon"
            />
            {expanded && <p className="nav-views">Log Out</p>}
            {!expanded && <div className="tooltip">Log Out</div>}
          </span>
        )}
      </div>
    </div>
  );
};
