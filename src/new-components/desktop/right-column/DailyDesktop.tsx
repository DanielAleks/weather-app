import React from 'react'
import Daily from '../../../reusables/daily/Daily'
import './daily-desktop.sass'

function DailyDesktop({weatherForecast}) {
  return (
    <div className='dailyD-container'>
      <div className='dailyD-bg' />

      <Daily weatherForecast={weatherForecast} />

    </div>
  )
}

export default DailyDesktop
