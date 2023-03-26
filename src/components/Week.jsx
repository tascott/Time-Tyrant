import React, { useState } from 'react';
import Day from './Day';

function Week(props: { week: any[] }) {
  // Add a state to track the active day
  const [activeDay, setActiveDay] = useState(null);

  // Callback function to handle click events on Day components
  const handleDayClick = (dayId: string | number) => {
    setActiveDay(dayId);
    setTimeout(() => {
      console.log(`${dayId}, ${activeDay}`);
    }, 1000);

  };

  return (
    <div className="Week">
      {/* Day component for each day of the week */}
      {props.week.map((day) => (
        <Day day={day} key={day.day} onClick={() => handleDayClick(day.day)} />
      ))}
    </div>
  );
}

export default Week;
