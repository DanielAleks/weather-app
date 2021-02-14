import React from 'react'
import './x-circle.sass'

function Circle({ weatherCurrent, weatherIcon }) {
  return (
    <div className='circle-container'>
      <div className='circle-items'>
        <p className='circle-temp'>
          {weatherCurrent && weatherCurrent.temp_f}F°
          </p>
        <img src={weatherIcon && weatherIcon.icon} alt="icon" />
        <p className='feels-like'>
          feels like {weatherCurrent && weatherCurrent.feelslike_f}F° 
          </p>
      </div>
    </div>
  )
}

export default Circle
