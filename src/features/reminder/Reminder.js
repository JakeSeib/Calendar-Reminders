import React from 'react'
import { useDispatch } from 'react-redux'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { updateEvent } from '../calendar/calendarSlice'

export default function Reminder({ currEvent, setCurrEvent }) {
  const dispatch = useDispatch()

  const handleChange = event => {
    return setCurrEvent({
      ...currEvent,
      [event.target.name]: event.target.value
    })
  }

  const handleClose = () => setCurrEvent(null)

  const handleEventSubmit = event => {
    event.preventDefault()
    dispatch(updateEvent(currEvent))
    handleClose()
  }

  return <Modal show={true} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form className='reminder-form' onSubmit={handleEventSubmit}>
        <Form.Group controlId="title">
          <Form.Label>Title (max 30 characters)</Form.Label>
          <Form.Control
            required
            type="text"
            name="title"
            value={currEvent.title}
            placeholder="Enter title"
            onChange={handleChange}
            maxLength="30"
          />
        </Form.Group>
        <Button variant="primary" type="submit">Save</Button>
        <Button variant="danger" onClick={handleClose}>Delete</Button>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
      </Form>
    </Modal.Body>
  </Modal>
}
