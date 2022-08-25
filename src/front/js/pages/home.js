import React from "react";
import { TattooStyles } from "../component/tattooStyles.js";
import "../../styles/home.css";

export const Home = () => {
	return (
		<div className="home">
			<div className="tattoo_styles">
				<TattooStyles/>
			</div>
		</div>
	);
};
