import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/signup-signin.css";

import { GrInstagram, GrTwitter } from "react-icons/gr";
import { FaFacebookF, FaEye, FaEyeSlash } from "react-icons/fa";

export const SignUp = () => {
  const { actions, store } = useContext(Context);
  const navigate = useNavigate();

  const [show, setShow] = useState(true);
  const [show2, setShow2] = useState(true);

  const toggleBtn = () => {
    setShow((prevState) => !prevState);
  };

  const toggle2Btn = () => {
    setShow2((prevState) => !prevState);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="register">
      <div className="login-container">
        <div className="signup">
          <h1 className="fw-bold">Create an account</h1>
          <form onSubmit={e => actions.signup(e, navigate)}>
          <div className="social">
              <a href="#" className="social-instagram">
                <GrInstagram className="gr" />
              </a>
              <a href="#" className="social-twitter">
                <GrTwitter className="gr" />
              </a>
              <a href="#" className="social-facebook">
                <FaFacebookF className="gr" />
              </a>
            </div> 
            <p>Or enter your info</p>
            <div className="form-floating">
              <input
                type="text"
                placeholder="User Name"
                name="username"
                className="form-control floatingInput"
                autoComplete="off"
                value={store.currentUser?.username}
                onChange={e => actions.handleChange(e)}
              />
              <label className="floatingInput">User Name</label>
            </div>
            <div className="form-floating">
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="form-control floatingInput"
                autoComplete="off"
                value={store.currentUser?.email}
                onChange={e => actions.handleChange(e)}
              />
              <label className="floatingInput">Email</label>
            </div>
            <div className="form-floating">
              <input
                type={!show ? "text" : "password"}
                placeholder="Password"
                name="password"
                className="form-control floatingPassword"
                autoComplete="off"
                value={store.currentUser?.password}
                onChange={e => actions.handleChange(e)}
              />
              <label className="floatingPassword">Password</label>
              <div
                className="form-control icon-eye show-password2 mt-2"
                onClick={toggleBtn}
              >
                {show ? (
                  <FaEyeSlash className="fa-2x svg" />
                ) : (
                  <FaEye className="fa-2x svg" />
                )}
              </div>
            </div>
            <div className="form-floating">
              <input
                type={!show2 ? "text" : "password"}
                placeholder="Confirm Password"
                name="confirmPassword"
                className="form-control floatingPassword"
                autoComplete="off"
                value={store.currentUser?.confirmPassword}
                onChange={e => actions.handleChange(e)}
              />
              <label id="floatingPassword">Confirm Password</label>
              <div
                className="form-control icon-eye show-password2 mt-2"
                onClick={toggle2Btn}
              >
                {show2 ? (
                  <FaEyeSlash className="fa-2x svg" />
                ) : (
                  <FaEye className="fa-2x svg" />
                )}
              </div>
            </div>
            <div className="sign-up-btn">
              <input type="submit" value="Create Account" />
            </div>
            <small>
              Already have an account? <Link to="/sign-in"><label>Sign In</label></Link>
            </small>
          </form>
        </div>
      </div>
    </div>
  );
};