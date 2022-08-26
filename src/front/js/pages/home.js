import React from "react";

import { TattooStyles } from "../component/tattooStyles.js";
import { Carousel } from "../component/carousel";

import "../../styles/home.css";

export const Home = () => {
	return (
		<div className="d-flex home-margin">
			<div className="sidebar" style={{ width: 16 + "%" }}></div>
			<div className="home" style={{ width: 84 + "%" }}>
				<div>
					<Carousel />
				</div>
				<div className="mt-5">
					<h2 className="text-center mb-5 styles-title">Styles</h2>
					<TattooStyles />
				</div>
			</div>
		</div>
	);
};