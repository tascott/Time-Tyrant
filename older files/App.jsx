import React from 'react';
import CalendarDay from './components/CalendarDay';
import '/node_modules/react-grid-layout/css/styles.css'
import '/node_modules/react-resizable/css/styles.css'

const App = () => {
  const events = [
    {
      title: 'Event 1',
      layout: { x: 0, y: 0, w: 1, h: 3 },
    },
    {
      title: 'Event 2',
      layout: { x: 0, y: 3, w: 1, h: 2 },
    },
  ];

  return (
    <div className="App">
      <h1>Calendar</h1>
      <CalendarDay items={events} />
    </div>
  );
};

export default App;
