import React from 'react'
import DailyInfo from './daily-info/DailyInfo'
import './daily.sass'
 
function Daily({weatherForecast}) {
  return (
      <div className="daily-container">
        <div className='daily-header'> 
          <p className='daily-date'>{weatherForecast[1]?.date}</p>
          <img src={weatherForecast[1]?.day.condition.icon} className='day-icon' alt="icon" />
          <p className='daily-desc'>{weatherForecast[1]?.day.condition.text}</p> 
        </div>

        <DailyInfo item={weatherForecast} />
      </div> 
  )
}

export default Daily
