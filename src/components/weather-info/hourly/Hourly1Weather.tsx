import React, { useEffect, useState } from 'react'
import '.././info.sass'
import LocationHourly from './LocationHourly';
import TimeHourly from './TimeHourly';


function Hourly1Weather({ YOUR_API_KEY }) {
  const [weatherLocationToday, setWeatherLocationToday]: any = useState([])
  const [weatherLocationTom, setWeatherLocationTom]: any = useState([])
  const [weatherLocationNext, setWeatherLocationNext]: any = useState([])
  const [weatherLocationDate, setWeatherLocationDate]: any = useState([])
  const [listOpenById, setListOpenById] = useState<number>(null)
  const [accessor, setAccessor] = useState(0)

  const weekThree = `http://api.weatherapi.com/v1/forecast.json?key=${YOUR_API_KEY}&q=07112&days=7`
  const time = ['12AM', '1AM', '2AM', '3AM', '4AM', '5AM', '6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM', '11PM']


  async function weather() {
    const fetchedWeather = await fetch(weekThree)
    const data = await fetchedWeather.json()
    setWeatherLocationToday(data.forecast.forecastday[0].hour)
    setWeatherLocationTom(data.forecast.forecastday[1].hour)
    setWeatherLocationNext(data.forecast.forecastday[2].hour)
    setWeatherLocationDate(data.forecast.forecastday[0].date)
    console.log(data, 'dsffffffffffffffffffff')
  }

  useEffect(() => {
    weather()
  }, [])

  return (
    <div className='backgroundContainer'>
      <div>
        <div className='hourlyContainer' style={{ textAlign: 'center' }}>
          <p className='optionsText' onClick={() => setAccessor(0)}>Today</p>
          <p className='optionsText' onClick={() => setAccessor(1)}>Tomorrow</p>
          <p className='optionsText' onClick={() => setAccessor(2)}>Day After</p>
        </div>
        <div style={{ marginBottom: 20, justifyContent: 'center', display: 'flex', alignSelf: 'center' }}>
          <hr style={{ width: '37.5vw' }} />
        </div>
      </div>

      <div className='hourlyContainer' style={{ display: accessor === 0 ? 'flex' : 'none' }}>
        <div>
          {time.map((item, id) =>
            <TimeHourly
              listOpenById={listOpenById}
              setListOpenById={setListOpenById}
              id={id}
              item={item}
            />
          )}
        </div>

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
          {time.map((item, id) =>
            <TimeHourly
              listOpenById={listOpenById}
              setListOpenById={setListOpenById}
              id={id}
              item={item}
            />
          )}
        </div>

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
          {time.map((item, id) =>
            <TimeHourly
              listOpenById={listOpenById}
              setListOpenById={setListOpenById}
              id={id}
              item={item}
            />
          )}
        </div>

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
    </div>

  )
}

export default Hourly1Weather
