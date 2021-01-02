import React from 'react'
import './info.sass'
import WeatherText from './WeatherText'

function WeatherInfo() {
  return (
    <div className="rainImage" >
      <div className='rainBg'>

        <WeatherText />
      </div>
    </div>
  )
}

export default WeatherInfo
