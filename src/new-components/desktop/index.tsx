import React from 'react'
import HourlyDesktop from './bottom-column/HourlyDesktop'
import NavDesktop from './nav/NavDesktop'
import DailyDesktop from './right-column/DailyDesktop'

function Desktop({ area, whichImage, weather, city, setCity, setIsModal, isModal, weatherForecast, accessor, setAccessor }) {
  return (
    <>
      <NavDesktop
        whichImage={whichImage}
        area={area}
        weather={weather}
        setCity={setCity}
        city={city}
        setIsModal={setIsModal}
        isModal={isModal}
      />
      <DailyDesktop
        weatherForecast={weatherForecast}
        accessor={accessor}
        setAccessor={setAccessor}
      />
      <HourlyDesktop weatherForecast={weatherForecast} />
    </>
  )
}

export default Desktop
