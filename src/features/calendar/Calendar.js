import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import { createSelector } from 'reselect'
import { updateEvent, selectEventsById } from './calendarSlice'

export default function Calendar({ setCurrEvent }) {
  const eventsById = useSelector(selectEventsById)
  const getEventArray = createSelector(
    (eventsById) => eventsById,
    hash => Object.values(hash) // incompatible with older browsers
  )
  const events = getEventArray(eventsById)
  const dispatch = useDispatch()

  const handleEventClick = (info) => {
    setCurrEvent(eventsById[info.event.id])
  }

  const handleEventChange = (changeInfo) => {
    return dispatch(updateEvent(changeInfo.event.toPlainObject()))
  }

  return (
    <FullCalendar
      plugins={[ dayGridPlugin, interactionPlugin ]}
      editable='true'
      initialView='dayGridMonth'
      events={events}
      dateClick={(arg) => console.log('date click arg', arg)}
      eventClick={handleEventClick}
      eventChange={handleEventChange} // called for drag-n-drop/resize
    />
  )
}
