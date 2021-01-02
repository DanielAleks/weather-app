import React from 'react'
import { BsCloud } from 'react-icons/bs'
import { HomeDailyWeather } from '../../reusables/DynamicStuff'
import './current.sass'

function CurrentText() {

  const weatherData: any[] = [
    {
      day: 'Wednesday',
      weather: '55 28'
    },
    {
      day: 'Thursday',
      weather: '55 28'
    },
    {
      day: 'Friday',
      weather: '55 28'
    },
    {
      day: 'Saturday',
      weather: '55 28'
    }
  ]

  return (
      <div className="mainText">
        <h1>Paris, France</h1>
        <h3>09:30 am</h3>
        <h3>May 30</h3>
        <h6>Thursday</h6>
        <BsCloud size={40} color='white' className='iconStyles' />
        <h1>31 c</h1>

        <div>
          <HomeDailyWeather weatherData={weatherData[0]} />
          <HomeDailyWeather weatherData={weatherData[1]} />
          <HomeDailyWeather weatherData={weatherData[2]} />
          <HomeDailyWeather weatherData={weatherData[3]} />
        </div>
      </div>
  )
}

export default CurrentText
