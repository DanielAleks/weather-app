import React from 'react'
import { BsCloud } from 'react-icons/bs'
import './x-circle.sass'

function Circle({ weatherCurrent, weatherIcon }) {
  return (
    <div className='circle-container'>
      <div className='circle-items'>
        <p className='circle-temp'>
          {weatherCurrent && weatherCurrent.temp_f}F°
          </p>
        <p style={{ color: '#9c9c9c' }}>
          feels like {weatherCurrent && weatherCurrent.feelslike_f}F°
          </p>
        <img src={weatherIcon && weatherIcon.icon} alt="icon" />
        {/* <BsCloud size={60} color='#7000cc' /> */}
      </div>
      {/* //*<p>No Alerts Currently</p> */}
    </div>
  )
}

export default Circle
