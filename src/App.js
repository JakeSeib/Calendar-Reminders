import React, { Fragment, useState } from 'react'
import Calendar from './features/calendar/Calendar'
import Reminder from './features/reminder/Reminder'
import './App.css'

export default function App() {
  const [show, setShow] = useState(false)

  const handleOpen = () => setShow(true)
  const handleClose = () => setShow(false)

  return (
    <Fragment>
      <Calendar handleOpen={handleOpen} />
      <Reminder show={show} handleClose={handleClose} />
    </Fragment>
  )
}
