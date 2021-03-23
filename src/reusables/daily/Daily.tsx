import React from 'react'
import DailyInfo from './daily-info/DailyInfo'
import './daily.sass'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

function Daily({weatherForecast}) {
  return (
    <div>
      <div className="daily-container">
        <div className='daily-header'>
          <p className='daily-date'>{weatherForecast.date}</p>
          <img src={weatherForecast.day?.condition.icon} className='day-icon' alt="icon" />
          <p className='daily-desc'>{weatherForecast.day?.condition.text}</p>
        </div>

        <DailyInfo item={weatherForecast} />
      </div> 

      <div className='daily-day-headers'>
        <div className='daily-before'>
          <IoIosArrowBack size={30} color='white' />
          <p>Monday</p>  
        </div>

        <div className='daily-after'>
          <p>Wednesday</p>
          <IoIosArrowForward size={30} color='white' />
        </div>
      </div>
    </div>
  )
}

export default Daily
