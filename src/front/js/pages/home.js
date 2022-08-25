import React from "react";

import { TattooStyles } from "../component/tattooStyles.js";
import { Carousel } from "../component/carousel";
import "../../styles/home.css";


export const Home = () => {
	return (
		<div className="d-flex">
			<div className="sidebar" style={{ width: 15 + "%" }}></div>
			<div className="home" style={{ width: 85 + "%" }}>
				<div>
					<Carousel />
				</div>
				<div>
					<TattooStyles />
				</div>
			</div>
		</div>
	);
};