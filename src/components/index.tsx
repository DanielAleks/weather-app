import React, { useEffect, useState } from 'react';
import Navbar from './navbar/Navbar';
import Current from './weather-info/current/Current';
import Daily from './weather-info/daily/Daily';
import Hourly from './weather-info/hourly/Hourly';
import SearchBar from './top-section/search-bar/SearchBar';
import ImageSection from './top-section/image-section/ImageSection';
import './index.sass'
import PineApples from './pineapples/PineApples';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BottomDaily from '../new-components/mobile/bottem-daily/BottomDaily';
import TopInfo from '../new-components/mobile/top-info/TopInfo';

AOS.init({
  once: true
});


function Index() {
  const [city, setCity]: any = useState('London')
  const [weatherLocation, setWeatherLocation]: any = useState([])
  const [weatherCurrent, setWeatherCurrent]: any = useState([])
  const [area, setArea]: any = useState([])
  const [weatherCondition, setWeatherCondition]: any = useState([])
  const [isModal, setIsModal] = useState(true)
  const [weatherForecast, setWeatherForecast]: any = useState([])
  const [weatherPhase, setWeatherPhase]: any = useState([])

  const YOUR_API_KEY = '32902a43900f400cae0210316210701'
  const commonNames = `https://api.weatherapi.com/v1/search.json?key=${YOUR_API_KEY}&q=${city}`
  const current = `https://api.weatherapi.com/v1/current.json?key=${YOUR_API_KEY}&q=${city}`
  const weekThree = `https://api.weatherapi.com/v1/forecast.json?key=${YOUR_API_KEY}&q=${city}&days=7`

  async function weather() {
    const fetchedWeatherData = await fetch(current)
    const data = await fetchedWeatherData.json()
    setWeatherLocation(data.location)
    setWeatherCurrent(data.current)
    setWeatherCondition(data.current && data.current.condition)
    console.log(data, 'daniel right here catch me!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')

  }
  async function places() {
    const fetchedWeatherData = await fetch(commonNames)
    const data = await fetchedWeatherData.json()
    setArea(data)
  }
  async function weatherForcast() {
    const fetchedWeatherData = await fetch(weekThree)
    const data = await fetchedWeatherData.json()
    setWeatherForecast(data.forecast && data.forecast.forecastday)
    setWeatherPhase(data.forecast && data.forecast.forecastday[0].astro)
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
        weatherCondition={weatherCondition}
        weatherCurrent={weatherCurrent}
      />
      <BottomDaily
        weatherForecast={weatherForecast}
      />
    </div>
  )
}



export default Index
