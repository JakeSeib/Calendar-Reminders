import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import './App.css'

function App() {
  return (
    <FullCalendar
      plugins={[ dayGridPlugin, interactionPlugin ]}
    />
  )
}

export default App
