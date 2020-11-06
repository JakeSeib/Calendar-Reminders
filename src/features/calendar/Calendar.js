import React from 'react'
import { useSelector } from 'react-redux'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import { selectEvents } from './calendarSlice'

export default function Calendar() {
  const events = useSelector(selectEvents)

  return (
    <FullCalendar
      plugins={[ dayGridPlugin, interactionPlugin ]}
      editable='true'
      initialView='dayGridMonth'
      events={events}
      dateClick={(arg) => console.log('date click arg', arg)}
      eventClick={(arg) => console.log('event click arg', arg)}
    />
  )
}
