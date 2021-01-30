import React from 'react'
import MoreData from './more/MoreData'
import { ImDroplet } from 'react-icons/im'
import { WiDayRainMix } from 'react-icons/wi'
import './x-overview.sass'
import './x-oItems.sass'

function OverviewData({ item, id, setListOpenById, listOpenById }) {

  const time = [
    '12AM', '1AM', '2AM', '3AM', '4AM', '5AM',
    '6AM', '7AM', '8AM', '9AM', '10AM', '11AM',
    '12PM', '1PM', '2PM', '3PM', '4PM', '5PM',
    '6PM', '7PM', '8PM', '9PM', '10PM', '11PM'
  ]

  return (
    <div key={id} className='hour-container-center'>
      <div
        className='overview-container'
        onClick={() =>
          listOpenById === id ?
            setListOpenById(null) :
            setListOpenById(id)}
      >
        <p className='o-time'>{time[id]}</p>
        <WiDayRainMix className='iconsWeather' size={60} />
        {/* <div>{item.condition.icon}</div> */}
        <p className='o-temp'>{item.temp_f}F°</p>
        <p className='o-feelslike'>Feels Like {item.feelslike_f}F°</p>
        <p className='o-text'>{item.condition.text}</p>
        <p className='o-rain'>{item.chance_of_rain}% <ImDroplet /></p>
      </div>

      {/* <div
        className={`more-data ${listOpenById === id ?
          'more-data-open' : 'more-data'}`}>

        //* On open 
        <MoreData item={item} />
      </div> */}
    </div>
  )
}

export default OverviewData
