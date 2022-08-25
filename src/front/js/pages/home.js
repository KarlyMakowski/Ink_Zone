import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../../styles/home.css";
import { Carousel } from "../component/carousel";
import { TattooStyles } from "../component/tattooStyles";

export const Home = () => {

    return (
        <div>
            <Carousel />
            <TattooStyles />
        </div>
    );
};