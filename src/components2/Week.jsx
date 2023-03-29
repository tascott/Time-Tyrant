import React, { useState, useEffect } from 'react';
import Day from './Day';
import { DateTime } from "luxon";

function Week(props) {
  const [events, setEvents] = useState([]);
  const [eventStart, setEventStart] = useState(null);
  // Add a state to track the active day
  const [activeDay, setActiveDay] = useState(null);
  const dayList = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  // Callback function to handle click events on Day components
  const handleDayClick = (dayId) => {
    setActiveDay(dayId);
  };

  useEffect(() => {
    const currentDay = DateTime.local().setLocale('en-GB').weekdayLong;
    setActiveDay(currentDay);
  }, []);

  return (
    <div className="Week">
      {/* Day component for each day of the week */}
      {dayList.map((day) => (
        <Day day={day} key={day} onClick={() => handleDayClick(day)} active={day == activeDay} />
      ))}
    </div>
  );
}


export default Week;
