import React from 'react'
import { BsCloud } from 'react-icons/bs'
import './nav.sass'

function Navbar() {
  return (
    <div className="navBar">
      <div style={{ width: '50vw', height: '100%', position: 'relative', left: '24.5%' }}>
  
        <div style={{display: 'flex', alignItems: 'center', height: '100%'}}>
          <div style={{display: 'flex'}}>
            <BsCloud size='30' color='#971414' style={{width: '3vw',}} strokeWidth='.5' />
            <p style={{alignSelf: 'center', fontFamily: 'Nunito-bold', fontSize: 20}}>QuickWeather</p>
          </div>
          <div className='buttonContainer'>
            <button className='navButton'>Today</button>
            <button className='navButton'>Hourly</button>
            <button className='navButton'>Daily</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar
