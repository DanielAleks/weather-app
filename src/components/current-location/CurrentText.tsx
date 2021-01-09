import React, { useEffect, useState } from 'react'
import { BsCloud } from 'react-icons/bs'
import { HomeDailyWeather } from '../../reusables/DynamicStuff'
import './current.sass'

function CurrentText() {
  const [weatherFetch, setWeatherFetch]: any = useState()
  const [city, setCity] = useState('london')
  const [state_code, setState_code] = useState('')
  const [country_code, setCountry_code] = useState('')
  const [isActive, setIsActive] = useState(false)

  const API_key = "32f3b397668a2fd0f83f5e6f0e4c6375"
  async function weather() {
    const fetchedWeatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${state_code},${country_code}&appid=${API_key}`)
    const data = await fetchedWeatherData.json()
    setWeatherFetch(data)
    // console.log(data, 'data1')
  }

  useEffect(() => {
    weather()
  }, [])

  const weatherStuff = `${weatherFetch && weatherFetch.main.temp_min} ${weatherFetch && weatherFetch.main.temp_max}`

  const weatherData: any[] = [
    { day: 'Wednesday', weather: weatherStuff, icon: BsCloud },
    { day: 'Thursday', weather: weatherStuff, icon: BsCloud },
    { day: 'Friday', weather: weatherStuff, icon: BsCloud },
    { day: 'Saturday', weather: weatherStuff, icon: BsCloud },
    { day: 'feels-like', weather: `${weatherFetch && weatherFetch.main.feels_like}`, icon: BsCloud },
    { day: 'humidity & Pressure', weather: `${weatherFetch && weatherFetch.main.humidity}, ${weatherFetch && weatherFetch.main.pressure}`, icon: BsCloud },
    { day: 'Description', weather: `${weatherFetch && weatherFetch.weather[0].description}`, icon: BsCloud },
    { day: 'Wind Deg. & Speed', weather: `${weatherFetch && weatherFetch.wind.deg}, ${weatherFetch && weatherFetch.wind.speed}`, icon: BsCloud },
  ]

  return (
    <div className="mainText">
      <h1 style={{ marginTop: 50 }}>{weatherFetch && weatherFetch.name}</h1>
      <h3 style={{ letterSpacing: 2 }}>09:30 am</h3>
      <h4>May 30</h4>
      <h6 style={{}}>Wednesday</h6>
      <BsCloud size={40} color='white' style={{ marginTop: 50, marginBottom: -10 }} />
      <h1>{weatherFetch && weatherFetch.main.temp}K°</h1>

      <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />

      <div style={{ marginTop: 50 }}>
        <HomeDailyWeather weatherData={weatherData[0]} />
        <HomeDailyWeather weatherData={weatherData[1]} />
        <HomeDailyWeather weatherData={weatherData[2]} />
        <HomeDailyWeather weatherData={weatherData[3]} />
        {isActive ?
          <div>
            <HomeDailyWeather weatherData={weatherData[4]} />
            <HomeDailyWeather weatherData={weatherData[5]} />
            <HomeDailyWeather weatherData={weatherData[6]} />
            <HomeDailyWeather weatherData={weatherData[7]} />
          </div>
          : null}
          <button onClick={() => setIsActive(prev => !prev)}>On</button>
      </div>
    </div>
  )
}

export default CurrentText
