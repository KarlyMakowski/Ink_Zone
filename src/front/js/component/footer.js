import React from "react";
import { Link } from "react-router-dom";

import "../../styles/footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-social">
        <a href="#" className="icon-instagram">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="icon-twitter">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="icon-facebook">
          <i className="fab fa-facebook-f"></i>
        </a>
      </div>

      <ul className="footer-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/styles">Find Your Style</Link>
        </li>
        <li>
          <Link to="/experts">Experts</Link>
        </li>
        <li>
          <Link to="/prices">Our Prices</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
      </ul>
      <p className="copyright">Ink Zone @ 2022</p>
    </footer>
  );
};
