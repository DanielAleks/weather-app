import React, { useEffect, useState } from 'react'
import './x-imgSection.sass'

function SearchBar({ YOUR_API_KEY }) {
  const [weatherLocation, setWeatherLocation]: any = useState([])
  const [weatherCurrent, setWeatherCurrent]: any = useState([])

  const commonNames = `http://api.weatherapi.com/v1/search.json?key=${YOUR_API_KEY}&q=Washi`
  const current = `http://api.weatherapi.com/v1/current.json?key=${YOUR_API_KEY}&q=London`

  async function weather() {
    const fetchedWeatherData = await fetch(current)
    const data = await fetchedWeatherData.json()
    setWeatherLocation(data.location)
    setWeatherCurrent(data.current)
  }

  useEffect(() => {
    weather()
  }, [])
  
  return (
    <div className="top-image">
      <div className="image-bg">

        <div className='top-container'>
          <p className='top-name'>{weatherLocation.name}</p>
          <p className='top-local'>{weatherLocation.localtime}</p>
          <p className='top-temp'>{weatherCurrent.temp_f}F°</p>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
