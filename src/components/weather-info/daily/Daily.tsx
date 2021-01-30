import React, { useEffect, useState } from 'react'
import { BsCloud } from 'react-icons/bs'
import DailyInfo from './info/DailyInfo'
import './x-daily.sass'

function Daily({ YOUR_API_KEY }) {
  const [weatherForecast, setWeatherForecast]: any = useState([])

  const weekThree = `http://api.weatherapi.com/v1/forecast.json?key=${YOUR_API_KEY}&q=07112&days=7`

  async function weather() {
    const fetchedWeatherData = await fetch(weekThree)
    const data = await fetchedWeatherData.json()
    setWeatherForecast(data.forecast.forecastday)
  }

  // let days = ['']

  // const locale = {
  //   localize: {
  //     month: n => months[n],
  //     day: n => days[n]
  //   }
  // }
  // let c = locale.getInstance()
  // let closer = c.setTime(23 / 2 / 2010);
  // let me = closer.get(Calendar.DAY_OF_WEEK);


  // let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  // let d = new Date(weatherForecast.date);
  // let dayName = days[d.getDay()]
  // console.log(dayName, 'dayName')
  // console.log(d, 'd')


  useEffect(() => {
    weather()
  }, [])


  return (
    <div className='daily-position' id='Daily'>
      <p className='daily-top-header'>The Next Three Days...</p>

      <div className='daily-outer-container'>
        {weatherForecast && weatherForecast.map((item) =>
          <div className='daily-container'>
            <div className='daily-header'>
              <p className='daily-date'>{item.date}</p>
              <BsCloud className='daily-icon' size={40} />
              <p>{item.day.condition.text}</p>
            </div>

            <DailyInfo item={item} />
          </div>
        )}
      </div>

    </div>
  )
}

export default Daily
