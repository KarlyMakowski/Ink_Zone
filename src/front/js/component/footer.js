import React from "react";
import "../../styles/footer.css";

export const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer-container">
        <div class="row">
          <div class="footer-col">
            <h4>company</h4>
            <ul>
              <li>
                <a href="#">about us</a>
              </li>
              <li>
                <a href="#">our services</a>
              </li>
              <li>
                <a href="#">Lorem</a>
              </li>
              <li>
                <a href="#">Ipsum</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>get help</h4>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Lorem</a>
              </li>
              <li>
                <a href="#">Ipsum</a>
              </li>
              <li>
                <a href="#">Dolor</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Example</h4>
            <ul>
              <li>
                <a href="#">Lorem</a>
              </li>
              <li>
                <a href="#">Ipsum</a>
              </li>
              <li>
                <a href="#">Dolor</a>
              </li>
              <li>
                <a href="#">Sit</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>follow us</h4>
            <div class="social-links">
              <a href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
