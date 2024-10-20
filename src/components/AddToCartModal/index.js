import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './index.css'

const AddToCartModal = ({ show, handleClose, product }) => {
  return (
    <Modal className='modal' show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{product.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={product.image} alt={product.name} style={{ width: '20%' }} />
        <p>Price: ₹{product.price}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={() => alert("Added to cart!")}>
          Confirm Add to Cart
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddToCartModal;