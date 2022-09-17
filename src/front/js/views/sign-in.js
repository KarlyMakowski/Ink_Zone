import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { GrInstagram, GrTwitter } from "react-icons/gr";
import { FaFacebookF, FaEye, FaEyeSlash } from "react-icons/fa";

import "../../styles/signUp.css";

export const SignIn = () => {
  const { actions, store } = useContext(Context);
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });
  const [show, setShow] = useState(true);
  const [show2, setShow2] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

  const toggleBtn = () => {
    setShow((prevState) => !prevState);
  };

  const toggle2Btn = () => {
    setShow2((prevState) => !prevState);
  };

  return (
    <div className="register">
      <div className="login-container">

        <div className="signin">
          <h1 className="fw-bold">Sign In</h1>
          <form onSubmit={handleSubmit}>
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
                type="email"
                placeholder="Email"
                name="email"
                className="form-control"
                id="floatingInput"
                autoComplete="off"
                value={info.email}
                onChange={handleChange}
              />
              <label className="floatingInput">Email</label>
            </div>
            <div className="form-floating d-flex">
              <input
                type={!show ? "text" : "password"}
                placeholder="Password"
                name="password"
                className="form-control"
                id="floatingPassword"
                autoComplete="off"
                value={info.password}
                onChange={handleChange}
              />
              <label className="floatingPassword mt-2">Password </label>
              <div
                className="form-control icon-eye show-password mt-2"
                onClick={toggleBtn}
              >
                {show ? (
                  <FaEyeSlash className="fa-2x svg" />
                ) : (
                  <FaEye className="fa-2x svg" />
                )}
              </div>
            </div>
            <div className="forgot">
              <Link to="/forgot-password" className="small">
                <small>Forgot Password?</small>
              </Link>
            </div>
            <input type="submit" value="Sign In" onClick={()=> {actions.login(info)}}/>
            <small>
              Don't have an account? <Link to="/sign-up">Sign Up</Link>
            </small>
          </form>
        </div>

      </div>
    </div>
  );
};
