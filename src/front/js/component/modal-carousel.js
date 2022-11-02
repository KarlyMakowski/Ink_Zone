import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import "../../styles/modal-gallery.css";

export const ModalCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item className="carousel-item">
        <img
          className="d-block w-100"
          src="https://logiabarcelona.com/wp-content/uploads/2021/02/imagen_home_javier_arcia.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/originals/1a/26/2f/1a262fcfaa408bde72a35136e93f0299.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/originals/50/9a/cb/509acb3c65a64d834cf300cda0a1c3ef.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};
