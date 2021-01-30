import React from 'react'
import './x-currentInfo.sass'

function CurrentTitle() {
  return (
    <div className='current-info-words'>
      <div>
        <p>Humidity:</p>
        <p>Precipitation:</p>
        <p>Gust:</p>
        <p>Pressure:</p>
        <p>Visability:</p> 
        <p>Wind Dir:</p>
        <p>Wind Speed:</p>
        {/* <p>Description:</p> */}
      </div>
      <div style={{ marginTop: 40 }}> 
        <p>Moon Phase: </p>
        <p>Sunrise: </p>
        <p>Sunset: </p>
        <p>Moonset: </p>
        <p>MoonRise: </p>
      </div>
    </div>
  )
}

export default CurrentTitle
