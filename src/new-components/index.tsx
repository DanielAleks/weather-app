import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import Current from '../components/weather-info/current/Current';
import Daily from '../components/weather-info/daily/Daily';
import Hourly from '../components/weather-info/hourly/Hourly';
import SearchBar from '../components/top-section/search-bar/SearchBar';
import ImageSection from '../components/top-section/image-section/ImageSection';
import './index.sass'
import PineApples from '../components/pineapples/PineApples';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BottomDaily from './mobile/bottem-daily/BottomDaily';
import TopInfo from './mobile/top-info/TopInfo';
import DailyDesktop from './desktop/right-column/DailyDesktop';
import HourlyDesktop from './desktop/bottom-column/HourlyDesktop';
import NavDesktop from './desktop/nav/NavDesktop';

AOS.init({
  once: true
});


function Index() {
  const [city, setCity]: any = useState('London')
  const [weatherLocation, setWeatherLocation]: any = useState([])
  const [weatherCurrent, setWeatherCurrent]: any = useState([])
  const [area, setArea]: any = useState([])
  const [weatherForecast, setWeatherForecast]: any = useState([])
  const [isDaily, setIsDaily] = useState(true)

  const YOUR_API_KEY = '32902a43900f400cae0210316210701'
  const commonNames = `https://api.weatherapi.com/v1/search.json?key=${YOUR_API_KEY}&q=${city}`
  const current = `https://api.weatherapi.com/v1/current.json?key=${YOUR_API_KEY}&q=${city}`
  const weekThree = `https://api.weatherapi.com/v1/forecast.json?key=${YOUR_API_KEY}&q=${city}&days=7`

  async function weather() {
    const fetchedWeatherData = await fetch(current)
    const data = await fetchedWeatherData.json()
    setWeatherLocation(data.location)
    setWeatherCurrent(data.current)
    console.log(data, 'current DATA DANIEL')

  }
  async function places() {
    const fetchedWeatherData = await fetch(commonNames)
    const data = await fetchedWeatherData.json()
    setArea(data)
  }
  async function weatherForcast() {
    const fetchedWeatherData = await fetch(weekThree)
    const data = await fetchedWeatherData.json()
    setWeatherForecast(data.forecast && data.forecast.forecastday[1])
    console.log(data, 'weekThree DATA DANIEL')
  }

  useEffect(() => {
    weather()
    places()
    weatherForcast()
  }, [city])

  return (
    <div className='project-container'>
      <div className='bg-main-index' />
      <TopInfo
        weatherLocation={weatherLocation}
        weatherCurrent={weatherCurrent}
      />
      {/* <BottomDaily
        isDaily={isDaily}
        setIsDaily={setIsDaily}
        weatherForecast={weatherForecast}
      />                 */}

      <NavDesktop/>
      <DailyDesktop weatherForecast={weatherForecast} />
      <HourlyDesktop weatherForecast={weatherForecast}/>
    </div>
  )
}



export default Index
