import Hour from './Hour'
import React from 'react';

interface DayProps {
  day: any;
  onClick: () => void;
}

const Day: React.FC<DayProps> = ({ day, onClick }) => {

  return (
    <div className="Day" onClick={onClick}>
      <h5>{day.day}</h5>
        {/* Hour component for each hour of the day */}
        {day.hours.map((hour: any) => (
          <Hour key={hour.time} hour={hour} />
        ))}

      </div>
  )
}

export default Day
