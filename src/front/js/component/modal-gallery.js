import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { ModalCarousel } from './modal-carousel';

import "../../styles/modal-gallery.css";

export const ModalGallery = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body className="modal-body">
        <ModalCarousel />
      </Modal.Body>
    </Modal>
  );
};
