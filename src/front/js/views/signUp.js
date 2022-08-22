import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../../styles/index.css";
import "../../styles/signUp.css";
import { FaInstagram, FaFacebookSquare, FaTwitterSquare, FaUserAlt, FaEye, FaEyeSlash } from "react-icons/fa";

export const SignUp = () => {

    return (
        <div className="container">
            <div className="main-div row w-100 m-auto d-flex justify-content-center align-items-center">
                <div className="col-12 col-lg-6 col-md-8 col-xxl-5">
                <div className="card py-3 px-2 border border-success">
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label for="inputEmail4" className="form-label">Nombre</label>
                            <input type="email" className="form-control" id="inputEmail4" />
                        </div>
                        <div className="col-md-6">
                            <label for="inputEmail4" className="form-label">Apellidos</label>
                            <input type="email" className="form-control" id="inputEmail4" />
                        </div>
                        <div className="col-md-6">
                            <label for="inputEmail4" className="form-label">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" />
                        </div>
                        <div className="col-md-6">
                            <label for="inputPassword4" className="form-label">Contraseña</label>
                            <input type="password" className="form-control" id="inputPassword4" />
                        </div>
                        <div className="col-12">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck" />
                                <label className="form-check-label" for="gridCheck">
                                    Check me out
                                </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </div>
    )
};

