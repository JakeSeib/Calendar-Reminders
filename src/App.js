import React, { Fragment, useState } from 'react'
import Calendar from './features/calendar/Calendar'
import Reminder from './features/reminder/Reminder'
import './App.css'

export default function App() {
  const [currEvent, setCurrEvent] = useState(null)

  return (
    <Fragment>
      <Calendar setCurrEvent={setCurrEvent} />
      {currEvent ? <Reminder currEvent={currEvent} setCurrEvent={setCurrEvent} /> : null}
    </Fragment>
  )
}
