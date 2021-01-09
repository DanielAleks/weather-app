import React from 'react'
import { WiDayRainMix } from 'react-icons/wi'

function TimeHourly({listOpenById, setListOpenById, id, item}) {
  return (
    <div style={{ marginBottom: 10 }}>
      <div onClick={() => listOpenById === id ? setListOpenById(null) : setListOpenById(id)} style={{ background: '#262626', alignItems: 'center', border: 1, borderStyle: 'solid', borderRight: 'none', borderColor: '#6a6a6a', height: 100, display: 'flex' }}>
        <p style={{ width: 50, margin: 15, textAlign: 'start' }}>{item}</p>
        <WiDayRainMix className='iconsWeather' style={{ width: 80 }} size={60} color='#6e0283' />
      </div>

      {listOpenById === id ?
        <div style={{ height: '18vh', background: '#1f1f1f', }}>
        </div>
        : null}
    </div>
  )
}

export default TimeHourly
