import { createSlice } from '@reduxjs/toolkit'

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    eventsById: {
      1: { id: '1', title: 'event 1', start: '2020-11-01T09:24', display: 'block', backgroundColor: 'Red' },
      2: { id: '2', title: 'event 4', start: '2020-11-01T09:24' },
      3: { id: '3', title: 'event 2', start: '2020-11-01T06:24' },
      4: { id: '4', title: 'event 3', start: '2020-11-02T21:24' }
    },
  },
  reducers: {
    updateEvent: (state, action) => {
      state.eventsById[action.payload.id] = action.payload
    }
  }
})

export const { updateEvent } = calendarSlice.actions

export const selectEventsById = state => state.calendar.eventsById

export default calendarSlice.reducer
