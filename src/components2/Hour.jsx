import React from 'react'
import FiveMinute from './FiveMinute'

function Hour({ hour }) {
  const blocks = [...Array(12)].map((_, i) => i * 5);

  function formatTime(hour, minute) {
    const formattedHour = String(hour).padStart(2, '0');
    const formattedMinute = String(minute).padStart(2, '0');
    return `${formattedHour}:${formattedMinute}`;
  }

  return (
    <div className="Hour-container" style={{border: "1px solid"}} >
      <h5>{hour}</h5>
      <div className='Hour'>
        {blocks.map((block) => (
          <FiveMinute key={block}
            startTime={formatTime(hour, block)}
            endTime={formatTime(hour, block + 5)}
          />
        ))}
      </div>
    </div>
  )
}

export default Hour
