import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../../styles/navbar.css";

import logo from "../../img/ink-zone.png";

import { FaHome, FaTeamspeak, FaRegMoneyBillAlt } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { GiDeathZone } from "react-icons/gi";
import { BsFillPaletteFill, BsChatDotsFill } from "react-icons/bs";
import { GoOctoface } from "react-icons/go";
import { CgLogOut } from "react-icons/cg";

export const Navbar = () => {
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
            <BsFillPaletteFill
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
            <FaRegMoneyBillAlt
              style={{ height: "57px", width: "35px" }}
              className="nav-icon"
            />
            {expanded && <p className="nav-views">prices</p>}
            {!expanded && <div className="tooltip">prices</div>}
          </Link>
          <Link
            to="/contact-us"
            className={expanded ? "menu-item" : "menu-item menu-item-NX"}
          >
            <FaTeamspeak
              style={{ height: "57px", width: "35px" }}
              className="nav-icon"
            />
            {expanded && <p className="nav-views">contact us</p>}
            {!expanded && <div className="tooltip">contact</div>}
          </Link>
          <Link
            to="/faq"
            className={expanded ? "menu-item" : "menu-item menu-item-NX"}
          >
            <BsChatDotsFill
              style={{ height: "57px", width: "35px" }}
              className="nav-icon"
            />
            {expanded && <p className="nav-views">faq</p>}
            {!expanded && <div className="tooltip">faq</div>}
          </Link>
          <Link
            to="/sign-up"
            className={expanded ? "menu-item" : "menu-item menu-item-NX"}
          >
            <GiDeathZone
              style={{ height: "57px", width: "35px" }}
              className="nav-icon"
            />
            {expanded && <p className="nav-views">client zone</p>}
            {!expanded && <div className="tooltip">clients</div>}
          </Link>
        </div>
      </div>
      <div className="nav-footer">
        {expanded && (
          <div className="nav-details">
            <GoOctoface
              style={{ height: "57px", width: "50px" }}
              className="nav-icon"
            />
            <div className="nav-footer-info">
              <p className="nav-footer-user-name navViews">Admin</p>
              <p className="nav-footer-user-position navViews">Active</p>
            </div>
          </div>
        )}
        <CgLogOut
          style={{ height: "57px", width: "30px" }}
          className="log-out"
        />
      </div>
    </div>
  );
};
