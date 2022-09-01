import React from "react";

import { GrInstagram, GrTwitter } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";

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
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Find Your Style</a>
        </li>
        <li>
          <a href="#">Ask Our Experts</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
        <li>
          <a href="#">FAQ</a>
        </li>
      </ul>
      <p className="copyright">Ink Zone @ 2022</p>
    </footer>
  );
};
