import React, { Component } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedinIn,
  FaGithubAlt,
  FaHeart,
} from "react-icons/fa";

export const Footer = () => (
  <footer className="bg-dark text-center text-white">
    <div className="container p-4 pb-0">
      <section className="mb-4">
        <a
          href=""
          role="button"
          className="btn btn-outline-light btn-floating m-3 rounded-circle"
        >
          <FaFacebook />
        </a>
        <a
          href=""
          role="button"
          className="btn btn-outline-light btn-floating m-3 rounded-circle"
        >
          <FaTwitter />
        </a>
        <a
          href=""
          role="button"
          className="btn btn-outline-light btn-floating m-3 rounded-circle"
        >
          <FaGoogle />
        </a>
        <a
          href=""
          role="button"
          className="btn btn-outline-light btn-floating m-3 rounded-circle"
        >
          <FaInstagram />
        </a>
        <a
          href=""
          role="button"
          className="btn btn-outline-light btn-floating m-3 rounded-circle"
        >
          <FaLinkedinIn />
        </a>
        <a
          href=""
          role="button"
          className="btn btn-outline-light btn-floating m-3 rounded-circle"
        >
          <FaGithubAlt />
        </a>
      </section>
    </div>
    <div className="mt-auto py-3 text-center">
      <p>
        Made with <FaHeart/> by{" "}
        <a href="http://www.4geeksacademy.com">4Geeks Academy</a>
      </p>
    </div>
  </footer>
);
