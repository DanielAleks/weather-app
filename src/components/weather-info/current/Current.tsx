import React, { useEffect, useState } from 'react'
import CurrentTitle from './info/CurrentTitle'
import './x-current.sass'
import CurrentInfo from './info/CurrentInfo'
import Circle from './circle/Circle'

function Current({ YOUR_API_KEY, city }) {
  const [weatherCurrent, setWeatherCurrent]: any = useState([])
  const [weatherPhase, setWeatherPhase]: any = useState([])
  const [weatherIcon, setWeatherIcon]: any = useState([])

  const current = `http://api.weatherapi.com/v1/current.json?key=${YOUR_API_KEY}&q=${city}`
  const weekThree = `http://api.weatherapi.com/v1/forecast.json?key=${YOUR_API_KEY}&q=${city}&days=7`

  async function weather() {
    const fetchedWeatherData = await fetch(current)
    const data = await fetchedWeatherData.json()
    setWeatherCurrent(data.current) 
    setWeatherIcon(data.current.condition)
  }

  async function weather2nd() {
    const fetchedWeatherData = await fetch(weekThree)
    const data = await fetchedWeatherData.json()
    setWeatherPhase(data.forecast.forecastday[0].astro)
  }

  useEffect(() => {
    weather()
    weather2nd()
  }, [city])

  return (

    <div className='current-section' id='Today'>
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

      <Circle
        weatherCurrent={weatherCurrent}
        weatherIcon={weatherIcon}
      />
    </div>
  )
}

export default Current
