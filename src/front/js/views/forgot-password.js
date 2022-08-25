import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../../styles/signUp.css";

export const Forgot = () => {

    const [info, setInfo] = useState({ email: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const handleChange = e => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="login-container">
            <div className="signin">
                <h2>Forgot your password?</h2>
                <h4>Introduce your email</h4>
                <form onSubmit={handleSubmit}>
                    <div className="form-floating">
                        <input type="email" placeholder="Email" name="email" className="form-control" id="floatingInput" autoComplete="off" value={info.email} onChange={handleChange} />
                        <label className="floatingInput">Email</label>
                        <input type="submit" value="Reset Password" className="btn btn-info" />
                        <Link to="/sign-up">
                            <small><label for="toggle"> ← Go back</label></small>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};


