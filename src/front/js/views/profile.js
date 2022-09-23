import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/profile.css";

import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

import Notiflix, { Notify } from "notiflix";
import skull from "../../img/skull-profile.png";

export const Profile = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (store.currentUser === null) {
      navigate('/sign-in');
    }
    else {
      Notify.info(`Welcome back ${store.currentUser?.username}`)
    };
  }, [])

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
                  <img src={(store.currentUser?.picture == "") ? {skull} : store.currentUser?.picture} alt="default-pic" className="rounded-circle" /> 
                  <div className="mt-3">
                    <form onSubmit={e => actions.uploadPicture(e)}>
                    <input type="file" id="files" className="hidden" onChange={e => {actions.handlePicture(e)}}/>
                    <label htmlFor="files" className="upload">Update</label>
                    <input type="submit" value="Submit"/>
                    </form>                  
                  </div>
                </div>
              </div>
            </div>

            <div className="profile-card mt-3">
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h5 className="mb-0">
                    <FaInstagram />
                    <span>Instagram</span>
                  </h5>
                  <span>{store.currentUser?.instagram}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h5 className="mb-0">
                    <FaTwitter />
                    <span>Twitter</span>
                  </h5>
                  <span>{store.currentUser?.twitter}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h5 className="mb-2">
                    <FaFacebook />
                    <span>Facebook</span>
                  </h5>
                  <span className="mb-2">{store.currentUser?.facebook}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-8">
            <div className="profile-card mb-3">
              <div className="profile-card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <span className="mb-0">User</span>
                  </div>
                  <div className="col-sm-9">
                    <span>{store.currentUser?.username}</span>
                  </div>
                </div>
                <hr className="hr-size" />
                <div className="row">
                  <div className="col-sm-3">
                    <span className="mb-0">Name</span>
                  </div>
                  <div className="col-sm-9">
                    <span>{store.currentUser?.name}</span>
                  </div>
                </div>
                <hr className="hr-size" />
                <div className="row">
                  <div className="col-sm-3">
                    <span className="mb-0">Last Name</span>
                  </div>
                  <div className="col-sm-9">
                    <span>{store.currentUser?.lastname}</span>
                  </div>
                </div>
                <hr className="hr-size" />
                <div className="row">
                  <div className="col-sm-3">
                    <span className="mb-0">Phone Number</span>
                  </div>
                  <div className="col-sm-9">
                    <span>{store.currentUser?.phonenumber}</span>
                  </div>
                </div>
                <hr className="hr-size" />
                <div className="row">
                  <div className="col-sm-3">
                    <span className="mb-0">Email</span>
                  </div>
                  <div className="col-sm-9">
                    <span>{store.currentUser?.email}</span>
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
            
          </div>
        </div>
      </div>
    </div>
  );
};
