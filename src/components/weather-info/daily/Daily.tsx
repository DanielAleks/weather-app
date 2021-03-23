import React, { useEffect, useState } from 'react'
import DailyInfo from './info/DailyInfo'
import './x-daily.sass'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  once: true
});

function Daily({ city, YOUR_API_KEY }) {
  const [weatherForecast, setWeatherForecast]: any = useState([])
  const weekThree = `https://api.weatherapi.com/v1/forecast.json?key=${YOUR_API_KEY}&q=${city}&days=7`

  async function weather() {
    const fetchedWeatherData = await fetch(weekThree)
    const data = await fetchedWeatherData.json()
    setWeatherForecast(data.forecast && data.forecast.forecastday)
  }

  useEffect(() => {
    weather()
  }, [city])

  return (
    <div className='daily-position' id='Daily'>
      <p className='daily-top-header' data-aos="fade-up">The Next Three Days...</p>

      <div className='daily-outer-container' data-aos="fade-left">
        {weatherForecast && weatherForecast.map((item, id) =>
          <div className="daily-container">
            <div className='daily-header'>
              <p className='daily-date'>{item.date}</p>
              <img src={item.day.condition.icon} className='day-icon' alt="dad" />
              <p className='daily-desc'>{item.day.condition.text}</p>
            </div>

            <DailyInfo item={item} />
          </div>
        )}
      </div>

    </div>
  )
}

export default Daily
