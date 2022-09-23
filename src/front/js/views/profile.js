import React from "react";

import "../../styles/profile.css";

import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

export const Profile = () => {
  return (
    <div className="profile-container">
      <div className="pricing-title">
        <h1>Profile</h1>
      </div>
      <div className="main-body">
        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <div className="profile-card">
              <div className="profile-card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                    alt="Admin"
                    className="rounded-circle"
                  />
                  <div className="mt-3">
                    <h4>John Doe</h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="profile-card mt-3">
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h5 className="mb-0 mt-2">
                    <TbWorld />
                    <span>Website</span>
                  </h5>
                  <span className="mt-2">https://www.example.com</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h5 className="mb-0">
                    <FaInstagram />
                    <span>Instagram</span>
                  </h5>
                  <span>Example</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h5 className="mb-0">
                    <FaTwitter />
                    <span>Twitter</span>
                  </h5>
                  <span>@example</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h5 className="mb-2">
                    <FaFacebook />
                    <span>Facebook</span>
                  </h5>
                  <span className="mb-2">example</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-8">
            <div className="profile-card mb-3">
              <div className="profile-card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <span className="mb-0">Full Name</span>
                  </div>
                  <div className="col-sm-9">
                    <span>Kenneth Valdez</span>
                  </div>
                </div>
                <hr className="hr-size" />
                <div className="row">
                  <div className="col-sm-3">
                    <span className="mb-0">Date of Birth</span>
                  </div>
                  <div className="col-sm-9">
                    <span>19/05/1995</span>
                  </div>
                </div>
                <hr className="hr-size" />
                <div className="row">
                  <div className="col-sm-3">
                    <span className="mb-0">Email</span>
                  </div>
                  <div className="col-sm-9">
                    <span>example@gmail.com</span>
                  </div>
                </div>
                <hr className="hr-size" />
                <div className="row">
                  <div className="col-sm-3">
                    <span className="mb-0">Phone Number</span>
                  </div>
                  <div className="col-sm-9">
                    <span>648245874</span>
                  </div>
                </div>
                <hr className="hr-size" />
                <div className="row">
                  <div className="col-sm-3">
                    <span className="mb-0">Address</span>
                  </div>
                  <div className="col-sm-9">
                    <span>Calle Las Ramblas, Madrid, España</span>
                  </div>
                </div>
                <hr className="hr-size" />
                <div className="row">
                  <div className="col-sm-12">
                    <div className="profile-btn">
                      <input type="submit" value="Edit" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="profile-card mt-3">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <h3 className="mt-2">Leave a review</h3>
                    <textarea
                      className="form-control"
                      placeholder="Write your message here..."
                    ></textarea>
                  </li>
                </ul>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="review-btn profile-card-body">
                      <input type="submit" value="Post Review" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="profile-card mt-3">
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <div className="profile-btn">
                      <input type="submit" value="Log Out" />
                    </div>
                  <div className="review-btn">
                    <input type="submit" value="Delete Account" />
                  </div>
                </li>
              </ul>
            </div>
    </div>

    
  );
};
