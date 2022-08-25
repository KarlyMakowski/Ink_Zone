import React from "react";

import { Navbar } from "../component/navbar.js"
import { TattooStyles } from "../component/tattooStyles.js";

import "../../styles/home.css";

export const Home = () => {
	return (
		<div className="d-flex">
			<div className="sidebar" style={{width: 10 + "%"}}>
				<Navbar/>
			</div>
			<div className="home" style={{width: 90 + "%"}}>
				<div className="d-flex justify content-between">
				<TattooStyles />
				</div>
			</div>
		</div>
	);
};
