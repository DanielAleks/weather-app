import Nav from './nav/Nav'
import Daily from './daily/Daily'
import './bottem-daily.sass'
import Hourly from './hourly/Hourly'

function BottomDaily({ weatherForecast, isDaily, setIsDaily }) {
  return (
    <div className='bottem-daily-container'>
      <div className='bg-bottom-daily' />
      <Nav setIsDaily={setIsDaily} />

      {isDaily &&
        <Daily weatherForecast={weatherForecast} />
      }

      {isDaily === false ?
        <Hourly weatherForecast={weatherForecast} />
        : null
      }

    </div>
  )
}

export default BottomDaily
