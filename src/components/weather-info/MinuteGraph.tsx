import React, { useEffect, useState } from 'react'

function MinuteGraph({YOUR_API_KEY}) {
const [weatherFetch2, setWeatherFetch2]: any = useState([])
const [lat, setLat] = useState('33.441792')
const [lon, setLon] = useState('-94.037689')

const current = `http://api.weatherapi.com/v1/current.json?key=${YOUR_API_KEY}&q=London`


  async function weather2nd() {
    const fetchedWeatherData = await fetch(current)
    const data = await fetchedWeatherData.json()
    setWeatherFetch2(data)
    console.log(data, 'data2sadfsdfsadfdsafsadfsadf')
  }
 

  useEffect(() => {
    weather2nd()
  }, [])


  return (
    <div>
{/* <li>{weatherFetch2.location.country}</li> */}

{/* <li>{weatherFetch2.current.cloud}</li> */}






{/* .forecast.forecastDay[0].hour[0] */}
{/* {weatherFetch2.map((item) =>
<li>{item.cloud}</li> 
)} */}
    </div>
  )
}

export default MinuteGraph
