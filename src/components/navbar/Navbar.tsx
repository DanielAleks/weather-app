import React from 'react'
import { BsCloud } from 'react-icons/bs'
import './nav.sass'

function Navbar() {
  return (
    <div className="navBar"> 
      <div className='project-restrictions'>
  
        <div className='nav-items'>
          <div style={{display: 'flex'}}>
            <BsCloud size='30' color='#971414' strokeWidth='.5' />
            <p className='nav-header'>QuickWeather</p>
          </div>
          <div className='buttonContainer'>
            <button>Today</button>
            <button>Hourly</button>
            <button>Daily</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar
