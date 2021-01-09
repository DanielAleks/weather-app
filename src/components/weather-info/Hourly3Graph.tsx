import React, { useEffect, useState } from 'react'

function Hourly3Graph({API_key}) {
  const [weatherFetch3, setWeatherFetch3]: any = useState([])
  const [city, setCity] = useState('London')


  async function weather3rd() {
    //* 3hour forecast
    const fetchedWeatherData = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_key}`)
    const data = await fetchedWeatherData.json()
    setWeatherFetch3(data.list)
    console.log(data, 'data3')
  }

  useEffect(() => {
    weather3rd()
  }, [])

  return (
    <div>
<h1>Weather every 3 Hours</h1>

      <ul style={{ display: 'flex', flexWrap: 'wrap', }}>
        {weatherFetch3.map((item, id) => (
          <div key={id} style={{ margin: 10, borderWidth: 1, borderStyle: "solid", borderColor: 'red', }}>
            <li>{item.main.temp}°</li>
            <li>{item.main.humidity}%</li>
            <li>Feels Like {item.main.feels_like}°</li>
            <li>{item.dt_txt}</li>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default Hourly3Graph
