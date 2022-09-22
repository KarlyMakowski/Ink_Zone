import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import injectContext from "./store/appContext";

import { Home } from "./pages/home";
import { Navbar } from "./component/navbar.js";
import { StylesInfo } from "./views/stylesInfo";
import { Pricing } from "./views/pricing";
import { SignUp } from "./views/sign-up";
import { SignIn } from "./views/sign-in";
import { Forgot } from "./views/forgot-password";
import { Footer } from "./component/footer";
/* import { ContactUs } from "./views/contact-us"; */

import { PostReview } from "./views/user-reviews";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <Navbar />
        <Routes>
          <Route element={<Home />} exact path="/" />
          <Route element={<StylesInfo />} path="/styles" />
          <Route element={<Pricing />} path="/prices" />
          <Route element={<SignUp />} path="/sign-up" />
          <Route element={<SignIn />} path="/sign-in" />
          <Route element={<Forgot />} path="/forgot-password" />
{/*           <Route element={<ContactUs />} path="/contact-us" /> */}
          <Route element={<PostReview />} path="/contact-us" />
          {/* <Route element={<h1>Not found!</h1>} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
