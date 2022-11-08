import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import Carousel from "react-bootstrap/Carousel";

import "../../styles/modal-gallery.css";

export const ModalCarousel = () => {
  const { store, actions } = useContext(Context);

  const params = useParams();

  useEffect(() => {
    actions.getArt(params.id);
  }, []);

  return (
    <Carousel key={store.multipleFiles.publish_id}>
      {Array.from(store.multipleFiles).map((item, index) => {
        return (
          <Carousel.Item key={index} className="carousel-item">
            <img className="d-block w-100" src={item} alt={console.log()} />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};
