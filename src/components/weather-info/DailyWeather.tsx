import React, { useEffect, useState } from 'react'

function DailyWeather({ API_key }) {
  const [weatherFetch3, setWeatherFetch3]: any = useState([])
  const [city, setCity] = useState('London')
  const [accessor, setAccessor] = useState(0)


  async function weather3rd() {
    //* 3hour forecast
    
    const fetchedWeatherData = await fetch(`https://weather2020-weather-v1.p.rapidapi.com/city/e8ecee8ff60c478f8a36280fea0524fe/Kansas%20City,KS`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "1d71549b4cmsh4156346cab1016bp1c8053jsnf9d9a656d8ed",
        "x-rapidapi-host": "weather2020-weather-v1.p.rapidapi.com"
      }
    })
 
    const data = await fetchedWeatherData.json()
    setWeatherFetch3(data)
    console.log(data, 'DAILYDAILYDAILY')
  }

  useEffect(() => {
    weather3rd()
  }, [])

  return (
    <div>

    </div>
  )
}

export default DailyWeather
