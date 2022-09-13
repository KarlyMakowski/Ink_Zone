import React from "react";
import { MdLocationPin, MdEmail } from "react-icons/md";
import {
  FaPhone,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

import "../../styles/contact-us.css";

export const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className="contact-title">
        <h1>GET IN TOUCH</h1>
      </div>
      <div className="contact-box">
        {/* Form */}
        <div className="contact contact-form">
          <h3>Send a Message</h3>
          <form>
            <div className="formBox">
              <div className="row50">
                <div className="inputBox">
                  <span>First Name</span>
                  <input
                    type="text"
                    placeholder="Name"
                    className="form-control"
                    autoComplete="off"
                  />
                </div>
                <div className="inputBox">
                  <span>Last Name</span>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="form-control"
                    autoComplete="off"
                  />
                </div>
              </div>

              <div className="row50">
                <div className="inputBox">
                  <span>Email</span>
                  <input
                    type="text"
                    placeholder="Email"
                    className="form-control"
                    autoComplete="off"
                  />
                </div>
                <div className="inputBox">
                  <span>Phone Number</span>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="form-control"
                    autoComplete="off"
                  />
                </div>
              </div>

              <div className="row100">
                <div className="inputBox">
                  <span>Message</span>
                  <textarea
                    placeholder="Write your message here..."
                    className="form-control"
                  ></textarea>
                </div>
              </div>

              <div className="row100">
                <div className="inputBox">
                  <input type="submit" value="Send" />
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Info box */}
        <div className="contact contact-info">
          <h3>Contact Info</h3>
          <div className="infoBox">
            <div>
              <span>
                <MdLocationPin />
              </span>
              <p>
                Calle de la Pinada, Madrid <br />
                ESPAÑA
              </p>
            </div>
            <div>
              <span>
                <MdEmail />
              </span>
              <a href="mailto:ink-zone@gmail.com">ink-zone@gmail.com</a>
            </div>
            <div>
              <span>
                <FaPhone />
              </span>
              <a href="tel:+34648215148">+34 648 215 148</a>
            </div>
            {/* Social media links */}
            <ul className="sci">
              <li>
                <a href="#">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaFacebook />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Map */}
        <div className="contact contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.999812004841!2d-3.688012684350767!3d40.431003062694764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6ea7728ed9735a32!2zNDDCsDI1JzUxLjYiTiAzwrA0MScwOS4wIlc!5e0!3m2!1ses!2ses!4v1662915382089!5m2!1ses!2ses"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
