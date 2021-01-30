import React from 'react'
import './x-more.sass'

function OpenedData({ item }) {
  return (
    <div className='containerInfoHourly'>
      <div className='first-data-container'>
        <div style={{ width: 200 }}>
          <p >DewPoint: </p>
          <p>Gust: </p> 
          <p>Heat Index: </p>
          <p >Humidity: </p>
          <p >Precipitation: </p>
        </div>

        <div style={{ textAlign: 'end' }}>
          <p>{item.dewpoint_f}F°</p>
          <p>{item.gust_mph}mph</p>
          <p>{item.heatindex_f}F°</p>
          <p>{item.humidity}%</p> 
          <p>{item.precip_in}in.</p>
        </div>
      </div>

      <div className='second-data-container'>
        <div style={{ width: 200 }}>
          <p>Visability: </p>
          <p>Wind Degree: </p>
          <p>Wind: </p>
          <p>Windchill: </p>
          <p>Pressure: </p>
        </div>
        <div style={{ textAlign: 'end' }}>
          <p>{item.vis_miles} miles</p>
          <p>{item.wind_degree}° {item.wind_dir}</p>
          <p>{item.wind_mph}mph</p>
          <p>{item.windchill_f}F°</p>
          <p>{item.pressure_in}in.</p>
        </div>
      </div>
    </div>
  )
}

export default OpenedData
