import React from 'react'
import { useDispatch } from 'react-redux'
import { formatDate } from '@fullcalendar/core'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {
  createEvent,
  updateEvent,
  deleteEvent
} from '../calendar/calendarSlice'
import { hexToColorMap, colorToHexMap } from './reminderUtils'

export default function Reminder({ currEvent, setCurrEvent }) {
  const dispatch = useDispatch()

  const handleChange = event => {
    switch (event.target.name) {
      case 'start-date':
        return setCurrEvent({
          ...currEvent,
          start: `${event.target.value}T${currEvent.start.split('T')[1]}`
        })
      case 'start-time':
        return setCurrEvent({
          ...currEvent,
          start: `${currEvent.start.split('T')[0]}T${event.target.value}`
        })
      case 'backgroundColor':
        return setCurrEvent({
          ...currEvent,
          [event.target.name]: colorToHexMap[event.target.value]
        })
      default:
        return setCurrEvent({
          ...currEvent,
          [event.target.name]: event.target.value
        })
    }
  }

  const handleClose = () => setCurrEvent(null)

  const handleEventSubmit = event => {
    event.preventDefault()
    if (currEvent.id) {
      dispatch(updateEvent(currEvent))
    } else {
      dispatch(createEvent(currEvent))
    }
    handleClose()
  }

  const handleDelete = () => {
    dispatch(deleteEvent(currEvent.id))
    handleClose()
  }

  return <Modal show={true} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>{currEvent.id ? 'Edit Reminder' : 'Create Reminder'}</Modal.Title>
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
        <Form.Group controlId="start-date">
          <Form.Label>Date</Form.Label>
          <Form.Control
            required
            type="date"
            name="start-date"
            value={currEvent.start.split('T')[0]}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="start-time">
          <Form.Label>Time</Form.Label>
          <Form.Control
            required
            type="time"
            name="start-time"
            value={formatDate(currEvent.start, {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
              }
            )}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="backgroundColor">
          <Form.Label>Color</Form.Label>
          <Form.Control
            as="select"
            name="backgroundColor"
            value={hexToColorMap[currEvent.backgroundColor]}
            placeholder="Enter title"
            onChange={handleChange}
            maxLength="30"
          >
            <option>Red</option>
            <option>Orange</option>
            <option>Green</option>
            <option>Teal</option>
            <option>Blue</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">Save</Button>
        {currEvent.id ? <Button variant="danger" onClick={handleDelete}>Delete</Button> : null}
        <Button variant="secondary" onClick={handleClose}>Close</Button>
      </Form>
    </Modal.Body>
  </Modal>
}
