import React from "react";

import Carousel from "react-bootstrap/Carousel";

import "../../styles/modal-gallery.css";

export const ModalCarousel = ({ files }) => {
  return (
    <Carousel>
      {files.map((item, index) => {
        return (
          <Carousel.Item key={index} className="carousel-item">
            <img
              className="d-block w-100"
              src={item.url}
              alt={"image-" + index}
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};
