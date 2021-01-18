import React, { useEffect, useState } from 'react'
import { isAsExpression } from 'typescript';
import LocationHourly from './LocationHourly';

function Hourly({ YOUR_API_KEY }) {
  const [weatherLocationToday, setWeatherLocationToday]: any = useState([])
  const [weatherLocationTom, setWeatherLocationTom]: any = useState([])
  const [weatherLocationNext, setWeatherLocationNext]: any = useState([])
  const [weatherLocationDate, setWeatherLocationDate]: any = useState([])
  const [listOpenById, setListOpenById] = useState<number>(null)
  const [accessor, setAccessor] = useState(0)

  const weekThree = `http://api.weatherapi.com/v1/forecast.json?key=${YOUR_API_KEY}&q=07112&days=7`

  async function weather() {
    const fetchedWeather = await fetch(weekThree)
    const data = await fetchedWeather.json()
    setWeatherLocationToday(data.forecast.forecastday[0].hour)
    setWeatherLocationTom(data.forecast.forecastday[1].hour)
    setWeatherLocationNext(data.forecast.forecastday[2].hour)
    setWeatherLocationDate(data.forecast.forecastday[accessor])
    console.log(data, 'dsffffffffffffffffffff')
  }

  useEffect(() => {
    weather()
  }, [])

  return (
    <div className='backgroundContainer'>
      <div>
        <div className='hourlyContainer' style={{ textAlign: 'center' }}>
          <div>
            <p className={`optionsText ${accessor === 0 ? 'optionsOn' : 'optionsText'}`} onClick={() => setAccessor(0)}>Today</p>
            <hr color={`#9b9b9b ${accessor === 0 ? '#000000' : '#828282'}`} className={`lineOff ${accessor === 0 ? 'lineOn' : 'lineOff'}`} />
            <p className={`textBelow ${accessor === 0 ? 'textOn' : 'textBelow'}`}>{weatherLocationDate.date}</p>
          </div>
          <div>
            <p className={`optionsText ${accessor === 1 ? 'optionsOn' : 'optionsText'}`} onClick={() => setAccessor(1)}>Tomorrow</p>
            <hr color={`#9b9b9b ${accessor === 1 ? '#000000' : '#828282'}`} className={`lineOff ${accessor === 0 ? 'lineOn' : 'lineOff'}`} />
            <p className={`textBelow ${accessor === 1 ? 'textOn' : 'textBelow'}`}>{weatherLocationDate.date}</p>
          </div>
          <div>
            <p className={`optionsText ${accessor === 2 ? 'optionsOn' : 'optionsText'}`} onClick={() => setAccessor(2)}>Day After</p>
            <hr color={`#9b9b9b ${accessor === 2 ? '#000000' : '#828282'}`} className={`lineOff ${accessor === 0 ? 'lineOn' : 'lineOff'}`} />
            <p className={`textBelow ${accessor === 2 ? 'textOn' : 'textBelow'}`}>{weatherLocationDate.date}</p>
          </div>
        </div>
      </div>

      <div className='hourlyContainer' style={{ display: accessor === 0 ? 'flex' : 'none' }}>
        <div>
          {weatherLocationToday.map((item, id) =>
            <LocationHourly
              item={item}
              id={id}
              setListOpenById={setListOpenById}
              listOpenById={listOpenById}
            />
          )}
        </div>
      </div>


      <div className='hourlyContainer' style={{ display: accessor === 1 ? 'flex' : 'none' }}>
        <div>
          {weatherLocationTom.map((item, id) =>
            <LocationHourly
              item={item}
              id={id}
              setListOpenById={setListOpenById}
              listOpenById={listOpenById}
            />
          )}
        </div>
      </div>


      <div className='hourlyContainer' style={{ display: accessor === 2 ? 'flex' : 'none' }}>
        <div>
          {weatherLocationNext.map((item, id) =>
            <LocationHourly
              item={item}
              id={id}
              setListOpenById={setListOpenById}
              listOpenById={listOpenById}
            />
          )}
        </div>
      </div>
    </div >

  )
}

export default Hourly
