import React from 'react'
import './x-currentInfo.sass'

function CurrentInfo({ weatherCurrent, weatherPhase }) {
  return (
    <div>
      <div className='top-info'>
        <p>{weatherCurrent.humidity}%</p>
        <p>{weatherCurrent.precip_in}in.</p>
        <p>{weatherCurrent.gust_mph}mph</p>
        <p>{weatherCurrent.pressure_in} in.</p>
        <p>{weatherCurrent.vis_miles} miles</p>
        <p>{weatherCurrent.wind_degree}°{weatherCurrent.wind_dir}</p>
        <p>{weatherCurrent.wind_mph}mph</p>
        {/* <p>{weatherCurrent.condition.text}</p> */}
      </div>
      <div className='bottom-info'>
        <p>{weatherPhase.moon_phase}</p>
        <p>{weatherPhase.sunrise}</p>
        <p>{weatherPhase.sunset}</p>
        <p>{weatherPhase.moonset}</p>
        <p>{weatherPhase.moonrise}</p>
      </div>
    </div>
  )
}

export default CurrentInfo
