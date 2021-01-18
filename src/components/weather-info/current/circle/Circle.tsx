import React from 'react'
import { BsCloud } from 'react-icons/bs'
import './x-circle.sass'

function Circle({ weatherCurrent }) {
  return (
    <div className='circle-container'>
      <div className='circle-items'>
        <p className='circle-temp'>{weatherCurrent.temp_f}F°</p>
        <p>{weatherCurrent.feelslike_f}</p>

        <BsCloud size={60} color='#7000cc' />
      </div>
      {/* //*<p>No Alerts Currently</p> */}
    </div>
  )
}

export default Circle
