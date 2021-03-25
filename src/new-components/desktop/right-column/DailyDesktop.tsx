import React from 'react'
import Daily from '../../../reusables/daily/Daily'
import './daily-desktop.sass'

function DailyDesktop({ weatherForecast, accessor, setAccessor }) {
  return (
    <div className='dailyD-container'>
      <div className='dailyD-bg' />

      <Daily
        weatherForecast={weatherForecast}
        accessor={accessor}
        setAccessor={setAccessor}
      />

    </div>
  )
}

export default DailyDesktop
