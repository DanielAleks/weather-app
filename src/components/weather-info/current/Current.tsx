import React, { useEffect, useState } from 'react'
import CurrentTitle from './info/CurrentTitle'
import { BsCloud } from 'react-icons/bs'
import './x-current.sass'
import CurrentInfo from './info/CurrentInfo'
import Circle from './circle/Circle'

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

    <div className='current-section'>
      <Circle weatherCurrent={weatherCurrent} />

      <div className='current-container'>
        <p className='current-header'>Today</p>
        <div className='current-info'>
          <CurrentTitle />

          <CurrentInfo
            weatherCurrent={weatherCurrent}
            weatherPhase={weatherPhase}
          />
          {/* //? weatherCurrent.description is commented in both */}
        </div>
      </div>
    </div>
  )
}

export default Current
