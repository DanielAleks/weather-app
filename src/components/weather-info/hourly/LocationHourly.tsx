import React from 'react'
import { ImDroplet } from 'react-icons/im'
import OpenedData from './OpenedData'

function LocationHourly({ item, id, setListOpenById, listOpenById }) {
  return (
    <div key={id} style={{ marginBottom: 10 }}>
      <div onClick={() => listOpenById === id ? setListOpenById(null) : setListOpenById(id)} style={{ display: 'flex', background: '#262626', border: 1, borderStyle: 'solid', borderColor: '#6a6a6a', borderLeft: 'none', height: 100, alignItems: 'center', }}>
        <p style={{ marginLeft: 10, fontSize: 40, width: 100, textAlign: 'start', fontFamily: 'Nunito-bold' }}>{item.temp_f}F°</p>
        <p style={{ width: 200, textAlign: 'center', fontSize: 14, color: '#525252' }}>Feels Like {item.feelslike_f}F°</p>
        <p style={{ width: 120, textAlign: 'start', fontSize: 20 }}>{item.condition.text}</p>
        <p style={{ width: 100, textAlign: 'end', marginRight: 30 }}>{item.chance_of_rain}% <ImDroplet /></p>
      </div>

      {listOpenById === id ?
        <OpenedData item={item}/>
        : null}
    </div>
  )
}

export default LocationHourly
