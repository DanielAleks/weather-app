import React, { useEffect, useState } from 'react'
import './search.sass'
import SearchRegion from './SearchRegion'

function SearchLocation({ YOUR_API_KEY }) {
  const [weatherLocation, setWeatherLocation]: any = useState([])
  const [weatherCurrent, setWeatherCurrent]: any = useState([])

  const commonNames = `http://api.weatherapi.com/v1/search.json?key=${YOUR_API_KEY}&q=Washi`

  const current = `http://api.weatherapi.com/v1/current.json?key=${YOUR_API_KEY}&q=London`


  async function weather() {
    const fetchedWeatherData = await fetch(current)
    const data = await fetchedWeatherData.json()
    setWeatherLocation(data.location)
    setWeatherCurrent(data.current)
    console.log(data, 'TOPINFOTOPINFOTOPINFOTOPINFOTOPINFOTOPINFOTOPINFO')
  }
 

  useEffect(() => {
    weather()
  }, [])

  
  return (
    <div className="navImage">
      <div className="navBg">

        <div className='currentContainer'>
          <p style={{fontSize: 30, color: '#c4c2c2'}}>{weatherLocation.name}</p>
          <p style={{fontSize: 20, color: '#505050'}}>{weatherLocation.localtime}</p>
          <p style={{fontSize: 70, color: '#9500ff'}}>{weatherCurrent.temp_f}F°</p>
        </div>
      </div>
    </div>
  )
}

export default SearchLocation
