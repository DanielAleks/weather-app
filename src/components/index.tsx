import React, { useEffect, useState } from 'react';
import Navbar from './navbar/Navbar';
import Current from './weather-info/current/Current';
import Daily from './weather-info/daily/Daily';
import Hourly from './weather-info/hourly/Hourly';
import SearchBar from './top-section/search-bar/SearchBar';
import ImageSection from './top-section/image-section/ImageSection';
import './index.sass'

function Index() {
  const [city, setCity]: any = useState('Honolulu, Hawaii')
  const [weatherLocation, setWeatherLocation]: any = useState([])
  const [weatherCurrent, setWeatherCurrent]: any = useState([])
  const [area, setArea]: any = useState([])
  const [isModal, setIsModal] = useState(true)
  const [pinew, setPinew] = useState(70)
  const [pineh, setPineh] = useState(70)
  const [pine1w, setPine1w] = useState(70)
  const [pine1h, setPine1h] = useState(70)
  const [pine2w, setPine2w] = useState(70)
  const [pine2h, setPine2h] = useState(70)

  const YOUR_API_KEY = '32902a43900f400cae0210316210701'
  const commonNames = `http://api.weatherapi.com/v1/search.json?key=${YOUR_API_KEY}&q=${city}`
  const current = `http://api.weatherapi.com/v1/current.json?key=${YOUR_API_KEY}&q=${city}`

  async function weather() {
    const fetchedWeatherData = await fetch(current)
    const data = await fetchedWeatherData.json()
    setWeatherLocation(data.location)
    setWeatherCurrent(data.current)
    console.log(data, 'weather')
  }

  async function places() {
    const fetchedWeatherData = await fetch(commonNames)
    const data = await fetchedWeatherData.json()
    setArea(data)
    console.log(data, 'places')
  }

  useEffect(() => {
    weather()
    places()
  }, [city])

  useEffect(() => {
    const interval = setInterval(
      () =>
        setPinew(Math.floor(Math.random() * 100)),
      35000,
      setPineh(Math.floor(Math.random() * 90)),
      35000
    );
    const interval1 = setInterval(
      () =>
        setPine1w(Math.floor(Math.random() * 100)),
      19000,
      setPine1h(Math.floor(Math.random() * 90)),
      19000
    );
    const interval2 = setInterval(
      () =>
        setPine2w(Math.floor(Math.random() * 100)),
      50000,
      setPine2h(Math.floor(Math.random() * 90)),
      50000
    );

    return () => {
      clearInterval(interval);
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);

  return (
    <div>
      <div className='pine-apple-container'>
        <div className="pine-apple" style={{ bottom: `${pineh}vh`, left: `${pinew}vw` }}></div>
        <div className="pine-apple2" style={{ bottom: `${pine1h}vh`, left: `${pine1w}vw` }}></div>
        <div className="pine-apple3" style={{ bottom: `${pine2h}vh`, left: `${pine2w}vw` }}></div>
      </div>

      <Navbar />
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

        {/* //* TODAY */}
        <Current city={city} YOUR_API_KEY={YOUR_API_KEY} />
        {/* //*DAILY */}
        <Daily city={city} YOUR_API_KEY={YOUR_API_KEY} />
        {/* //*HOURLY */}
        <Hourly city={city} YOUR_API_KEY={YOUR_API_KEY} />
      </div>
    </div>
  )
}

export default Index
