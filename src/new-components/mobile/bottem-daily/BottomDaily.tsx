import React, { useEffect, useState } from 'react'
import DailyInfo from './daily-info/DailyInfo'
import Nav from './nav/Nav'
import './bottem-daily.sass'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

function BottomDaily({ weatherForecast }) {
  return (
    <div className='bottem-daily-container'>
      <div className='bg-bottom-daily' />
      <Nav />

      <div className="daily-container">
        <div className='daily-header'>
          <p className='daily-date'>{weatherForecast.date}</p>
          <img src={weatherForecast.day?.condition.icon} className='day-icon' alt="dad" />
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

export default BottomDaily
