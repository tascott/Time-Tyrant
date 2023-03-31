import React from 'react';
import CalendarDay from './components/CalendarDay';
import './App.css';
import '/node_modules/react-grid-layout/css/styles.css'
import '/node_modules/react-resizable/css/styles.css'

const App = () => {
  const events = [
    { title: 'Event 1', layout: { x: 0, y: 0, w: 10, h: 216, static: true } },
    { title: 'Event 2', layout: { x: 10, y: 12, w: 10, h: 12 } },
    { title: 'Event 3', layout: { x: 20, y: 0, w: 10, h: 12 } },
    { title: 'Event 4', layout: { x: 30, y: 0, w: 10, h: 12 } },
    { title: 'Event 5', layout: { x: 40, y: 0, w: 10, h: 12 } },
    { title: 'Event 6', layout: { x: 50, y: 0, w: 10, h: 12 } },
  ];

  return (
    <div className="App">
      <h1>Calendar</h1>
      <CalendarDay events={events} />
    </div>
  );
};

export default App;
