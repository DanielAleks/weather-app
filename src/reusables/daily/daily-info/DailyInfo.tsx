import React from 'react'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import './daily-info.sass'

function DailyInfo({ item, accessor, setAccessor }) {
  return (
    <div className='daily-info-container'>
      <div className='daily-info-outer-container' >
        <div className='daily-items-width'>
          <p>Humidity:</p>
          <p>Min:</p>
          <p>Max:</p>
          <p>Rain:</p>
          <p>Wind Speed:</p>
          <p>Precipitation:</p>
        </div>

        <div className='daily-info-p'>
          <p>{item && item[accessor]?.day.avghumidity}%</p>
          <p>{item && item[accessor]?.day.mintemp_f}F°</p>
          <p>{item && item[accessor]?.day.maxtemp_f}F°</p>
          <p>{item && item[accessor]?.day.daily_chance_of_rain}%</p>
          <p>{item && item[accessor]?.day.maxwind_mph}mph</p>
          <p>{item && item[accessor]?.day.totalprecip_in}in.</p>
        </div>
      </div>

      <div className='daily-day-headers'>
        <div className='daily-before' onClick={() => setAccessor(accessor - 1)} >
          <IoIosArrowBack size={30} color='#e6e6e6' />
          <p>{item && item[accessor - 1]?.date}</p>
        </div>

        <div className='daily-after' onClick={() => setAccessor(accessor + 1)}>
          <p>{item && item[accessor + 1]?.date}</p>
          <IoIosArrowForward size={30} color='#e6e6e6' />
        </div>
      </div>

    </div>
  )
}

export default DailyInfo
