import React, { useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/signup-signin.css";

export const Forgot = () => {
  const { actions, store } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="register">
      <div className="login-container">
        <div className="signin">
          <h1 className="fw-bold">Forgot your password?</h1>
          <h4>Introduce your email</h4>
          <form onSubmit={(e) => actions.passwordRecovery(e, navigate)}>
            <div className="form-floating">
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="form-control"
                id="floatingInput"
                autoComplete="off"
                value={store.currentUser?.email}
                onChange={(e) => actions.handleChange(e)}
              />
              <label className="floatingInput">Email</label>
              <input type="submit" value="Reset Password" />
              <Link to="/sign-up">
                <small>
                  <label htmlFor="toggle"> ← Go back</label>
                </small>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
