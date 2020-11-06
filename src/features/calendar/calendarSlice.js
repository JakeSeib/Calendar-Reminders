import { createSlice } from '@reduxjs/toolkit'

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    events: [
      { id: '1', title: 'event 1', start: '2020-11-01T09:24', display: 'block', backgroundColor: 'Red' },
      { id: '2', title: 'event 4', start: '2020-11-01T09:24' },
      { id: '3', title: 'event 2', start: '2020-11-01T06:24' },
      { id: '4', title: 'event 3', start: '2020-11-02T21:24' }
    ]
  },
  reducers: {
  }
})

export const selectEvents = state => state.calendar.events

export default calendarSlice.reducer
