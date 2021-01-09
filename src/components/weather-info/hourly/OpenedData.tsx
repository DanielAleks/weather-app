import React from 'react'

function OpenedData({item}) {
  return (
      <div style={{ color: '#3d3d3d', backgroundColor: '#1f1f1f', height: '18vh', display: 'flex', }}>
          <div style={{ display: 'flex', marginTop: 10, width: '17vw', justifyContent: 'center', marginLeft: '-7vw' }}>
            <div style={{ width: 200, }}>
              <p className='p' >DewPoint: </p>
              <p className='p'>Gust: </p>
              <p className='p'>Heat Index: </p>
              <p className='p' >Humidity: </p>
              <p className='p' >Precipitation: </p>
            </div>

            <div style={{ textAlign: 'end' }}>
              <p className='p'>{item.dewpoint_f}F°</p>
              <p className='p'>{item.gust_mph}mph</p>
              <p className='p'>{item.heatindex_f}F°</p>
              <p className='p'>{item.humidity}%</p>
              <p className='p'>{item.precip_in}in.</p>
            </div>
          </div>

          <div style={{ display: 'flex', margin: 10, width: '17vw', justifyContent: 'center' }}>
            <div style={{ width: 200 }}>
              <p className='p'>Visability: </p>
              <p className='p'>Wind Degree: </p>
              <p className='p'>Wind: </p>
              <p className='p'>Windchill: </p>
              <p className='p'>Pressure: </p>
            </div>
            <div style={{ textAlign: 'end' }}>
              <p className='p'>{item.vis_miles} miles</p>
              <p className='p'>{item.wind_degree}° {item.wind_dir}</p>
              <p className='p'>{item.wind_mph}mph</p>
              <p className='p'>{item.windchill_f}F°</p>
              <p className='p'>{item.pressure_in}in.</p>
            </div>

          </div>
        </div>
  )
}

export default OpenedData
