import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import injectContext from "./store/appContext";

import { Home } from "./pages/home";
import { Navbar } from "./component/navbar.js";
import { SignUp } from "./views/sign-up";
import { Forgot } from "./views/forgot-password";
import { Footer } from "./component/footer";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <Navbar />
        <Routes>
          <Route element={<Home />} exact path="/" />
          <Route element={<SignUp />} path="/sign-up" />
          <Route element={<Forgot />} path="/forgot-password" />
          {/* <Route element={<h1>Not found!</h1>} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
