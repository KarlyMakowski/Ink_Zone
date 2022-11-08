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
  });

  //   const toBase64 = file => new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = () => resolve(reader.result);
  //     reader.onerror = error => reject(error);
  // });

  return (
    <Carousel>
      {store.multipleFiles.map((files, i) => {
        return (
          <Carousel.Item key={i} className="carousel-item">
            <img className="d-block w-100" src={files} alt={console.log()} />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};
