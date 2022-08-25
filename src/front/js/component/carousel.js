import React from "react";
import "../../styles/carousel.css";

export const Carousel = () => {
	return (
		<div id="carouselExampleIndicators mt-0" className="carousel slide" data-bs-ride="true">
			<div className="carousel-indicators">
				<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
				<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
				<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
			</div>
			<div className="carousel-inner">
				<div className="carousel-item active">
				<img src="https://images.unsplash.com/photo-1454329030972-00583f5f051f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1161&q=80" className="d-block w-100" alt="..." />
					<div className="container">
						<h1>Example title</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt purus ac arcu dapibus,
							eu vehicula quam ornare. Integer in sollicitudin nunc, ullamcorper commodo enim.</p>
					</div>
				</div>
				<div className="carousel-item">
				<img src="https://images.unsplash.com/photo-1475695752828-6d2b0a83cf8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1137&q=80" className="d-block w-100" alt="..." />
					<div className="container">
						<h1>Example title</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt purus ac arcu dapibus,
							eu vehicula quam ornare. Integer in sollicitudin nunc, ullamcorper commodo enim.</p>
					</div>
				</div>
				<div className="carousel-item">
				<img src="https://images.unsplash.com/photo-1552627019-947c3789ffb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80" className="d-block w-100" alt="..." />
					<div className="container">
						<h1>Example title</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt purus ac arcu dapibus,
							eu vehicula quam ornare. Integer in sollicitudin nunc, ullamcorper commodo enim.</p>
					</div>
				</div>
			</div>
			<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</button>
		</div>
	);
};
