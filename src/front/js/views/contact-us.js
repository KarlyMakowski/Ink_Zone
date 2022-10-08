import React, { useEffect, useRef } from "react";
import emailjs from 'emailjs-com';
import Notiflix, { Notify } from "notiflix";

import "../../styles/contact-us.css";

import { MdLocationPin, MdEmail } from "react-icons/md";
import { FaPhone, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

export const ContactUs = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('contact_service', 'contact_form', form.current, 'M8jRmp0FGwuSWFUG_')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

      e.target.reset();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  })

  const emailSuccess = () => {
    Notify.success("Email sent successfully.");
  };

  return (
    <div className="contact-us">
      <div className="contact-title">
        <h1>GET IN TOUCH</h1>
      </div>
      <div className="contact-box">
        {/* Form */}
        <div className="contact contact-form">
          <h3>Send a Message</h3>
          <form ref={form} onSubmit={sendEmail}>
            <div className="formBox">
              <div className="row50">
                <div className="inputBox">
                  <label>Name *</label>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Name"
                    className="form-control"
                    required
                  />
                </div>
                <div className="inputBox">
                  <label>Last Name *</label>
                  <input
                    type="text"
                    name="user_lastName"
                    placeholder="Last Name"
                    className="form-control"
                    required
                  />
                </div>
              </div>

              <div className="row50">
                <div className="inputBox">
                  <label>Email *</label>
                  <input
                    type="text"
                    name="user_email"
                    placeholder="Email"
                    className="form-control"
                    required
                  />
                </div>
                <div className="inputBox">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    name="user_phone"
                    placeholder="Phone Number"
                    className="form-control"
                  />
                </div>
              </div>

              <div className="row100">
                <div className="inputBox">
                  <label className="contact-message">Message *</label>
                  <textarea
                    placeholder="Write your message here..."
                    name="message"
                    className="form-control"
                    required
                  ></textarea>
                </div>
              </div>

              <div className="row100">
                <div className="inputBox">
                  <input type="submit" value="Send" onClick={emailSuccess} />
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
                <MdLocationPin className="social-contact-icons" />
              </span>
              <p>
                Calle Las Ramblas, 25 <br />
                Madrid, España
              </p>
            </div>
            <div>
              <span>
                <MdEmail className="social-contact-icons" />
              </span>
              <a href="mailto:ink-zone@gmail.com">ink-zone@gmail.com</a>
            </div>
            <div>
              <span>
                <FaPhone className="social-contact-icons" />
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
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
