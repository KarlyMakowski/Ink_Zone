import React from "react";
import Modal from "react-bootstrap/Modal";
import { ModalCarousel } from "./modal-carousel";

import "../../styles/modal-gallery.css";

export const ModalGallery = ({ show, handleClose, expert_id, files, expert_show }) => {
  return (
    <Modal
      show={show && expert_id == expert_show}
      onHide={handleClose}
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body className="modal-body">
        <ModalCarousel expert_id={expert_id} files={files} />
      </Modal.Body>
    </Modal>
  );
};
