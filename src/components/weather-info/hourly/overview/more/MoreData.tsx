import React from 'react'
import './x-more.sass'

function OpenedData({ item }) { 
  return (
    <div className='containerInfoHourly'> 
      <div className='first-data-container'>
        <div className='first-text'>
          <p className='more-p'>DewPoint: </p>
          <p className='more-p'>Gust: </p> 
          <p className='more-p'>Ht-Index: </p>
          <p className='more-p'>Humidity: </p>
          <p className='more-p'>Precipitation: </p>
        </div>

        <div className='first-data'>
          <p className='more-p'>{item.dewpoint_f}F°</p>
          <p className='more-p'>{item.gust_mph}mph</p>
          <p className='more-p'>{item.heatindex_f}F°</p>
          <p className='more-p'>{item.humidity}%</p> 
          <p className='more-p'>{item.precip_in}in.</p>
        </div> 
      </div>

      <div className='second-data-container'>
        <div className='second-text'>
          <p className='more-p'>Visability: </p>
          <p className='more-p'>Wind Degree: </p>
          <p className='more-p'>Wind: </p>
          <p className='more-p'>Windchill: </p>
          <p className='more-p'>Pressure: </p>
        </div>
        <div className='second-data'>
          <p className='more-p'>{item.vis_miles}miles</p>
          <p className='more-p'>{item.wind_degree}° {item.wind_dir}</p>
          <p className='more-p'>{item.wind_mph}mph</p>
          <p className='more-p'>{item.windchill_f}F°</p>
          <p className='more-p'>{item.pressure_in}in.</p>
        </div>
      </div>
    </div>
  )
}

export default OpenedData
