import React from 'react'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'
import './hourly-desktop.sass'

function
  HourlyDesktop({ weatherForecast }) {

  const time = [
    '12AM', '1AM', '2AM', '3AM', '4AM', '5AM',
    '6AM', '7AM', '8AM', '9AM', '10AM', '11AM',
    '12PM', '1PM', '2PM', '3PM', '4PM', '5PM',
    '6PM', '7PM', '8PM', '9PM', '10PM', '11PM'
  ]

  return (
    <div className='hourlyD-container'>
      <div className='hourlyD-bg' />

      <div className='hourly-huge-arrows'>
        <FaArrowAltCircleLeft className='back-arrow' size={50} color='#F1C502' />
        <FaArrowAltCircleRight className='forward-arrow' size={50} color='#F1C502' />
      </div>

      <div className='hourlyD-outer-container'>
        {weatherForecast[0]?.hour && weatherForecast[0]?.hour.map((item, id) =>
          <div className='hourlyD-inner-container'> 
            <p className='o-time'>{time[id]}</p>
            <hr className='hourlyD-hr' color='white' />
            <img className='o-icon' src={item.condition.icon} alt="weather-icon" />
            <p className='o-temp'>{item.temp_f}F°</p>
            {/* <p className='o-text'>{item.condition.text}</p> */}
          </div>
        )}
      </div>

    </div>
  )
}

export default HourlyDesktop
