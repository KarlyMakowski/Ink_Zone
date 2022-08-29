import React from "react";
import { Link } from "react-router-dom";

import "../../styles/home.css";

import { TattooStyles } from "../component/tattooStyles.js";
import { Carousel } from "../component/carousel";

export const Home = () => {
    return (
        <>
            <section className="home-header">
                <Carousel />
            </section>
            <div className="home-tattooStyles">
                <div className="container-styles">
                    <div className="styles-components">
                        <h2 className="styles-title">Styles</h2>
                        <Link to="/styles" className="styles-button align-items-end">
                            Learn More
                        </Link>
                    </div>
                    <TattooStyles />
                </div>
            </div>
        </>
    );
};
