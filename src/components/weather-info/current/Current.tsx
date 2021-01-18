import React, { useEffect, useState } from 'react'
import './x-current.sass'
import MinuteGraph from '../daily/Daily'
import Hourly1Weather from '../hourly/Hourly'
import { RiArrowDropRightLine } from 'react-icons/ri'
import { BsCloud } from 'react-icons/bs'

function Current({ YOUR_API_KEY }) {
  const [weatherLocation, setWeatherLocation]: any = useState([])
  const [weatherCurrent, setWeatherCurrent]: any = useState([])
  const [weatherForcast, setWeatherForcast]: any = useState([])
  const [weatherPhase, setWeatherPhase]: any = useState([])

  const current = `http://api.weatherapi.com/v1/current.json?key=${YOUR_API_KEY}&q=London`
  const weekThree = `http://api.weatherapi.com/v1/forecast.json?key=${YOUR_API_KEY}&q=07112&days=7`


  async function weather() {
    const fetchedWeatherData = await fetch(current)
    const data = await fetchedWeatherData.json()
    setWeatherLocation(data.location)
    setWeatherCurrent(data.current)
    console.log(data, 'Today Today Today Today Today')
  }

  async function weather2nd() {
    const fetchedWeatherData = await fetch(weekThree)
    const data = await fetchedWeatherData.json()
    setWeatherForcast(data.forecast.current)
    setWeatherPhase(data.forecast.forecastday[0].astro)
    console.log(data, 'SCSCSCCSSCCSSCSCSCS')
  }

  useEffect(() => {
    weather()
    weather2nd()
    // weather2nd()
  }, [])

  return (
    <div style={{ height: '60vh', backgroundColor: '#1f1f1f' }}>

      <div style={{ display: 'flex', backgroundColor: '#181818', justifyContent: 'center' }}>


        <div style={{ display: 'flex', flexDirection: 'column', alignSelf: 'center', marginRight: '5vw' }}>
          <div className='mainTempCircle' style={{ height: '30vh', width: '15vw', borderRadius: '100%', flexDirection: 'column' }}>
            <p style={{ fontSize: 40, fontFamily: 'Nunito-bold' }}>{weatherCurrent.temp_f}F°</p>
            <p className='p'>{weatherCurrent.feelslike_f}</p>

            <BsCloud size={60} color='#7000cc' />
          </div>
          {/* //*<p>No Alerts Currently</p> */}
        </div>




        <div style={{ margin: 20, width: '20vw', backgroundColor: '#3a3a3a', borderRadius: 5 }}>
          <p style={{ fontSize: 40, textAlign: 'center', padding: '2vh', fontFamily: 'Nunito-bold' }}>Today</p>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 10 }}>

            <div style={{ width: '9vw' }}>
              <div>
                <p className='p'>Humidity:</p>
                <p className='p'>Precipitation:</p>
                <p className='p'>Gust:</p>
                <p className='p'>Pressure:</p>
                <p className='p'>Visability:</p>
                <p className='p'>Wind Direction:</p>
                <p className='p'>Wind Speed:</p>
                {/* <p className='p'>Description:</p> */}
              </div>
              <div style={{ marginTop: 40 }}>
                <p className='p'>Moon Phase: </p>
                <p className='p'>Sunrise: </p>
                <p className='p'>Sunset: </p>
                <p className='p'>Moonset: </p>
                <p className='p'>MoonRise: </p>
              </div>
            </div>

            <div>
              <div style={{ textAlign: 'end', width: '9vw' }}>
                <p className='p'>{weatherCurrent.humidity}%</p>
                <p className='p'>{weatherCurrent.precip_in}in.</p>
                <p className='p'>{weatherCurrent.gust_mph}mph</p>
                <p className='p'>{weatherCurrent.pressure_in} in.</p>
                <p className='p'>{weatherCurrent.vis_miles} miles</p>
                <p className='p'>{weatherCurrent.wind_degree}°{weatherCurrent.wind_dir}</p>
                <p className='p'>{weatherCurrent.wind_mph}mph</p>
                {/* <p className='p'>{weatherCurrent.condition.text}</p> */}
              </div>
              <div style={{ textAlign: 'end', marginTop: 40 }}>
                <p className='p'>{weatherPhase.moon_phase}</p>
                <p className='p'>{weatherPhase.sunrise}</p>
                <p className='p'>{weatherPhase.sunset}</p>
                <p className='p'>{weatherPhase.moonset}</p>
                <p className='p'>{weatherPhase.moonrise}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Current
