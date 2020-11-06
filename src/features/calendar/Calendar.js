import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

export default function Calendar() {
  return (
    <FullCalendar
      plugins={[ dayGridPlugin, interactionPlugin ]}
      editable='true'
      initialView='dayGridMonth'
      events={[
        { id: '1', title: 'event 1', start: '2020-11-01T09:24' },
        { id: '2', title: 'event 4', start: '2020-11-01T09:24' },
        { id: '3', title: 'event 2', start: '2020-11-01T06:24' },
        { id: '4', title: 'event 3', start: '2020-11-02T21:24' }
      ]}
      dateClick={(arg) => console.log('date click arg', arg)}
      eventClick={(arg) => console.log('event click arg', arg)}
    />
  )
}
