import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import injectContext from "./store/appContext";

import { Home } from "./pages/home";
import { Navbar } from "./component/navbar";
import { SignUp } from "./views/sign-up";
import { Forgot } from "./views/forgot-password";
import { ForgotConfirm } from "./views/forgot-confirm";
import { TattooStyles } from "./component/tattooStyles";
import { Carousel } from "./component/carousel";

const Layout = () => {

    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                    <Routes>
                        <Route element = {<Home />} exact path="/" />
                        <Route element = {<SignUp />} path="/sign-up" />
                        <Route element = {<Forgot />} path="/forgot-password" />
                        <Route element = {<ForgotConfirm />} path="/forgot-password" />
                        { /* <Route element={<h1>Not found!</h1>} /> */ }
                    </Routes>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
