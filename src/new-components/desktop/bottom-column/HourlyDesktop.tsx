import React, { useState } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'
import './hourly-desktop.sass'

function HourlyDesktop({ weatherForecast }) {
  const [x, setX] = useState(-35)

  const time = [
    '12AM', '1AM', '2AM', '3AM', '4AM', '5AM',
    '6AM', '7AM', '8AM', '9AM', '10AM', '11AM',
    '12PM', '1PM', '2PM', '3PM', '4PM', '5PM',
    '6PM', '7PM', '8PM', '9PM', '10PM', '11PM'
  ]

  const onRightHandler = () =>
    x < -70 ? setX(x) : setX(x - 10)
  const onLeftHandler = () =>
    x > 0 ? setX(x) : setX(x + 10)

  return (
    <div className='hourlyD-container'>
      <div className='hourlyD-bg' />

      <div className='hourly-huge-arrows'>
        <FaArrowAltCircleLeft className='back-arrow'
          size={80} color='#F1C502'
          onClick={onLeftHandler} 
        />
        <FaArrowAltCircleRight className='forward-arrow'
          size={80} color='#F1C502'
          onClick={onRightHandler}
        />
      </div>
      <hr style={{width: '100%', position: 'absolute', top: '5.5rem'}} color='white' />

      <div className='hourlyD-outer-container'
        style={{ transition: 'transform 1s' ,transform: `translateX(${x}%)` }}
      >
        {weatherForecast && weatherForecast[0]?.hour.map((item, id) =>
          <div className='hourlyD-inner-container'>
            <p className='D-time'>{time[id]}</p>
            <hr className='hourlyD-hr' color='white' />
            <img className='D-icon' src={item.condition.icon} alt="weather-icon" />
            <p className='D-temp'>{item.temp_f}F°</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default HourlyDesktop
