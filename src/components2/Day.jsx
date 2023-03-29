import Hour from './Hour';
import React from 'react';

const Day = function ({ day, active, onClick, onEventStart, onEventEnd }) {
  const hours = [...Array(18)].map((_, i) => i + 6);

	return (
		<div onClick={onClick} className={active ? 'Day active' : 'Day minimised'}>
			<h5>{active ? day : day.charAt(0)}</h5>
			{/* Hour component for each hour of the day */}
			{hours.map((hour) => (
        <Hour key={hour} hour={hour} onEventStart={onEventStart} onEventEnd={onEventEnd} />
      ))}
		</div>
	);
};

export default Day;