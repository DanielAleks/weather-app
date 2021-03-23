import React from 'react'
import './daily-info.sass'

function DailyInfo({item}) {
  return (
         <div className='daily-info-container'>
            <div className='daily-items-width'>
              <p>Humidity:</p>
              <p>Min:</p>
              <p>Max:</p> 
              <p>Rain:</p>
              <p>Wind Speed:</p>
              <p>Precipitation:</p>
            </div>

            <div className='daily-info-p'>
              <p>{item.day.avghumidity}%</p>
              <p>{item.day.mintemp_f}F°</p>
              <p>{item.day.maxtemp_f}F°</p>
              <p>{item.day.daily_chance_of_rain}%</p>
              <p>{item.day.maxwind_mph}mph</p>
              <p>{item.day.totalprecip_in}in.</p>
            </div>
          </div>
  )
}

export default DailyInfo
