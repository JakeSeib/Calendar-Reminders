import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export default function Reminder({ show, handleClose }) {
  return <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>Modal body</p>
      <Button variant="primary" onClick={handleClose}>Save</Button>
      <Button variant="secondary" onClick={handleClose}>Close</Button>
    </Modal.Body>
  </Modal>
}
