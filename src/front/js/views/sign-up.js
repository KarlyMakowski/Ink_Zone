import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../../styles/signUp.css";
import { GrInstagram, GrTwitter } from "react-icons/gr";
import { FaFacebookF, FaEye, FaEyeSlash } from "react-icons/fa";

export const SignUp = () => {

    const [info, setInfo] = useState({ email: "", password: "", confirmPassword: "", name: "", });
    const [show, setShow] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const handleChange = e => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        })
    }
    const toogleBtn = () => {
        setShow((prevState) => !prevState);
    };

    return (
        <div className="login-container">
            <input type="checkbox" id="toggle" />
            <div className="signin">
                <h1 className="fw-bold">Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="social">
                        <a href="#"><GrInstagram className="gr" /></a>
                        <a href="#"><GrTwitter className="gr" /></a>
                        <a href="#"><FaFacebookF className="gr" /></a>
                    </div>
                    <p>Or enter your info</p>
                    <div className="form-floating">
                        <input type="email" placeholder="Email" name="email" className="form-control" id="floatingInput" autoComplete="off" value={info.email} onChange={handleChange} />
                        <label className="floatingInput">Email</label>
                    </div>
                    <div className="form-floating d-flex">
                        <input type={!show ? "password" : "text"} placeholder="Password" name="password" className="form-control" id="floatingPassword" autoComplete="off" value={info.password} onChange={handleChange} />
                        <label className="floatingPassword mt-2">Password </label>
                        <div className="form-control icon show-password mt-2" onClick={toogleBtn}>
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
                    <input type="submit" value="Sign In" className="btn btn-info" />
                    <small>Don't have an account? <label for="toggle">Sign Up</label></small>
                </form>
            </div>

            <div className="signup">
                <h1 className="fw-bold">Create an account</h1>
                <form onSubmit={handleSubmit}>
                    <div className="social">
                        <a href="#"><GrInstagram className="gr" /></a>
                        <a href="#"><GrTwitter className="gr" /></a>
                        <a href="#"><FaFacebookF className="gr" /></a>
                    </div>
                    <p>Or enter your info</p>
                    <div className="form-floating">
                        <input type="text" placeholder="Name" name="name" className="form-control" id="floatingInput" autoComplete="off" value={info.name} onChange={handleChange} />
                        <label className="floatingInput">Name</label>
                    </div>
                    <div className="form-floating">
                        <input type="email" placeholder="Email" name="email" className="form-control" id="floatingInput" autoComplete="off" value={info.email} onChange={handleChange} />
                        <label className="floatingInput">Email</label>
                    </div>
                    <div className="form-floating">
                        <input type={!show ? "password" : "text"} placeholder="Password" name="password" className="form-control" id="floatingPassword" autoComplete="off" value={info.password} onChange={handleChange} />
                        <label className="floatingPassword">Password</label>
                        <div className="form-control icon show-password2 mt-2" onClick={toogleBtn}>
                            {show ? (
                                <FaEyeSlash className="fa-2x svg" />
                            ) : (
                                <FaEye className="fa-2x svg" />
                            )}
                        </div>
                    </div>
                    <div className="form-floating">
                        <input type={!show ? "password" : "text"} placeholder="Confirm Password" name="confirmPassword" className="form-control" id="floatingPassword" autoComplete="off" value={info.confirmPassword} onChange={handleChange} />
                        <label className="floatingPassword">Confirm Password</label>
                        <div className="form-control icon show-password2 mt-2" onClick={toogleBtn}>
                            {show ? (
                                <FaEyeSlash className="fa-2x svg" />
                            ) : (
                                <FaEye className="fa-2x svg" />
                            )}
                        </div>
                    </div>
                    <input type="submit" value="Create Account" className="btn btn-info" />
                    <small>Already have an account? <label for="toggle">Sign In</label></small>
                </form>
            </div>
        </div>
    );
};


