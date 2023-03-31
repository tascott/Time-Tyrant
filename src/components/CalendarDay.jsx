import React, { useState } from 'react';
import _ from 'lodash';
import RGL, { WidthProvider } from 'react-grid-layout';
import TimeLine from './TimeLine';

const ReactGridLayout = WidthProvider(RGL);

// 18 hours in the day in the calendar
// Each hour has 12 x 5 minute blocks

// Arbitrary 5 pixels in each hour = 12 * 5 = 60px in each hour
// Pixels in each day = 18 * 60 = 1080

// First unmoveable event column = 1080px/5blocks = 216 blocks high




const CalendarDay = (props) => {
	const defaultProps = {
		className: 'layout',
		items: props.events.length,
		cols: 60,
		rowHeight: 5,
		onLayoutChange: function() {},
    margin: [0,0],
		compactType: null,
		preventCollision: true,
	};

	const combinedProps = { ...defaultProps, ...props };

	const generateLayout = () => {
    return props.events.map((event, i) => {
      return {
        ...event.layout,
        i: i.toString(),
      };
    });
	};

	// const hourLabels = [...Array(18)].map((_, i) => (
	// 	<div key={`label-${i}`} className="hour-label">
	// 		{`${(i + 6) % 24}:00`}
	// 	</div>
	// ));

	const [layout, setLayout] = useState(generateLayout());

	const generateDOM = () => {
    return props.events.map((event, i) => {
    if (event.layout.static) {
      return (
        <div key={i} style={event.layout}>
          <TimeLine pixelsPerHour={60} numberOfRows={18} numberOfCols={60} />
        </div>
      );
    } else {
      return (
        <div key={i}>
          <span className="text">{event.title}</span>
        </div>
      );
    }
  });

	};

	const onLayoutChange = (newLayout) => {
		combinedProps.onLayoutChange(newLayout);
	};

	return (
		<div className="calendar-day">
			{/* <div className="hour-labels">{hourLabels}</div> */}
      <div className="calendar-container-grid">
        {/* <TimeLine pixelsPerHour={60} numberOfRows={18} numberOfCols={60}/> */}
      </div>
			<ReactGridLayout layout={layout} style={{minHeight: combinedProps.rowHeight*18}} onLayoutChange={onLayoutChange} {...combinedProps}>
				{generateDOM()}
			</ReactGridLayout>
		</div>
	);
};

export default CalendarDay;
