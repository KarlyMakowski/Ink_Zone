import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar.js";
import { Home } from "./pages/home";
import { StylesPublic } from "./views/styles-public";
import { StylesPrivate } from "./views/styles-private";
import { Pricing } from "./views/pricing";
import { Faq } from "./views/faq";
import { ContactUs } from "./views/contact-us";
import { SignUp } from "./views/sign-up";
import { SignIn } from "./views/sign-in";
import { Forgot } from "./views/forgot-password";
import { Profile } from "./views/profile";
import { Publish } from "./views/publish";
import { Footer } from "./component/footer";
import { Experts } from "./views/experts";
import { FirebaseChat } from "./views/firebase-chat";
import { ChatButton } from "./component/chat-button";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <Navbar />
        <ChatButton />
        <Routes>
          <Route element={<Home />} exact path="/" />
          <Route element={<StylesPublic />} path="/styles" />
          <Route element={<StylesPrivate />} path="/styles/private/:id" />
          <Route element={<Pricing />} path="/prices" />
          <Route element={<Faq />} path="/faq" />
          <Route element={<ContactUs />} path="/contact-us" />
          <Route element={<SignUp />} path="/sign-up" />
          <Route element={<SignIn />} path="/sign-in" />
          <Route element={<Forgot />} path="/forgot-password" />
          <Route element={<Publish />} path="/publish-expert/:id" />
          <Route element={<Profile />} path="/profile" />
          <Route element={<Experts />} path="/experts" />
          <Route element={<FirebaseChat />} path="/chat" />
          {/* <Route element={<h1>Not found!</h1>} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
