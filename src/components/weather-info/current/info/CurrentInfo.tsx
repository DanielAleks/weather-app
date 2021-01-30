import React from 'react'
import './x-currentInfo.sass'

function CurrentInfo({ weatherCurrent, weatherPhase }) {
  return (
    <div>
      <div className='top-info'>
        <p>{weatherCurrent && weatherCurrent.humidity}%</p>
        <p>{weatherCurrent && weatherCurrent.precip_in}in.</p>
        <p>{weatherCurrent && weatherCurrent.gust_mph}mph</p>
        <p>{weatherCurrent && weatherCurrent.pressure_in} in.</p>
        <p>{weatherCurrent && weatherCurrent.vis_miles} miles</p>
        <p>
          {weatherCurrent && weatherCurrent.wind_degree}°
          {weatherCurrent && weatherCurrent.wind_dir}
        </p>
        <p>{weatherCurrent && weatherCurrent.wind_mph}mph</p>
        {/* <p>{weatherCurrent.condition.text}</p> */}
      </div>
      <div className='bottom-info'>
        <p>{weatherPhase && weatherPhase.moon_phase}</p>
        <p>{weatherPhase && weatherPhase.sunrise}</p>
        <p>{weatherPhase && weatherPhase.sunset}</p>
        <p>{weatherPhase && weatherPhase.moonset}</p>
        <p>{weatherPhase && weatherPhase.moonrise}</p>
      </div>
    </div>
  )
}

export default CurrentInfo
