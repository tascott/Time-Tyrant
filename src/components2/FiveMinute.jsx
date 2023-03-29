import React from 'react';
import { useState, useRef, useEffect } from 'react';

function FiveMinute({ startTime, endTime }) {

  return (
    <div className="FiveMinute">
      <div
        className="min-5-block"
        data-start-time={startTime}
        data-end-time={endTime}
        style={{ border: '1px solid', margin: '2px' }}
      ></div>
    </div>
  );
}

export default FiveMinute;
