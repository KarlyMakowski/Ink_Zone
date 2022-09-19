import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { GrInstagram, GrTwitter } from "react-icons/gr";
import { FaFacebookF, FaEye, FaEyeSlash } from "react-icons/fa";

import "../../styles/signUp.css";

export const SignUp = () => {
  const { actions, store } = useContext(Context);

  const [show, setShow] = useState(true);
  const [show2, setShow2] = useState(true);

  const toggleBtn = () => {
    setShow((prevState) => !prevState);
  };

  const toggle2Btn = () => {
    setShow2((prevState) => !prevState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [username, setUsername] =useState("");
  const [email, setEmail] =useState("");
  const [password, setPassword] =useState("");
  const [confirmPassword, setConfirmPassword] =useState("");
  const navigate = useNavigate();

  const handleClick = async () => {
    await actions.signup(username, email, password, confirmPassword).then(() => {
      store.message;
      navigate("/sign-in"); 

    })
  };

  return (
    <div className="register">
      <div className="login-container">
        <div className="sign-up">
          <h1 className="fw-bold">Create an account</h1>
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
                type="text"
                placeholder="Name"
                name="name"
                className="form-control"
                id="floatingInput"
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label className="floatingInput">Name</label>
            </div>
            <div className="form-floating">
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="form-control"
                id="floatingInput"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="floatingInput">Email</label>
            </div>
            <div className="form-floating">
              <input
                type={!show ? "text" : "password"}
                placeholder="Password"
                name="password"
                className="form-control"
                id="floatingPassword"
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                className="form-control"
                id="floatingPassword"
                autoComplete="off"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
              <input onClick={handleClick} type="submit" value="Create Account" />
            </div>
            <small>
              Already have an account? <Link to="/sign-in">Sign In</Link>
            </small>
          </form>
        </div>
      </div>
    </div>
  );
};