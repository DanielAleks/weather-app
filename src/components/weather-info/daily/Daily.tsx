import React, { useEffect, useState } from 'react'
import { BsCloud } from 'react-icons/bs'
import './x-daily.sass'

function Daily({ YOUR_API_KEY }) {
  const [weatherForecast, setWeatherForecast]: any = useState([])
  const [weatherForecastText, setWeatherForecastText]: any = useState([])
  const [lat, setLat] = useState('33.441792')
  const [lon, setLon] = useState('-94.037689')

  const weekThree = `http://api.weatherapi.com/v1/forecast.json?key=${YOUR_API_KEY}&q=07112&days=7`


  async function weather2nd() {
    const fetchedWeatherData = await fetch(weekThree)
    const data = await fetchedWeatherData.json()
    setWeatherForecast(data.forecast.forecastday)
    setWeatherForecastText(data.forecast.forecastday.day)
    console.log(data, 'MYYYYYYYYYYYYYYYYYYYYYYYDFSFDSF')
  }


  useEffect(() => {
    weather2nd()
  }, [])


  return (
    <div style={{ marginTop: '10vh', marginBottom: '10vh' }}>

      <p style={{ textAlign: 'center', fontFamily: 'Nunito-bold', fontSize: 30, padding: 20 }}>The Next Three Days...</p>
      <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: 100 }}>
        {weatherForecast.map((item) =>
          <div className='dailyContainer'>
            <div style={{ textAlign: 'center', paddingBottom: 20 }}>
              <p style={{ fontFamily: 'Nunito-bold', fontSize: 25, paddingTop: 20 }}>{item.date}</p>
              <BsCloud className='iconnn' size={40} />
              <p>{item.day.condition.text}</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ width: '10vw' }}>
                <p className='p'>Humidity:</p>
                <p className='p'>Visability:</p>
                <p className='p'>Min:</p>
                <p className='p'>Max:</p>
                <p className='p'>Rain:</p>
                <p className='p'>Wind Speed:</p>
                <p className='p'>Precipitation:</p>
              </div>

              <div style={{ textAlign: 'end' }}>
                <p className='p'>{item.day.avghumidity}%</p>
                <p className='p'>{item.day.avgvis_miles} miles</p>
                <p className='p'>{item.day.mintemp_f}F°</p>
                <p className='p'>{item.day.maxtemp_f}F°</p>
                <p className='p'>{item.day.daily_chance_of_rain}%</p>
                <p className='p'>{item.day.maxwind_mph}mph</p>
                <p className='p'>{item.day.totalprecip_in}in.</p>
              </div>
            </div>
          </div>
        )}
      </div>

    </div>
  )
}

export default Daily
