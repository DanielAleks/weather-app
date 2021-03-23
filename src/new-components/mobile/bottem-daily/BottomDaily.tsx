import React, { useEffect, useState } from 'react'
import DailyInfo from './daily-info/DailyInfo'
import Nav from './nav/Nav'
import './bottem-daily.sass'

function BottomDaily({ weatherForecast }) {
  return (
    <div className='bottem-daily-container'>
      <div className='bg-bottom-daily' />
      <Nav />

      {weatherForecast && weatherForecast.map((item, id) =>
        <div className="daily-container">
          <div className='daily-header'>
            <p className='daily-date'>{item.date}</p>
            <img src={item.day.condition.icon} className='day-icon' alt="dad" />
            <p className='daily-desc'>{item.day.condition.text}</p>
          </div>

        <DailyInfo item={item}/>

        </div>
      )}

    </div>
  )
}

export default BottomDaily
