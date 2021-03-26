import React, { useEffect, useState } from 'react';
import BottomDaily from './mobile/bottem-daily/BottomDaily';
import TopInfo from './mobile/top-info/TopInfo';
import DailyDesktop from './desktop/right-column/DailyDesktop';
import HourlyDesktop from './desktop/bottom-column/HourlyDesktop';
import NavDesktop from './desktop/nav/NavDesktop';
import './index.sass'
import Desktop from './desktop';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

function Index({ city, setCity, imageState, whichImage }) {
  const size = useWindowSize()
  const [weatherLocation, setWeatherLocation]: any = useState([])
  const [weatherCurrent, setWeatherCurrent]: any = useState([])
  const [area, setArea]: any = useState([])
  const [weatherForecast, setWeatherForecast]: any = useState([])
  const [isDaily, setIsDaily] = useState(true)
  const [isModal, setIsModal] = useState(false)
  const [accessor, setAccessor] = useState(1)

  const accessorLimits = () => {
    if (accessor === - 1) {
      setAccessor(0)
    } else if (accessor === 3) {
      setAccessor(2)
    }
  }

  const YOUR_API_KEY = '32902a43900f400cae0210316210701'
  const commonNames = `https://api.weatherapi.com/v1/search.json?key=${YOUR_API_KEY}&q=${city}`
  const current = `https://api.weatherapi.com/v1/current.json?key=${YOUR_API_KEY}&q=${city}`
  const weekThree = `https://api.weatherapi.com/v1/forecast.json?key=${YOUR_API_KEY}&q=${city}&days=7`

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

  async function weatherForcast() {
    const fetchedWeatherData = await fetch(weekThree)
    const data = await fetchedWeatherData.json()
    setWeatherForecast(data.forecast && data.forecast.forecastday)
  }

useEffect(() => {
  weather()
  places()
  weatherForcast()
  whichImage()
}, [city])

  useEffect(() => {
    accessorLimits()
  }, [accessor])

  return (
    <div className='project-container'>
      <div className='bg-main-index' >

        <img className='dynamic-image' src={imageState} />

        <TopInfo
          weatherLocation={weatherLocation}
          weatherCurrent={weatherCurrent}
        />
        {size.width < 1000 &&
          <BottomDaily
            city={city}
            setIsModal={setIsModal}
            setCity={setCity}
            weather={weather}
            isModal={isModal}
            area={area}
            whichImage={whichImage}
            setIsDaily={setIsDaily}
            accessor={accessor}
            setAccessor={setAccessor}
            isDaily={isDaily}
            weatherForecast={weatherForecast}
          />
        }

        {size.width > 1000 &&
          <>
            <Desktop
              whichImage={whichImage}
              area={area}
              weather={weather}
              setCity={setCity}
              city={city}
              setIsModal={setIsModal}
              isModal={isModal}
              weatherForecast={weatherForecast}
              accessor={accessor}
              setAccessor={setAccessor}
            />

          </>
        }
      </div>
    </div>
  )
}



export default Index
