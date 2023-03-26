import React from 'react'
import FiveMinute from './FiveMinute'

function Hour(props: any) {

  return (
    <div className="Hour-container" style={{border: "1px solid"}} >
      <h5>{props.hour.time}</h5>
      <div className='Hour'>
        {Array.from({ length: 20 }).map((_, index) => (
        <FiveMinute key={index} />
      ))}
      </div>
    </div>
  )
}

export default Hour
