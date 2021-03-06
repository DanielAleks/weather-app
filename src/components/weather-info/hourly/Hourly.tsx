import React, { useEffect, useState } from 'react'
import { Day, DaySelected } from '../../../reusables/DynHourly';
import './x-hourly.sass'

function Hourly({ YOUR_API_KEY, city }) {
  const [weatherLocationToday, setWeatherLocationToday]: any = useState([])
  const [weatherLocationTom, setWeatherLocationTom]: any = useState([])
  const [weatherLocationNext, setWeatherLocationNext]: any = useState([])
  const [listOpenById, setListOpenById] = useState<number>(null)
  const [accessor, setAccessor] = useState(0)
  const [number, setNumber] = useState(0)

  const weekThree = `https://api.weatherapi.com/v1/forecast.json?key=${YOUR_API_KEY}&q=${city}&days=7`

  async function weather() {
    const fetchedWeather = await fetch(weekThree)
    const data = await fetchedWeather.json()
    setWeatherLocationToday(data.forecast && data.forecast.forecastday[0].hour)
    setWeatherLocationTom(data.forecast && data.forecast.forecastday[1].hour)
    setWeatherLocationNext(data.forecast && data.forecast.forecastday[2].hour)
  }

  useEffect(() => {
    weather()
  }, [city])

  const dayData = [
    { state: weatherLocationToday, number: 0 },
    { state: weatherLocationTom, number: 1 },
    { state: weatherLocationNext, number: 2 }
  ]

  const selData = [
    { day: 'Today', number: 0 },
    { day: 'Tomorrow', number: 1 },
    { day: 'Day-After', number: 2 },
  ]

  return (
    <div id='Hourly'>
      <div className='hourlyContainerOuter'>
        {selData.map((item, id) =>
          <DaySelected
            id={id}
            selData={item}
            number={number}
            setNumber={setNumber}
            setAccessor={setAccessor}
          />
        )}
      </div>

      {dayData.map((item) =>
        <Day
          dayData={item}
          accessor={accessor}
          setListOpenById={setListOpenById}
          listOpenById={listOpenById}
        />
      )}
    </div >
  )
}

export default Hourly
