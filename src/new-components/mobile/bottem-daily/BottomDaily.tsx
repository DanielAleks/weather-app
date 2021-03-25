import Nav from './nav/Nav'
import Hourly from './hourly/Hourly'
import Daily from '../../../reusables/daily/Daily'
import './bottem-daily.sass'

function BottomDaily({ weatherForecast, isDaily, accessor, setAccessor, setIsDaily, city, setIsModal, setCity, weather, isModal, area, whichImage }) {
  return (
    <div className='bottem-daily-container'>
      <div className='bg-bottom-daily' />

      <Nav
        city={city}
        setIsModal={setIsModal}
        setCity={setCity}
        weather={weather}
        isModal={isModal}
        area={area}
        whichImage={whichImage}
        setIsDaily={setIsDaily}
      />

      {isDaily &&
        <Daily
          weatherForecast={weatherForecast}
          accessor={accessor}
          setAccessor={setAccessor}
        />
      }
      {!isDaily &&
        <Hourly weatherForecast={weatherForecast} />
      }
    </div>
  )
}

export default BottomDaily
