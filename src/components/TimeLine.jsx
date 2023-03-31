import React from 'react';

const TimeLine = ({ pixelsPerhour, numberOfRows }) => {
  // Every pixelsPerHour pixels, add a label
  const hourLabels = [...Array(numberOfRows)].map((_, i) => (
    <div key={`label-${i}`} className="hour-label">
      <span>{`${(i + 6) % 24}:00`}</span>
    </div>
  ));

  return <div className="hour-block-container">{hourLabels}</div>;
};

export default TimeLine;
