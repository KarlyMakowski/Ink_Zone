import React from "react";
import { Link } from "react-router-dom";

import "../../styles/pricing.css";

export const Pricing = () => {
    return (
        <div className="pricing-view">
            <div className="pricing-container">
                <div className="pricing-card">
                    <h3 className="pricing-category">Chibi Tattoo</h3>
                    <img src="https://i.pinimg.com/736x/57/0e/a4/570ea457d1e9e498d0d76848c6cfb7e6.jpg" alt="Type of tattoo" />
                    <span className="divider"></span>
                    <h4 className="price">50 €*</h4>
                    <p>Size 15x10cm approx.</p>
                    <p>Lettering or small design</p>
                    <p>Colour or B&W</p>
                    <Link to="/contact-us" className="btn">Contact us</Link>
                </div>
            </div>
        </div>
    );
};