import React from 'react'
import { ImDroplet } from 'react-icons/im'
import { WiDayRainMix } from 'react-icons/wi'
import OpenedData from './OpenedData'

function LocationHourly({ item, id, setListOpenById, listOpenById }) {

  const time = ['12AM', '1AM', '2AM', '3AM', '4AM', '5AM', '6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM', '11PM']

  return (
    <div key={id} style={{ marginBottom: 10 }}>
      <div onClick={() => listOpenById === id ? setListOpenById(null) : setListOpenById(id)} style={{ display: 'flex', background: '#262626', border: 1, borderStyle: 'solid', borderColor: '#6a6a6a', borderLeft: 'none', height: 100, alignItems: 'center', }}>
        <p style={{ width: 50, margin: 15, textAlign: 'start' }}>{time[id]}</p>
        <WiDayRainMix className='iconsWeather' style={{ width: 80 }} size={60} color='#6e0283' />
        {/* <div>{item.condition.icon}</div> */}
        <p style={{ marginLeft: 10, fontSize: 40, width: 100, textAlign: 'start', fontFamily: 'Nunito-bold' }}>{item.temp_f}F°</p>
        <p style={{ width: 200, textAlign: 'center', fontSize: 14, color: '#525252' }}>Feels Like {item.feelslike_f}F°</p>
        <p style={{ width: 120, textAlign: 'start', fontSize: 20 }}>{item.condition.text}</p>
        <p style={{ width: 100, textAlign: 'end', marginRight: 30 }}>{item.chance_of_rain}% <ImDroplet /></p>
      </div>

      <div  className={`more-data ${ listOpenById === id ? 'more-data-open'  : 'more-data'}`}>
        <OpenedData item={item} />
      </div>
    </div>
  )
}

export default LocationHourly
