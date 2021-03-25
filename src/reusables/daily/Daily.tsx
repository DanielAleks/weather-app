import React from 'react'
import DailyInfo from './daily-info/DailyInfo'
import './daily.sass'

function Daily({ weatherForecast, accessor, setAccessor }) {
  return (
    <div className="daily-container">
      <div className='daily-header'>
        <p className='daily-date'>{weatherForecast && weatherForecast[accessor]?.date}</p>
        <img src={weatherForecast && weatherForecast[accessor]?.day.condition.icon} className='day-icon' alt="icon" />
        <p className='daily-desc'>{weatherForecast && weatherForecast[accessor]?.day.condition.text}</p>
      </div>

      <DailyInfo
        item={weatherForecast}
        accessor={accessor}
        setAccessor={setAccessor}
      />
    </div>
  )
}

export default Daily
