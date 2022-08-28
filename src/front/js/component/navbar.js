import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../../styles/navbar.css";

import brandLogo from "../../img/brandLogo.png";

import { FaHome, FaTeamspeak } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { GiDeathZone } from "react-icons/gi";
import { BsFillPaletteFill, BsChatDotsFill } from "react-icons/bs";
import { GoOctoface } from "react-icons/go";
import { CgLogOut } from "react-icons/cg";
import { AiOutlineForm } from "react-icons/ai";
import { RiSearch2Line } from "react-icons/ri";

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
              <img src={brandLogo} alt="Inked Zone Logo Brand" />
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
              className="navIcon"
            />
            {expanded && <p className="navViews">home</p>}
          </Link>
          <Link
            to="/experts"
            className={expanded ? "menu-item" : "menu-item menu-item-NX"}
          >
            <IoMdContacts
              style={{ height: "57px", width: "35px" }}
              className="navIcon"
            />
            {expanded && <p className="navViews">ask our experts</p>}
          </Link>
          <Link
            to="/styles"
            className={expanded ? "menu-item" : "menu-item menu-item-NX"}
          >
            <BsFillPaletteFill
              style={{ height: "57px", width: "35px" }}
              className="navIcon"
            />
            {expanded && <p className="navViews">find your style</p>}
          </Link>
          <Link
            to="/questionaire"
            className={expanded ? "menu-item" : "menu-item menu-item-NX"}
          >
            <AiOutlineForm
              style={{ height: "57px", width: "35px" }}
              className="navIcon"
            />
            {expanded && <p className="navViews">questionaire</p>}
          </Link>
          <Link
            to="/sign-up"
            className={expanded ? "menu-item" : "menu-item menu-item-NX"}
          >
            <GiDeathZone
              style={{ height: "57px", width: "35px" }}
              className="navIcon"
            />
            {expanded && <p className="navViews">client zone</p>}
          </Link>
          <Link
            to="/contact-us"
            className={expanded ? "menu-item" : "menu-item menu-item-NX"}
          >
            <FaTeamspeak
              style={{ height: "57px", width: "35px" }}
              className="navIcon"
            />
            {expanded && <p className="navViews">contact us</p>}
          </Link>
          <Link
            to="/faq"
            className={expanded ? "menu-item" : "menu-item menu-item-NX"}
          >
            <BsChatDotsFill
              style={{ height: "57px", width: "35px" }}
              className="navIcon"
            />
            {expanded && <p className="navViews">faq</p>}
          </Link>
          <form className={expanded ? "menu-item" : "menu-item menu-item-NX"}>
            <i className="searchIcon">
              <RiSearch2Line
                style={{ height: "57px", width: "35px" }}
                className="navIcon"
              />
            </i>
            <input type="search" placeholder="Search..." />
          </form>
        </div>
      </div>
      <div className="nav-footer">
        {expanded && (
          <div className="nav-details">
            <GoOctoface
              style={{ height: "57px", width: "50px" }}
              className="navIcon"
            />
            <div classname="nav-footer-info">
              <p className="nav-footer-user-name navViews">Admin</p>
              <p className="nav-footer-user-position navViews"> Active</p>
            </div>
          </div>
        )}
        <CgLogOut
          style={{ height: "57px", width: "30px" }}
          className="logOut"
        />
      </div>
    </div>
  );
};
