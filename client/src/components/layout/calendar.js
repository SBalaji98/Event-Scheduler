import React from 'react';
import { Calendar as MyCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import event from './event';

export default function Calendar(props) {
  const localizer = momentLocalizer(moment);
  console.log(event);
  // npm i gantt-for-react
  return (
    <div>
      <MyCalendar
        localizer={localizer}
        events={event}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
}
