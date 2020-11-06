# calendar-reminders
This is a simple calendar SPA for creating 'reminders' (hereafter referred to as 'events'), which have a title, date, time, and color.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Setup
From top-level directory, run

```npm install```

then

```npm start```

and open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## How To Use
The app starts with a few events (in November 2020) already in place. Events can be dragged and dropped to change their dates. Clicking an event allows you to change any of their fields, or delete the event.

To create a new event, click a date on the calendar, fill out the form, and click 'Save'.

This app is not connected to an external database- all events are all stored in memory.

## Issues and Improvements
- Events are stored in memory, and will disappear on page refresh. For a larger-scale version of this project, an external database should be used to store events so they do not disappear.
- Event overflow: When many events are added to a single day, the calendar will expand to accommodate all of them. It may be more aesthetic to instead add a scrollbar and maintain the orignal day's size.
- `findDOMNode is deprecated in StrictMode` console warning: Known issue with current release of react-bootstrap
- Better date/time handling to, for example, capture timezone information. Currently manually formatting from form into ISO8601 format
- Better UI for adding new events: Either make it more obvious that dates can be clicked, or add separate 'Create Reminder' button
