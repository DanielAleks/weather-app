import React, { useEffect, useState } from 'react'
import { Day, DaySelected } from '../../../reusables/DynHourly';

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
    setWeatherLocationDate(data.forecast.forecastday[accessor].date)
  }

  useEffect(() => {
    weather()
  }, [])

  const dayData = [
    {
      state: weatherLocationToday,
      number: 0,
    },
    {
      state: weatherLocationTom,
      number: 1,
    },
    {
      state: weatherLocationNext,
      number: 2,
    }
  ]

  const selData = [
    {
      day: 'Today',
      number: 0
    },
    {
      day: 'Tomorrow',
      number: 1
    },
    {
      day: 'Day After',
      number: 2
    },
  ]


  return (
    <div className='backgroundContainer' id='Hourly'>
      <div className='hourlyContainer'>
        <DaySelected
          selData={selData[0]}
          setAccessor={setAccessor}
        />
        <DaySelected
          selData={selData[1]}
          setAccessor={setAccessor}
        />
        <DaySelected
          selData={selData[2]}
          setAccessor={setAccessor}
        />
      </div>

      <Day
        dayData={dayData[0]}
        accessor={accessor}
        setListOpenById={setListOpenById}
        listOpenById={listOpenById}
      />
      <Day
        dayData={dayData[1]}
        accessor={accessor}
        setListOpenById={setListOpenById}
        listOpenById={listOpenById}
      />
      <Day
        dayData={dayData[2]}
        accessor={accessor}
        setListOpenById={setListOpenById}
        listOpenById={listOpenById}
      />
    </div >
  )
}

export default Hourly
