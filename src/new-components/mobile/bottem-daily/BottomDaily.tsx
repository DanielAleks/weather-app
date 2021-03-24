import Nav from './nav/Nav'
import Hourly from './hourly/Hourly'
import Daily from '../../../reusables/daily/Daily'
import './bottem-daily.sass'

function BottomDaily({ weatherForecast, isDaily, setIsDaily }) {
  return (
    <div className='bottem-daily-container'>
      <div className='bg-bottom-daily' />

      <Nav setIsDaily={setIsDaily} />

      {isDaily &&
        <Hourly weatherForecast={weatherForecast} />

        // <Daily weatherForecast={weatherForecast} /> 
      }

    </div>
  )
}

export default BottomDaily
