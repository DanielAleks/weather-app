import React, { useEffect, useState } from 'react'
import './info.sass'
import WeatherGraph from './WeatherGraph'
import MinuteGraph from './MinuteGraph'
import Hourly3Graph from './Hourly3Graph'
import Hourly1Weather from './hourly/Hourly1Weather'
import DailyWeather from './DailyWeather'
import { RiArrowDropRightLine } from 'react-icons/ri'

function WeatherInfo({ YOUR_API_KEY }) {
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
    setWeatherForcast(data.forecast.forecastday[0].day)
    setWeatherPhase(data.forecast.forecastday[0].astro)
    console.log(data, 'SCSCSCCSSCCSSCSCSCS')
  }

  useEffect(() => {
    weather()
    weather2nd()
    // weather2nd()
  }, [])

  return (
    <div style={{ height: 700, backgroundColor: '#1f1f1f' }}>
      <h1 style={{ display: 'flex', padding: 40 }}>
        Today
      <RiArrowDropRightLine size={50} color='#f8e009' className='infoIcons' style={{ justifyContent: 'flex-end' }} />
      </h1>

      <div style={{ display: 'flex', backgroundColor: '#181818', justifyContent: 'center' }}>
        
        <div>
          <div className='mainTempCircle'>
            <p style={{ fontSize: 25 }}>{weatherCurrent.temp_f}F°</p>
          </div>
          <div style={{display: 'flex'}}>
            <p>Tonight: /</p>
            <p>Tomorrow:</p>
          </div>

            <p>No Alerts Currently</p>
        </div>



        <div style={{ margin: 20, alignSelf: 'flex-end', justifyContent: 'center' }}>
          <p style={{ fontSize: 40 }}>Statistics:</p>
          <div style={{ display: 'flex', }}>

            <div>
              <div>
                <p>Max:</p>
                <p>Min:</p>
                <p>Max wind:</p>
                <p>Humidity:</p>
                <p>Total Precipitation:</p>
              </div>
              <div style={{ marginTop: 40 }}>
                <p>Moon Phase: </p>
                <p>Sunrise: </p>
                <p>Sunset: </p>
                <p>Moonset: </p>
                <p>MoonRise: </p>
              </div>
            </div>

            <div>
              <div style={{ textAlign: 'end' }}>
                <p>{weatherForcast.maxtemp_f}F°</p>
                <p>{weatherForcast.mintemp_f}F°</p>
                <p>{weatherForcast.maxwind_mph}mph</p>
                <p>{weatherForcast.avghumidity}%</p>
                <p>{weatherForcast.totalprecip_in}in</p>
              </div>
              <div style={{ textAlign: 'end', marginTop: 40 }}>
                <p>{weatherPhase.moon_phase}</p>
                <p>{weatherPhase.sunrise}</p>
                <p>{weatherPhase.sunset}</p>
                <p>{weatherPhase.moonset}</p>
                <p>{weatherPhase.moonrise}</p>
              </div>
            </div>
          </div>
        </div>
      </div>





      {/*//* need the other API <p style={{}}>Tonight: {} /</p>
        <p style={{}}>Tomorrow: </p> */}

    </div>
  )
}

export default WeatherInfo
