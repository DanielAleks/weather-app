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

AOS.init({
  once: true
});


function Index() {
  const [city, setCity]: any = useState('Mt. Yoshino, Japan')
  const [weatherLocation, setWeatherLocation]: any = useState([])
  const [weatherCurrent, setWeatherCurrent]: any = useState([])
  const [area, setArea]: any = useState([])
  const [isModal, setIsModal] = useState(true)


  const YOUR_API_KEY = '32902a43900f400cae0210316210701'
  const commonNames = `https://api.weatherapi.com/v1/search.json?key=${YOUR_API_KEY}&q=${city}`
  const current = `https://api.weatherapi.com/v1/current.json?key=${YOUR_API_KEY}&q=${city}`

  async function weather() {
    const fetchedWeatherData = await fetch(current)
    const data = await fetchedWeatherData.json() 
    setWeatherLocation(data.location)
    setWeatherCurrent(data.current)
  }

  async function places() {
    const fetchedWeatherData = await fetch(commonNames)
    const data = await fetchedWeatherData.json()
    setArea(data)
  }

  useEffect(() => {
    weather()
    places()
  }, [city])

  return (
    <div>
      <Navbar />
      {/* <PineApples /> */}
      <div className="project-container">
        <ImageSection
          city={city}
          weatherLocation={weatherLocation}
          weatherCurrent={weatherCurrent}
        /> 

        <SearchBar
          area={area}
          city={city}
          weather={weather}
          setCity={setCity} 
          isModal={isModal}
          setIsModal={setIsModal}
        />

        <Current city={city} YOUR_API_KEY={YOUR_API_KEY} />
        <Daily city={city} YOUR_API_KEY={YOUR_API_KEY} />
        <Hourly city={city} YOUR_API_KEY={YOUR_API_KEY} />
      </div>
    </div>
  )
}

export default Index
